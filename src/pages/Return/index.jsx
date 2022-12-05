import React from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { firestore } from "../../firebase/firebase.utils";

// Return Form
const Return = () => {
    const { id } = useParams();

    const [type, setType] = React.useState("");
    const [reason, setReason] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        firestore.collection("returns").add({
            type,
            reason,
            description,
            orderID: id,
            createdAt: new Date(),
        })
        .then(() => {
            window.location.href = "/return-success";
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-6 py-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Return Form</h1>
                        <div className="w-96 border-b border"></div>
                        <div className="py-8">
                            <div className="grid justify-items-center">
                                <h2 className="text-center text-lg mb-5 font-semibold">Order ID: <span className="font-normal">{id}</span></h2>
                                <p className="text-center font-semibold">Please fill out the form below to request a return.</p>
                                <p className="text-center font-semibold mb-10">We will contact you as soon as possible.</p>
                            </div>

                            <form className="w-full">
                                <p className="mb-2 font-semibold">Type</p>
                                <select name="type" id="type" className="w-full mb-4 rounded-lg border border-hihiclothes-3 px-2 py-2" onChange={(e) => {
                                    setType(e.target.value);
                                }}>
                                    <option disabled selected value> -- Select a Type -- </option>
                                    <option value="refund">Refund</option>
                                    <option value="size-change">Size Change</option>
                                </select>

                                <p className="mb-2 font-semibold">Reason</p>
                                <select name="reason" id="reason" className="w-full mb-4 rounded-lg border border-hihiclothes-3 px-2 py-2" onChange={(e) => {
                                    setReason(e.target.value);
                                }}>
                                    <option disabled selected value> -- Select a Reason -- </option>
                                    <option value="wrong-size">Wrong Size</option>
                                    <option value="wrong-color">Wrong Color</option>
                                    <option value="wrong-item">Wrong Item</option>
                                    <option value="damaged">Damaged</option>
                                    <option value="other">Other</option>
                                </select>

                                <p className="mb-2 font-semibold">Description</p>
                                <textarea name="description" id="description" cols="30" rows="10" placeholder="Please describe your problem here." className="w-full mb-4 rounded-lg border border-hihiclothes-3 px-2 py-2" onChange={(e) => {
                                    setDescription(e.target.value);
                                }}></textarea>
                            </form>

                            <div className="grid justify-items-center">
                                <button className="bg-[#874331] text-white font-semibold text-lg px-10 py-2 rounded-lg mt-10" onClick={(e) => handleSubmit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
};

export default Return;