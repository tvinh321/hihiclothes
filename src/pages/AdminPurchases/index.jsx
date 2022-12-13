import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const AdminItems = () => {
    const [purchases, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            firestore.collection("purchases").orderBy('createdAt', 'desc').onSnapshot(snapshot => {
                setItems(snapshot.docs.map(doc => {
                    const data = doc.data();
    
                    return {
                        id: doc.id,
                        ...data,
                        item: data.items[Object.keys(data.items)[0]][0]
                    }
                }));
            });
        }

        getItems();
    }, []);
    
    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <div className="bg-white col-span-3 px-12 py-12">
                    <p className="mb-10 text-hihiclothes-1 text-xl font-light">Purchases</p>
                    <div className="grid gap-4 w-full">
                        <div className="border-b pb-4 grid grid-cols-4 gap-16 items-center justify-center font-semibold">
                            {/* <img src={item.image} className="object-cover w-full h-full" alt="" /> */}
                            <p>ID</p>
                            <p>Price</p>
                            <p>Status</p>
                            <p>Actions</p>
                        </div>
                        {purchases.map(item => (
                            <div className="border-b pb-4 grid grid-cols-4 gap-16 items-center justify-center">
                                {/* <img src={item.image} className="object-cover w-full h-full" alt="" /> */}
                                <p className="font-semibold">{item.id}</p>
                                <p className="font-sm">{item.total ? `$${item.total}` : "Unknown"}</p>
                                <p className="text-sm">{item.status}</p>
                                <div className="flex items-center">
                                    <div className="flex text-blue-500 items-center justify-center mr-5 cursor-pointer hover:text-blue-400">
                                        {
                                            item.status == "paid" ? (
                                                <button className="flex text-blue-500 items-center justify-center mr-5 cursor-pointer hover:text-blue-400" onClick={() => {
                                                    firestore.collection("purchases").doc(item.id).update({
                                                        status: "shipping"
                                                    });
                                                }}>
                                                    <PencilIcon className="mr-2 h-4 w-4" />
                                                    <p className="w-32 text-left">To Ship</p>
                                                </button>
                                            ) : item.status == "shipping" ? (
                                                <button className="flex text-blue-500 items-center justify-center mr-5 cursor-pointer hover:text-blue-400" onClick={() => {
                                                    firestore.collection("purchases").doc(item.id).update({
                                                        status: "delivered"
                                                    });
                                                }}>
                                                    <PencilIcon className="mr-2 h-4 w-4" />
                                                    <p className="w-32 text-left">To Delivered</p>
                                                </button>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminItems;