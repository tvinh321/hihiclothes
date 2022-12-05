import React, { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import { auth, firestore } from "../../firebase/firebase.utils";

import moment from "moment";

const Orders = () => {
    const user = JSON.parse(localStorage.getItem("hihiclothes-user"));
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        if (!user) {
            window.location.href = "/login";
        }

        firestore.collection("purchases").where("email", "==", user.email).orderBy("createdAt", "desc").get()
            .then((querySnapshot) => {
                let orders = [];
                querySnapshot.forEach((doc) => {
                    orders.push({
                        id: doc.id,
                        ...doc.data(),
                        createdAt: moment(doc.data().createdAt.toDate())
                    });
                });
                setOrders(orders);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, []);

    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="mt-32 py-16">
                {!loading ? (
                    <>
                    {orders.length > 0 ? (
                        <div className="container mx-auto px-40 text-hihiclothes-1">
                            <h1 className="text-2xl font-bold text-center mb-8">My Purchases</h1>
                            <div className="grid grid-cols-1 gap-4">
                                {orders.map((order) => (
                                    <div className="border border-gray-300 rounded-md p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="font-semibold">Order ID: {order.id}</div>
                                            <div className="font-semibold text-sm border-hihiclothes-1 border rounded-full py-1 px-2">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
                                        </div>
                                        <div className="w-full border-b border-gray-300 my-4"></div>
                                        {order.items.map((item) => (
                                            <div className="flex text-sm mb-4">
                                                <div className="flex w-2/3">
                                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-5" />
                                                    <div className="font-semibold cursor-pointer" onClick={() => {
                                                        window.location.href = `/item/${item.id}`;
                                                    }}>{item.name}</div>
                                                </div>
                                                <div className="font-semibold w-1/6">x{item.quantity}</div>
                                                <p className="font-semibold text-right w-1/6">${item.price}</p>
                                            </div>
                                        ))}
                                        <div className="w-full border-b border-gray-300 my-4"></div>
                                        <div className="flex justify-between items-center">
                                            <div className="font-semibold">Total</div>
                                            <div className="font-semibold">${order.total}</div>
                                        </div>
                                        {order.status === "pending" ? (
                                            <div className="flex justify-end items-center mt-4">
                                                <button className="bg-hihiclothes-1 text-white font-semibold py-2 px-4 rounded-md" onClick={() => {
                                                    window.location.href = `/payment/${order.id}`;
                                                }}>Pay Now</button>
                                            </div>
                                            ) : (order.status === "shipped" && 
                                                moment(order.createdAt).add(7, "days").isAfter(moment())
                                            ) && (
                                                <div className="flex justify-end items-center mt-4">
                                                    <button className="bg-hihiclothes-1 text-white font-semibold py-2 px-4 rounded-md" onClick={() => {
                                                        window.location.href = `/return/${order.id}`;
                                                    }}>Return</button>
                                                </div>
                                            )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="container mx-auto">
                            <h1 className="text-2xl font-bold text-center mb-8 text-hihiclothes-1">You have no purchases</h1>
                        </div>
                    )}
                    </>
                ) : (
                    <div role="status" class="py-4 px-40 mx-40 space-y-4 rounded divide-y divide-gray-200 shadow animate-pulse md:p-6">
                        <h1 className="text-2xl font-bold text-center mb-8 text-hihiclothes-1">My Purchases</h1>
                        <div class="flex justify-between items-center pt-4">
                            <div>
                                <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                                <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                            <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <div class="flex justify-between items-center pt-4">
                            <div>
                                <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                                <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                            <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <div class="flex justify-between items-center pt-4">
                            <div>
                                <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                                <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                            <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <div class="flex justify-between items-center pt-4">
                            <div>
                                <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                                <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                            <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <div class="flex justify-between items-center pt-4">
                            <div>
                                <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                                <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                            <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                )}
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
}

export default Orders;