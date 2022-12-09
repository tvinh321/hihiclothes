import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";
import Bar from "../../components/Bar/Bar";

import { firestore } from "../../firebase/firebase.utils";

const AdminDashboard = () => {
    const [purchasesNumber, setPurchasesNumber] = React.useState(0);
    const [itemsNumber, setItemsNumber] = React.useState(0);
    const [stylistsNumber, setStylistsNumber] = React.useState(0);

    const [loading, setLoading] = React.useState(true);
    
    const [itemsBrandChart, setitemsBrandChart] = React.useState([]);
    const [itemsCollectionChart, setitemsCollectionChart] = React.useState([]);

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

        const getitemsBrandChart = async () => {
            const item1 = await firestore
            .collection('items')
            .where("brand", '==', "Nike")
            .get();
            const item2 = await firestore
            .collection('items')
            .where("brand", '==', "Adidas")
            .get();
            const item3 = await firestore
            .collection('items')
            .where("brand", '==', "Louis Vuitton")
            .get();
            const item4 = await firestore
            .collection('items')
            .where("brand", '==', "Gucci")
            .get();
            const item5 = await firestore
            .collection('items')
            .where("brand", '==', "Chanel")
            .get();
            

            setitemsBrandChart([
                {
                  "day": "Nike",
                  "amount": item1.size
                },
                {
                  "day": "Adidas",
                  "amount": item2.size
                },
                {
                  "day": "Louis Vuitton",
                  "amount": item3.size
                },
                {
                  "day": "Gucci",
                  "amount": item4.size
                },
                {
                  "day": "Chanel",
                  "amount": item5.size
                },
            ]);
        }

        const getitemsCollectionChart = async () => {
            const item1 = await firestore
            .collection('items')
            .where("collection_type", '==', "Summer")
            .get();
            const item2 = await firestore
            .collection('items')
            .where("collection_type", '==', "Winter")
            .get();
            

            setitemsCollectionChart([
                {
                  "day": "Summer",
                  "amount": item1.size
                },
                {
                  "day": "Winter",
                  "amount": item2.size
                },
            ]);
        }

        getPurchases();
        getitemsBrandChart();
        getitemsCollectionChart();
    }, []);

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <div className="col-span-3">
                    <div className="border h-48 grid grid-cols-3 gap-10 mb-5">
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
                    <div className="grid grid-cols-2 gap-10 mb-5">
                        <div className="flex justify-center bg-cream h-full">
                            {/* Card */}
                            <section className="w-full bg-transparent flex flex-col gap-4 font-DM-Sans h-full">
                                {/* My Balance Section */}
                                {/* <div className="bg-red text-white flex justify-between px-5 py-5 sm:px-8 sm:py-6 rounded-[10px] sm:rounded-[20px]">
                                <div>
                                    <h2 className="text-sm sm:text-lg">My Balance</h2>
                                    <div className="text-card-white text-2xl sm:text-3xl font-bold">
                                    $921.48
                                    </div>
                                </div>
                                <div className="self-center">
                                    <svg
                                    width="72"
                                    height="48"
                                    viewBox="0 0 72 48"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <circle fill="#382314" cx="48" cy="24" r="24" />
                                        <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
                                    </g>
                                    </svg>
                                </div>
                                </div> */}
                                {/* Spending Section */}
                                <div className="text-medium-brown bg-white px-5 py-6 h-full">
                                <div className="border-b-2 border-b-cream pb-6">
                                    <h3 className="text-dark-brown font-semibold text-2xl">
                                    Items - Brand
                                    </h3>
                                    {/* Bar Chart */}
                                    <div className="flex justify-between items-end pt-16">
                            {itemsBrandChart.map((data) => (
                                <div
                                key={data.day}
                                className="flex flex-col items-center gap-3 sm:gap-2 group cursor-pointer relative">
                                <div className="bg-dark-brown text-card-white p-2 rounded-[5px] font-bold group-hover:opacity-100 opacity-0 absolute -top-12 transition-opacity">
                                    {data.amount}
                                </div>
                                <Bar
                                    height={parseInt(data.amount * 20)}
                                    isCurrentDay={false}
                                />
                                <span>{data.day}</span>
                                </div>
                            ))}
                            </div>
                                </div>
                                {/* Spending Footer */}
                                <div className="pt-6 flex justify-between">
                                    <div>
                                    <h4 className="text-base sm:text-lg">Total this month</h4>
                                    <span className="text-dark-brown font-bold text-2xl sm:text-5xl">
                                        {itemsNumber}
                                    </span>
                                    </div>
                                    <div className="flex flex-col items-end justify-end">
                                    <div className="text-dark-brown font-bold text-base sm:text-lg">
                                        +2.4%
                                    </div>
                                    <div className="text-base sm:text-lg">from last month</div>
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div>
                        <div className="flex justify-center bg-cream h-full">
                            {/* Card */}
                            <section className="w-full bg-transparent flex flex-col gap-4 font-DM-Sans h-full">
                                {/* My Balance Section */}
                                {/* <div className="bg-red text-white flex justify-between px-5 py-5 sm:px-8 sm:py-6 rounded-[10px] sm:rounded-[20px]">
                                <div>
                                    <h2 className="text-sm sm:text-lg">My Balance</h2>
                                    <div className="text-card-white text-2xl sm:text-3xl font-bold">
                                    $921.48
                                    </div>
                                </div>
                                <div className="self-center">
                                    <svg
                                    width="72"
                                    height="48"
                                    viewBox="0 0 72 48"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd">
                                        <circle fill="#382314" cx="48" cy="24" r="24" />
                                        <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
                                    </g>
                                    </svg>
                                </div>
                                </div> */}
                                {/* Spending Section */}
                                <div className="text-medium-brown bg-white px-5 py-6 h-full">
                                <div className="border-b-2 border-b-cream pb-6">
                                    <h3 className="text-dark-brown font-semibold text-2xl">
                                    Items - Collection
                                    </h3>
                                    {/* Bar Chart */}
                                    <div className="flex justify-around items-end pt-16">
                            {itemsCollectionChart.map((data) => (
                                <div
                                key={data.day}
                                className="flex flex-col items-center gap-3 sm:gap-2 group cursor-pointer relative">
                                <div className="bg-dark-brown text-card-white p-2 rounded-[5px] font-bold group-hover:opacity-100 opacity-0 absolute -top-12 transition-opacity">
                                    {data.amount}
                                </div>
                                <Bar
                                    height={parseInt(data.amount * 10)}
                                    isCurrentDay={false}
                                />
                                <span>{data.day}</span>
                                </div>
                            ))}
                            </div>
                                </div>
                                {/* Spending Footer */}
                                <div className="pt-6 flex justify-between">
                                    <div>
                                    <h4 className="text-base sm:text-lg">Total this month</h4>
                                    <span className="text-dark-brown font-bold text-2xl sm:text-5xl">
                                        {itemsNumber}
                                    </span>
                                    </div>
                                    <div className="flex flex-col items-end justify-end">
                                    <div className="text-dark-brown font-bold text-base sm:text-lg">
                                        +2.4%
                                    </div>
                                    <div className="text-base sm:text-lg">from last month</div>
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    
                </div>                
            </div>            
        </div>
    );
}

export default AdminDashboard;