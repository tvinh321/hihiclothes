import React, { useState, useEffect } from "react";
import { firestore } from '../../firebase/firebase.utils';

import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import Paypal from '../../assets/paypal.png';

import Skirt from '../../assets/skirts.png';

import "react-image-gallery/styles/css/image-gallery.css";

const DetailPage = () => {
    const id = useParams().id;

    const [item, setItem] = useState(null);
    const [tab, setTab] = useState(1);
    const [itemTab, setItemTab] = useState(1);
    const [color, setColor] = useState();
    const [images, setImages] = useState([]);
    const [size, setSize] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        // firestore.collection('items').doc(id).get().then(snapshot => {
        //     console.log(snapshot.data());
        //     setItem(snapshot.data());
        // });
        setItem({
            "images": {
                "Black": [
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e43624ce76d940f985d3ae8b013a39f4_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_DJen_HI4947_21_model.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae6b3286127648c6baf1ae8b013a4310_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_DJen_HI4947_23_hover_model.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/680f745798bf4186b03bae8b013a4bec_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_DJen_HI4947_25_model.jpg"
                ],
                "Light Green": [
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89acaadc2b8743198e9aae3f01284926_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_mau_xanh_la_HC8809_21_model.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43306e0e21454ae2adeeae3f01284ff5_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_mau_xanh_la_HC8809_23_hover_model.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9fa91565548b42cc8cb9ae3f0128591d_9366/Ao_Hoodie_Khoa_Keo_Slim_Fit_Mission_Victory_mau_xanh_la_HC8809_25_model.jpg"
                ]
            },
            "type": "Shirt",
            "discount": 0.2,
            "reviews": [
                {
                    "stars": 4.8,
                    "content": "Great Product !"
                },
                {
                    "stars": "2.8",
                    "content": "I hate it !"
                }
            ],
            "description": "Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape. Named after James Morgan, the engineer who built the Regent's Canal, it features custom elements including fluid single piece bridge, adjustable nose pads and temple tips based on Constantin Brâncuși's Bird in Space.",
            "summary": "Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape.",
            "prices": {
                "XL": {
                    "Black": {
                        "price": 10,
                        "stock": 200
                    }
                },
                "M": {
                    "Light Green": {
                        "price": 10,
                        "stock": 100
                    },
                    "Black": {
                        "price": 10,
                        "stock": 200
                    }
                },
                "L": {
                    "Light Green": {
                        "price": 10,
                        "stock": 200
                    }
                }
            },
            "name": "Basic Hooded Sweatshirt"
        })
    }, [id]);

    useEffect(() => {
        setColor(item?.images && Object.keys(item?.images)[0]);
        setSize(item?.prices && Object.keys(item?.prices)[0]);
        setPrice(item?.prices && item?.prices[Object.keys(item?.prices)[0]][Object.keys(item?.images)[0]]?.price);
        setStock(item?.prices && item?.prices[Object.keys(item?.prices)[0]][Object.keys(item?.images)[0]]?.stock);
    }, [item]);

    useEffect(() => {
        setColors(item?.prices && Object.keys(item.prices[size]));
    }, [size]);

    useEffect(() => {
        item?.images && item?.images[color] && setImages(item?.images[color].map(image => ({
            original: image,
            thumbnail: image,
            thumbnailHeight: 100,
            thumbnailWidth: 100,
            originalHeight: 1000,
            originalWidth: 1000,
        })));

        setPrice(item?.prices && item?.prices[size][color]?.price);
    }, [color]);

    useEffect(() => {
        item?.prices && item?.prices[size] && item?.prices[size][color] && setPrice(item?.prices[size][color]?.price);
        item?.prices && item?.prices[size] && item?.prices[size][color] && setStock(item?.prices[size][color]?.stock);
    }, [size, color]);
    
    return (
        <>
            <Header HiHiClothesLogo={HiHiClothesLogo} />
            <div className="mt-32 px-32 pt-12 pb-36 leading-relaxed">
                {item ? (
                    <div>
                        <h1 className="font-bold text-4xl">{item.name}</h1>
                        <div className="mt-8">
                            <button className={(tab === 1 ? "text-[#17696A] rounded-xl border-[#17696A]" : "border-white text-gray-400") + " mr-4 px-6 py-3 border font-bold"} onClick={() => setTab(1)}>General Info</button>
                            <button className={(tab === 2 ? " text-[#17696A] rounded-xl border-[#17696A]" : "border-white text-gray-400") + " px-6 py-3 border font-bold"} onClick={() => setTab(2)}>Reviews <sup>{item.reviews?.length}</sup></button>
                        </div>

                        <div className="mt-8">
                            {tab === 1 ? (
                                <div className="grid grid-cols-2 gap-16">
                                    <div className="mt-12">
                                        <ImageGallery items={images} />
                                        <div className="w-[36rem] mt-16 border-b" />
                                        <div>
                                            <h1 className="font-semibold text-xl mt-8 text-gray-700">Return</h1>
                                            <p className="text-gray-600 leading-loose mt-4">You have 60 days to return the item(s) using any of the following methods:</p>
                                            <ul className="list-disc ml-8 text-gray-600 leading-loose">
                                                <li>Free store return</li>
                                                <li>Free return via Dropoff Service</li>
                                            </ul>
                                        </div>
                                        <div className="w-[36rem] mt-8 border-b" />
                                        <div className="grid grid-cols-3 gap-3 mt-8 w-96">
                                            <img src={Visa} alt="Visa" />
                                            <img src={Mastercard} alt="Mastercard" />
                                            <img src={Paypal} alt="Paypal" />
                                        </div>
                                    </div>

                                    <div className="text-gray-700 mr-10">
                                        <p className="text-2xl text-gray-600">${price}</p>
                                        <p className="text-sm text-gray-500">incl. local Tax & Shipping.</p>
                                        <div className="mt-12 text-gray-700">
                                            <p>{item.summary}</p>
                                        </div>

                                        <div className="mt-12">
                                            <p className="text-gray-600">Select Size: <span className="text-gray-500">{size?.toUpperCase()}</span></p>
                                        </div>

                                        <div className={`grid grid-cols-${Object.keys(item.prices).length} gap-3 transition-all duration-300 mt-4`}>
                                        {Object.keys(item.prices).map(item => (
                                                <button className={(size === item ? "border-gray-700" : "bg-white text-gray-500") + " px-4 py-2 border rounded-xl"} onClick={() => setSize(item)}>{item.toUpperCase()}</button>
                                            ))}
                                        </div>

                                        <div className="mt-12">
                                            <p className="text-gray-600">Select Color: <span className="text-gray-500">{color}</span></p>
                                        </div>

                                        <div className={`grid grid-cols-${Object.keys(item.images).length} gap-3 transition-all duration-300 mt-4`}>
                                            {colors?.map(item => (
                                                <button className={(color === item ? "border-gray-700" : "bg-white text-gray-500") + " px-4 py-2 border rounded-xl"} onClick={() => setColor(item)}>{item}</button>
                                            ))}
                                        </div>

                                        <div>
                                          <input type="number" className="w-32 mt-8 border border-gray-500 rounded px-4 py-3" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                                            <button className="bg-gray-900 text-white px-16 py-4 rounded-full ml-4">Add to Cart</button>
                                        </div>

                                        <div className="mt-16">
                                            <div className="relative mt-8">
                                                {/* 3 Tabs Black Text with a underline */}
                                                <button className={(itemTab === 1 ? "text-black border-b-2 border-black" : "text-gray-500") + " mr-8 font-bold"} onClick={() => setItemTab(1)}>Description</button>
                                                <button className={(itemTab === 2 ? "text-black border-b-2 border-black" : "text-gray-500") + " mr-8 font-bold"} onClick={() => setItemTab(2)}>Shipping</button>
                                                <button className={(itemTab === 3 ? "text-black border-b-2 border-black" : "text-gray-500") + " font-bold"} onClick={() => setItemTab(3)}>Reviews</button>
                                                {/* Light Line under all 3 tabs */}
                                                <div className="absolute top-7 border-b w-96" />

                                                {itemTab === 1 ? (
                                                    <div className="mt-8">
                                                        <p>{item.description}</p>
                                                    </div>
                                                ) : itemTab === 2 ? (
                                                    <div className="mt-8">
                                                        <p>{item.shipping}</p>
                                                    </div>
                                                ) : (
                                                    <div className="mt-8">
                                                        <p>{item.sizeGuide}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-semibold text-xl mt-8">Delivery</h1>
                                            <p>Free standard shipping on orders over $35 before tax, plus free returns.</p>

                                            <table className="table-auto w-full mt-4">
                                                <thead className="text-left">
                                                    <tr>
                                                        <th className="px-8 py-3 font-normal text-sm text-gray-500">TYPE</th>
                                                        <th className="px-8 py-3 font-normal text-sm text-gray-500">HOW MUCH</th>
                                                        <th className="px-8 py-3 font-normal text-sm text-gray-500">HOW LONG</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border-t px-8 py-3 text-sm">Standard</td>
                                                        <td className="border-t px-8 py-3 text-sm">$0.00</td>
                                                        <td className="border-t px-8 py-3 text-sm">3-5 business days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-t px-8 py-3 text-sm">Express</td>
                                                        <td className="border-t px-8 py-3 text-sm">$10.00</td>
                                                        <td className="border-t px-8 py-3 text-sm">2-3 business days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-t px-8 py-3 text-sm">Next Day</td>
                                                        <td className="border-t px-8 py-3 text-sm">$20.00</td>
                                                        <td className="border-t px-8 py-3 text-sm">1 business day</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-8">
                                </div>
                            )}

                            <div>
                                <h1 className="font-semibold text-2xl mt-16">Mix-and-Match Items</h1>
                                <div className="grid grid-cols-5 gap-8 mt-8 w-[70rem]">
                                    {Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)).map(item => (
                                        <div className="bg-white border border-rose-600 shadow-md overflow-hidden">
                                            <div className="relative pb-48 overflow-hidden">
                                                <img src={Skirt} className="absolute inset-0 w-full h-full object-cover" />

                                                <div className="absolute inset-0 bg-black opacity-25" />
                                            </div>

                                            <div className="px-4 py-4">
                                                <h1 className="font-semibold text-lg">Item Name</h1>
                                                <p className="text-gray-500 text-sm">$20.00</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Skeleton
                    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex justify-center items-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                        </div>
                        <div class="w-full">
                            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                )}
            </div>
            <Footer HiHiClothesLogo={HiHiClothesLogo} />
        </>
    );
};

export default DetailPage;