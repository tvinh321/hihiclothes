import React from "react";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const PaymentSuccess = () => {
    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-10 py-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Return Submitted Successfully</h1>
                        <div className="w-96 border-b border"></div>
                        <div className="pt-8">
                            <div className="grid justify-items-center">
                                <h2 className="text-center font-semibold text-lg mb-10">We're very sorry for our orders!</h2>
                                <p className="text-center font-semibold mb-10">We will consider your return submission and contact you as soon as possible.</p>
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