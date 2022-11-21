import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

const AdminDashboard = () => {
    const [purchasesNumber, setPurchasesNumber] = React.useState(0);
    const [itemsNumber, setItemsNumber] = React.useState(0);
    const [stylistsNumber, setStylistsNumber] = React.useState(0);

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const getPurchases = async () => {
            setLoading(true);

            const [purchases, items, stylists] = await Promise.all([
                firestore.collection("purchases").get(),
                firestore.collection("items").get(),
                firestore.collection("stylists").get()
            ]);

            setPurchasesNumber(purchases.size);
            setItemsNumber(items.size);
            setStylistsNumber(stylists.size);

            setLoading(false);
        }

        getPurchases();
    }, []);

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <div className="border h-48 col-span-3 grid grid-cols-3 gap-10">
                    <div className="flex items-center justify-center bg-white">
                        {!loading
                        ? (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold text-gray-500 mb-2">{purchasesNumber}</span>
                                <span className="text-sm">Purchases</span>
                            </div>
                        )
                        : (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold bg-gray-200 rounded-full mb-2 animate-pulse h-10 w-12"></span>
                                <span className="text-sm animate-pulse bg-gray-200 rounded-full h-4 w-16"></span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center bg-white">
                    {!loading
                        ? (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold text-gray-500 mb-2">{itemsNumber}</span>
                                <span className="text-sm">Items</span>
                            </div>
                        )
                        : (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold bg-gray-200 rounded-full mb-2 animate-pulse h-10 w-12"></span>
                                <span className="text-sm animate-pulse bg-gray-200 rounded-full h-4 w-16"></span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center bg-white">
                    {!loading
                        ? (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold text-gray-500 mb-2">{stylistsNumber}</span>
                                <span className="text-sm">Bookings</span>
                            </div>
                        )
                        : (
                            <div className="flex flex-col items-center">
                                <span className="text-4xl font-bold bg-gray-200 rounded-full mb-2 animate-pulse h-10 w-12"></span>
                                <span className="text-sm animate-pulse bg-gray-200 rounded-full h-4 w-16"></span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;