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

import "react-image-gallery/styles/css/image-gallery.css";

import { StarIcon, CheckIcon } from "@heroicons/react/24/solid"

const DetailPage = () => {
    const id = useParams().id;

    const [item, setItem] = useState(null);
    const [tab, setTab] = useState(1);
    const [itemTab, setItemTab] = useState(1);
    const [color, setColor] = useState();
    const [images, setImages] = useState([]);
    const [size, setSize] = useState();
    const [price, setPrice] = useState();

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [quantity, setQuantity] = useState(1);

    const [mixAndMatch, setMixAndMatch] = useState([]);

    const [modalAddToCart, setModalAddToCart] = useState(false);
    
    useEffect(() => {
        firestore.collection('items').doc(id).get().then(snapshot => {
            const data = snapshot.data();

            // Order Sizes
            const orderedSizes = Object.keys(data.prices).sort((a, b) => {
                if (a === 'S') return -1;
                if (a === 'M' && b === 'L') return -1;
                if (a === 'M' && b === 'XL') return -1;
                if (a === 'L' && b === 'XL') return -1;
                return 1;
            });

            // Put back the ordered sizes into the data object
            const orderedData = {
                ...data,
                prices: orderedSizes.reduce((acc, size) => {
                    acc[size] = data.prices[size];
                    return acc;
                }, {})
            }

            setItem(orderedData);
        });

        // Randomly get 5 items
        firestore.collection('items').get().then(snapshot => {
            const items = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            const randomItems = [];

            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * items.length);

                if (randomItems.find(item => item.id === items[randomIndex].id)) {
                    i--;
                    continue;
                }

                const randomItem = items[randomIndex];

                const processedItem = {
                    ...randomItem,
                    price: randomItem.prices[Object.keys(randomItem.prices)[0]][Object.keys(randomItem.prices[Object.keys(randomItem.prices)[0]])[0]].price,
                    image: randomItem.images[Object.keys(randomItem.images)[0]][0],
                }

                randomItems.push(processedItem);
            }

            setMixAndMatch(randomItems);
        });
    }, [id]);

    useEffect(() => {
        setSizes(Object.keys(item?.prices || {}));
        setSize(Object.keys(item?.prices || {})[0]);
    }, [item]);

    useEffect(() => {
        setColors(Object.keys(item?.prices[size] || {}));
        setColor(Object.keys(item?.prices[size] || {})[0]);
    }, [size]);

    useEffect(() => {
        setImages(item?.images[color]?.map(
            (image) => ({
                original: image,
                thumbnail: image
            })
        ) || []);
        setPrice(item?.prices[size][color]?.price || 0);
    }, [color]);

    const handleAddToCart = () => {
        const cartItem = {
            id: id,
            name: item.name,
            price: price,
            quantity: Number(quantity),
            image: images[0].original,
            color: color,
            size: size
        };

        const cart = JSON.parse(localStorage.getItem('hihiclothes-cart')) || [];
        const index = cart.findIndex((item) => item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size);
        if (index === -1) {
            cart.push(cartItem);
        } else {
            cart[index].quantity += Number(cartItem.quantity);
        }
        localStorage.setItem('hihiclothes-cart', JSON.stringify(cart));
        setModalAddToCart(true);
    }
    
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
                                            <button onClick={() => handleAddToCart()} className="bg-gray-900 text-white px-16 py-4 rounded-full ml-4">Add to Cart</button>
                                        </div>

                                        <div className="mt-16">
                                            <div className="relative mt-8">
                                                {/* 3 Tabs Black Text with a underline */}
                                                <button className={(itemTab === 1 ? "text-black border-b-2 border-black" : "text-gray-500") + " mr-8 font-bold"} onClick={() => setItemTab(1)}>Description</button>
                                                <button className={(itemTab === 2 ? "text-black border-b-2 border-black" : "text-gray-500") + " mr-8 font-bold"} onClick={() => setItemTab(2)}>Shipping</button>
                                                <button className={(itemTab === 3 ? "text-black border-b-2 border-black" : "text-gray-500") + " font-bold"} onClick={() => setItemTab(3)}>Size Guide</button>
                                                {/* Light Line under all 3 tabs */}
                                                <div className="absolute top-7 border-b w-96" />

                                                {itemTab === 1 ? (
                                                    <div className="mt-8">
                                                        <p>{item.description}</p>
                                                    </div>
                                                ) : itemTab === 2 ? (
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
                                                ) : (
                                                    <div className="mt-8">
                                                        <p>{item.sizeGuide}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-8">
                                    {/* Reviews Page using data from item.reviews */}
                                    <h1 className="font-semibold text-xl">Reviews</h1>
                                    <div className="mt-8">
                                        {item.reviews.map(review => (
                                            <div className="w-full p-4 border-b">
                                                <div className="flex items-center">
                                                    <StarIcon className="h-5 text-yellow-500 mr-2" />
                                                    <p>{Number(review.stars).toFixed(1)} / 5.0</p>
                                                </div>
                                                <p>{review.content}</p>
                                            </div>    
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h1 className="font-semibold text-2xl mt-16">Mix-and-Match Items</h1>
                                <div className="grid grid-cols-5 gap-8 mt-8 w-[70rem]">
                                    {mixAndMatch?.map(item => (
                                        <a href={`/item/${item.id}`}>
                                        <div className="bg-white border border-rose-600 shadow-md overflow-hidden h-full">
                                            <div className="relative pb-48 overflow-hidden">
                                                <img src={item.image} className="absolute inset-0 w-full h-full object-cover" />

                                                <div className="absolute inset-0 bg-black opacity-25" />
                                            </div>

                                            <div className="px-4 py-4">
                                                <h1 className="font-semibold text-lg">{item.name}</h1>
                                                <p className="text-gray-500 text-sm">${item.price}</p>
                                            </div>
                                        </div>
                                        </a>
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

            {/* Add To Cart Modal */}
            <div className={`fixed inset-0 z-50 overflow-y-auto ${modalAddToCart ? 'block' : 'hidden'}`}>
                <div className="flex items-end justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Item Added to Cart
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {item?.name} has been added to your cart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={() => setModalAddToCart(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Continue Shopping
                            </button>
                            <a href="/checkout">
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Go to Cart
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;