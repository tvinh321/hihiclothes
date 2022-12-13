import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import { useRef } from "react";

const Payment = () => {
    const { id } = useParams();

    const [cartItems, setCartItems] = useState([]);
    const totalPrice = useRef(0);

    useEffect(() => {
        firestore.collection("purchases").doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    setCartItems(doc.data().items);
                    totalPrice.current = doc.data().total;
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, []);

    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-10 pb-16 pt-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Payment with PayPal</h1>
                        <div className="w-96 border-b border"></div>

                        <div className="py-8">
                            {cartItems.map((item) => (
                                <div class="px-4 py-2 grid grid-cols-4 gap-4">
                                    <div class="">
                                        <img src={item.image} class="object-cover h-full w-full"/>
                                    </div>
                                    <div className="col-span-2">
                                        {/* Name, Size, Color, Quantity */}
                                        <div class="grid grid-rows-3">
                                            <div class="font-semibold text-sm">{item.name}</div>
                                            <div class="font-semibold text-sm"><span className='font-normal'>Size: </span>{item.size}</div>
                                            <div class="font-semibold text-sm"><span className='font-normal'>Color: </span>{item.color}</div>
                                            <div class="font-semibold text-sm"><span className='font-normal'>x </span>{item.quantity}</div>
                                        </div>
                                    </div>
                                    <div class="">
                                        {/* Price */}
                                        <div class="grid grid-rows-3">
                                            <div class="row-start-2 text-center font-semibold">${item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-96 border-b border mb-8"></div>
                        <div className="w-full">
                            <PayPalScriptProvider options={{ "client-id": "Ac8qxpTo8V8ktrTqouE4LreB5wn0pDBXfrJ-m3SiYc4aP7JhQcocVZpkgxI1iGjCWqk5eyPB0j9o_22j" }}>
                                <PayPalButtons
                                    style={{
                                        shape: 'rect',
                                        color: 'gold',
                                        layout: 'vertical',
                                        label: 'paypal',
                                    }}

                                    forceReRender={[cartItems]}

                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [{
                                                amount: {
                                                    value: totalPrice.current,
                                                }
                                            }],
                                        });
                                    }}

                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(async function (details) {
                                            await firestore.collection("purchases").doc(id).update({
                                                status: "paid"
                                            })

                                            window.location.href = "/payment-success";
                                        });
                                    }}

                                    onError={(err) => {
                                        console.log(err);
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
}

export default Payment;