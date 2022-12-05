import React from "react";

const AdminSelection = () => {
    const href = window.location.pathname;

    return (
        <div className="border px-16 py-12 bg-white min-h-screen text-hihiclothes-1">
            <h3 className="text-xl font-light mb-4">Admin</h3>

            <p className={"mb-1 hover:underline " + (href == "/admin/dashboard" ? "font-bold" : "")}><a href="/admin/dashboard">Dashboard</a></p>
            <p className={"mb-1 hover:underline " + (href == "/admin/items" ? "font-bold" : "")}><a href="/admin/items">Items</a></p>
            <p className={"mb-1 hover:underline " + (href == "/admin/purchases" ? "font-bold" : "")}><a href="/admin/purchases">Purchases</a></p>
            <p className={"mb-1 hover:underline " + (href == "/admin/stylists" ? "font-bold" : "")}><a href="/admin/stylists">Stylists</a></p>
            <p className={"mb-1 hover:underline " + (href == "/admin/bookings" ? "font-bold" : "")}><a href="/admin/bookings">Stylist Bookings</a></p>
            <p className={"mb-1 hover:underline " + (href == "/admin/returns" ? "font-bold" : "")}><a href="/admin/returns">Returns</a></p>
        </div>
    );
};

export default AdminSelection;