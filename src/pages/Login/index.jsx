import React, { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import { auth } from "../../firebase/firebase.utils";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [loginError, setLoginError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        let hasError = false;

        if (!email || email == "") {
            setEmailError("Please enter your email.");
            hasError = true;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email.");
            hasError = true;
        }

        if (!password || password == "") {
            setPasswordError("Please enter your password.");
            hasError = true;
        }

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            hasError = true;
        }

        if (!hasError) {
            setLoginError("");

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    localStorage.setItem("hihiclothes-user", JSON.stringify(user));
                    window.location.href = "/";
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    
                    if (errorCode === "auth/wrong-password") {
                        setLoginError("Wrong password.");
                    }
                    else if (errorCode === "auth/user-not-found") {
                        setLoginError("User not found.");
                    }
                    else {
                        setLoginError(errorMessage);
                    }
                });
        }
    }

    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="grid justify-items-center mt-32 py-16">
                <div className="w-[32rem] border-[#874331] border-2 px-10 pb-8 pt-8">
                    <div className="grid justify-items-center w-full">
                        <h1 className="text-center font-semibold text-2xl mb-10">Login</h1>
                        <div className="w-96 border-b border"></div>
                        {loginError && <p className="mt-10 text-red-500 text-center w-full bg-red-200 text-red-700 font-bold py-4">{loginError}</p>}
                        <div className="py-8 w-full">
                            <div className="grid justify-items-center">
                                <div className="w-full">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
                                    <button
                                        className="bg-[#874331] hover:bg-[#aa5b46] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition-all duration-300"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="w-full mt-4">
                                    <button
                                        className="bg-white border-hihiclothes-1 border hover:bg-[#b85f46] hover:text-white text-hihiclothes-1 font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition-all duration-300"
                                        type="button"
                                        onClick={() => window.location.href = "/register"}
                                    >
                                        Go to Register
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

export default Login;