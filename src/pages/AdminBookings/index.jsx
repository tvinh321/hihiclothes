import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const AdminItems = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            firestore.collection("bookings").onSnapshot(snapshot => {
                setItems(snapshot.docs.map(doc => {
                    const data = doc.data();

                    return {
                        id: doc.id,
                        ...data,
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
                    <p className="mb-10 text-hihiclothes-1 text-xl font-light">Stylist Bookings</p>
                    <div className="border-b pb-4 grid grid-cols-5 gap-16 items-center justify-center font-semibold mb-4">
                        {/* <img src={item.image} className="object-cover w-full h-full" alt="" /> */}
                        <p>ID</p>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Status</p>
                        <p>Actions</p>
                    </div>
                    <div className="grid gap-4 w-full">
                        {items.map(item => (
                            <div className="border-b pb-4 grid grid-cols-5 gap-16 items-center justify-center">
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.status}</p>
                                {item.status === "waiting" ? (
                                    <button className="text-hihiclothes-1 items-center border w-fit py-2 px-4 border-hihiclothes-1" onClick={() => {
                                        firestore.collection("bookings").doc(item.id).update({
                                            status: "contacted",
                                        });
                                    }}>
                                        To Contacted
                                    </button>
                                    ) : item.status === "contacted" ? (
                                        <button className="text-hihiclothes-1 items-center border w-fit py-2 px-4 border-hihiclothes-1" onClick={() => {
                                            firestore.collection("bookings").doc(item.id).update({
                                                status: "completed",
                                            });
                                        }}>
                                            To Complete
                                        </button>
                                    ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminItems;