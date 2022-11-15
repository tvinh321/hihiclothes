import React from "react";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const PaymentSuccess = () => {
    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-10 pb-16 pt-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Payment Success</h1>
                        <div className="w-96 border-b border"></div>
                        <div className="py-8">
                            <div className="grid justify-items-center">
                                <h2 className="text-center font-semibold text-xl mb-10">Thank you for your purchase!</h2>
                                <p className="text-center font-semibold text-lg mb-10">Your order will be shipped to you soon.</p>
                                <p className="text-center font-semibold text-lg mb-10">You can check your order status in your account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
};

export default PaymentSuccess;