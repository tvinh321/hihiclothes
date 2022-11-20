import React, { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import { auth, firestore } from "../../firebase/firebase.utils";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (!email || email == "") {
            setEmailError("Please enter your email.");
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email.");
        }

        if (!password || password == "") {
            setPasswordError("Please enter your password.");
        }

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
        }

        if (!confirmPassword || confirmPassword == "") {
            setConfirmPasswordError("Please enter your confirm password.");
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
        }

        if (emailError || passwordError || confirmPasswordError) {
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                var user = userCredential.user;

                await firestore.collection("users").doc(user.uid).set({
                    email: user.email,
                    createdAt: new Date(),
                }).then(() => {
                    localStorage.setItem("hihiclothes-user", JSON.stringify(user));
                    window.location.href = "/";
                }).catch((error) => {
                    alert(error);
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            }
        );
    }

    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-10 pb-8 pt-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Register</h1>
                        <div className="w-96 border-b border"></div>
                        <div className="py-8 w-full">
                            <div className="grid justify-items-center">
                                <div className="w-full">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-hihiclothes-1 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                                </div>
                                <div className="w-full mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-hihiclothes-1 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
                                </div>
                                <div className="w-full mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border border-hihiclothes-1 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="******************"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {confirmPasswordError && <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>}
                                </div>
                                <div className="w-full mt-4">
                                    <button
                                        className="bg-[#874331] hover:bg-[#aa5b46] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition-all duration-300"
                                        type="button"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
}

export default Register;