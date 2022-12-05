import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

import { DocumentIcon } from "@heroicons/react/24/solid";

import moment from "moment";

const AdminItems = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            const items = await firestore.collection("returns").get();

            setItems(items.docs.map(doc => {
                const data = doc.data();

                return {
                    id: doc.id,
                    ...data,
                    createdAt: moment(data.createdAt.toDate()).format("YYYY-MM-DD hh:mm")
                }
            }));
        }

        getItems();
    }, []);

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <div className="bg-white col-span-3 px-12 py-12">
                    <p className="mb-10 text-hihiclothes-1 text-xl font-light">Returns</p>
                    <div className="grid gap-4 w-full">
                        <div className="border-b pb-4 grid grid-cols-5 gap-16 items-center justify-center font-semibold">
                            <p>Created At</p>
                            <p>Order ID</p>
                            <p>Type</p>
                            <p>Status</p>
                            <p>Actions</p>
                        </div>
                        {items.map(item => (
                            <div className="border-b pb-4 grid grid-cols-5 gap-16 items-center justify-center">
                                <p>{item.createdAt}</p>
                                <p className="font-semibold">{item.orderID}</p>
                                <p className="text-sm">{item.type}</p>
                                <p className="text-sm">{item.status || "pending"}</p>
                                <div className="flex items-center">
                                    <div className="flex text-blue-500 items-center justify-center mr-5 hover:text-blue-400 cursor-pointer" onClick={() => {
                                        window.location.href = `/admin/return/${item.id}`;
                                    }}>
                                        <DocumentIcon className="w-4 h-4 mr-1" />
                                        <p>Detail</p>
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