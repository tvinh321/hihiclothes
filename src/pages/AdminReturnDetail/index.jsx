import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore } from "../../firebase/firebase.utils";

import { DocumentIcon } from "@heroicons/react/24/solid";

import moment from "moment";

import { useParams } from "react-router-dom";

const AdminItems = () => {
    const { id } = useParams();
    const [submit, setSubmit] = React.useState(null);
    const [order, setOrder] = React.useState(null);

    React.useEffect(() => {
        const getItems = async () => {
            const item = await firestore.collection("returns").doc(id).get();
            const order = await firestore.collection("purchases").doc(item.data().orderID).get();

            setSubmit({
                id: item.id,
                ...item.data(),
                createdAt: moment(item.data().createdAt.toDate()).format("YYYY-MM-DD hh:mm")
            });

            setOrder({
                id: order.id,
                ...order.data(),
                createdAt: moment(order.data().createdAt.toDate()).format("YYYY-MM-DD hh:mm")
            });
        }

        getItems();
    }, []);

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                {submit && order && (
                    <div className="bg-white col-span-3 px-12 py-12">
                    <p className="mb-10 text-hihiclothes-1 text-xl font-light">Return Detail</p>
                    <div className="grid gap-2 w-full">
                        <p><span className="font-semibold">Order ID:</span> {submit.orderID}</p>
                        <p><span className="font-semibold">Created At:</span> {submit.createdAt}</p>
                        <p><span className="font-semibold">Type:</span> {submit.type}</p>
                        <p><span className="font-semibold">Reason:</span> {submit.reason}</p>
                        <p><span className="font-semibold">Description:</span> {submit.description}</p>
                        <p><span className="font-semibold">Status: </span>{
                            submit.status === "rejected" ? (
                                <span className="text-red-500 font-semibold">Rejected</span>
                            ) : submit.status === "approved" ? (
                                <span className="text-green-500 font-semibold">Approved</span>
                            ) : (
                                <span className="text-amber-500 font-semibold">Pending</span>
                            )
                        }</p>
                        <p><span className="font-semibold">Order Items:</span></p>
                        {order.items.map(item => (
                            <div className="grid grid-cols-6 mb-4">
                                <div className="flex col-span-3">
                                    <img src={item.image} alt="" className="w-24 h-24 object-cover mr-4" />
                                    <p>{item.name}</p>
                                </div>
                                <p>${item.price}</p>
                                <p>x{item.quantity}</p>
                                <p>{item.size}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        {submit.status === "pending" && (
                            <>
                                <button className="bg-hihiclothes-1 text-white px-5 py-2 rounded-lg mr-2" onClick={() => {
                                    firestore.collection("returns").doc(submit.id).update({
                                        status: "approved"
                                    }).then(() => {
                                        alert("Return approved!");
                                        window.location.reload();
                                    }).catch(err => {
                                        alert(err.message);
                                    });
                                }}>Approve</button>
                                <button className="bg-hihiclothes-1 text-white px-5 py-2 rounded-lg" onClick={() => {
                                    firestore.collection("returns").doc(submit.id).update({
                                        status: "rejected"
                                    }).then(() => {
                                        alert("Return rejected!");
                                        window.location.reload();
                                    }).catch(err => {
                                        alert(err.message);
                                    });
                                }}>Reject</button>
                            </>
                        )}
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default AdminItems;