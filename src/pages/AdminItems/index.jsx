import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore, doc, deleteDoc } from "../../firebase/firebase.utils";

import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";

const AdminItems = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            firestore.collection("items").onSnapshot(snapshot => {
                setItems(snapshot.docs.map(doc => {
                    const data = doc.data();
    
                    return {
                        id: doc.id,
                        ...data,
                        image: data.images[Object.keys(data.images)[0]][0]
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
                    <div className="flex">
                        <p className="mb-10 text-hihiclothes-1 text-xl font-light">Items</p>
                        <div className="relative w-full">
                            <a href="/admin/items/add" className="flex text-blue-500 items-center justify-center cursor-pointer hover:text-blue-400 absolute right-0">
                                <PlusIcon className="w-4 h-4 mr-1" />
                                <p>Add Item</p>
                            </a>
                        </div>
                    </div>
                    <div className="grid gap-4 w-full">
                        {items.map(item => (
                            <div className="border-b pb-4 grid grid-cols-4 gap-16 items-center justify-center">
                                <img src={item.image} className="object-cover w-full h-full" alt="" />
                                <p className="font-semibold text-lg">{item.name}</p>
                                <p className="text-sm">{item.summary}</p>
                                <div className="flex items-center justify-center">
                                    <a href={`/admin/items/edit/${item.id}`} className="flex text-blue-500 items-center justify-center mr-5 cursor-pointer hover:text-blue-400">
                                        <PencilIcon className="w-4 h-4 mr-1" />
                                        <p>Edit</p>
                                    </a>
                                    <div onClick={() => {
                                        firestore.collection("items").doc(item.id).delete();
                                    }} className="flex text-red-500 items-center justify-center cursor-pointer hover:text-red-400">
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