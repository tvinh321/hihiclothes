import React from "react";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

const handleLogout = () => {
    localStorage.removeItem("hihiclothes-admin");
    window.location.href = "/admin";
}

const AdminHeader = () => {
    return (
        <div className="grid grid-cols-2 text-hihiclothes-1 bg-white">
            <div className="flex items-center">
                <div className="ml-24 w-32 h-36 flex items-center justify-center">
                    <HiHiClothesLogo className="w-24 h-24 fill-hihiclothes-1" /> 
                </div>
                <span className="text-lg cursor-default">Admin</span>
            </div>
            <div className="flex justify-end items-center mr-24">
                <p className="cursor-pointer" onClick={() => handleLogout()}>Log Out</p>
            </div>
        </div>
    );
}

export default AdminHeader;