import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const AdminItems = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            const items = await firestore.collection("items").get();

            setItems(items.docs.map(doc => {
                const data = doc.data();

                return {
                    id: doc.id,
                    ...data,
                    image: data.images[Object.keys(data.images)[0]][0]
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
                    <p className="mb-10 text-hihiclothes-1 text-xl font-light">Stylist Bookings</p>
                    <div className="grid gap-4 w-full">
                        {items.map(item => (
                            <div className="border-b pb-4 grid grid-cols-4 gap-16 items-center justify-center">
                                <img src={item.image} className="object-cover w-full h-full" alt="" />
                                <p className="font-semibold text-lg">{item.name}</p>
                                <p className="text-sm">{item.summary}</p>
                                <div className="flex items-center justify-center">
                                    <div className="flex text-blue-500 items-center justify-center mr-5 cursor-pointer hover:text-blue-400">
                                        <PencilIcon className="w-4 h-4 mr-1" />
                                        <p>Edit</p>
                                    </div>
                                    <div className="flex text-red-500 items-center justify-center cursor-pointer hover:text-red-400">
                                        <TrashIcon className="w-4 h-4 mr-1" />
                                        <p>Delete</p>
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