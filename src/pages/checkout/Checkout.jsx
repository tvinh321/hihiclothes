import React, { useEffect, useState, useRef } from 'react';

import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { firestore } from '../../firebase/firebase.utils';

import { XMarkIcon } from '@heroicons/react/24/solid';

const Checkout = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('hihiclothes-cart')) || []);

    const submit = () => {
        firestore.collection('purchases').add({
            email,
            phone,
            firstName,
            lastName,
            address,
            apartment,
            city,
            country,
            zip,
            status: 'pending',
            items: cartItems,
            createdAt: new Date(),
        }).then((docRef) => {
            window.location.href = `/payment/${docRef.id}`;
        });
    }

    const handleDelete = (id, color, size) => {
        const newCartItems = cartItems.filter((item) => item.id !== id || item.color !== color || item.size !== size);
        setCartItems(newCartItems);
        localStorage.setItem('hihiclothes-cart', JSON.stringify(newCartItems));
    }

    return (
        <div>
        <Header HiHiClothesLogo={HiHiClothesLogo} />

        <div className="pt-40">
            <div class="pl-28 pr-28 text-3xl font-bold">Checkout</div>
            <div class="bg-white mt-8 ml-28 mr-28 mb-32 grid grid-cols-3 gap-8">
                <div class="col-span-2">
                    <div class="border-solid border-2 border-[#874331] px-2 py-2">
                        <div class="grid grid-cols-2">
                            <div class="">
                                <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Contact Information</div>
                            </div>
                            <div class="place-self-end">
                                <div class="cursor-pointer w-fit pt-3 pl-4 pr-4 text-right text-base font-medium leading-loose text-[#874331]">Already have account?</div> 
                            </div>
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Phone number*" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div class="mt-8 px-2 py-4 border-solid border-2 border-[#874331]">
                        <div class="">
                            <div class="pl-4 pr-4 text-xl font-semibold leading-loose">Shipping Address</div>
                        </div>
                        <div class="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="First name*" value={firstName} onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} />                            </div>
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Last name*" value={lastName} onChange={(e) => {
                                    setLastName(e.target.value);
                                }} />                            </div>
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Company" />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Address*" value={address} onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Apartment*" value={apartment} onChange={(e) => {
                                setApartment(e.target.value)
                            }} />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="City*" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div class="mt-4 ml-4 mr-4 mb-4 grid grid-cols-2 gap-4">
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Country*" value={country} onChange={(e) => setCountry(e.target.value)} />                            </div>
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Postal Code*" value={zip} onChange={(e) => setZip(e.target.value)} />                            </div>
                        </div>
                    </div>
                    {/* <div class="mt-2 border-solid border-2 border-[#874331]">
                        <div class="">
                            <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Payment Method</div>
                        </div>
                        <div class="mt-2 ml-4 mr-4 mb-4 grid grid-cols-5 gap-4">
                            <div class="">
                                <img src={Visa} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                                <img src={Master} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                                <img src={Paypal} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                            </div>
                            <div class="">
                            </div>
                            
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card number*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card Holder Name*" />
                        </div>
                        <div class="mt-2 ml-4 mr-4 mb-4 grid grid-cols-3 gap-6">
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="mm*" />
                                </div>
                            </div>
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="yy*" />
                                </div>
                            </div>
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="000*" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div class="">
                    <div class="border-solid border-2 border-[#874331] px-2 py-2">
                        <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Promotion</div>
                        <div class="pb-4 pl-4 pr-4 text-base text-[#874331] cursor-pointer w-fit">Choose or Enter Promote code</div>
                    </div>
                    <div class="mt-8 border-solid border-2 border-[#874331] px-2 py-4">
                        <div class="pl-4 pr-4 text-xl font-semibold leading-loose mb-4">Your order</div>
                        {/* <div class="pl-4 pr-4 grid grid-cols-3">
                            <div class="">
                                <img src={Sneakers} class="object-contain h-20 w-20"/>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-left font-semibold">x 1</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-center font-semibold">$35</div>
                                </div>
                            </div>
                        </div> */}
                        {cartItems.map((item) => (
                            <div class="px-4 py-2 grid grid-cols-4 gap-4">
                                <div class="">
                                    <img src={item.image} class="object-cover h-full w-full"/>
                                </div>
                                <div className="col-span-2">
                                    {/* Name, Size, Color, Quantity */}
                                    <div class="grid grid-rows-3">
                                        <div class="font-semibold text-sm">{item.name}</div>
                                        <div class="font-semibold text-sm"><span className='font-normal'>Size: </span>{item.size}</div>
                                        <div class="font-semibold text-sm"><span className='font-normal'>Color: </span>{item.color}</div>
                                        <div class="font-semibold text-sm"><span className='font-normal'>x </span>{item.quantity}</div>
                                        <div class="font-semibold"><span className='font-normal'>Price: </span>${item.price}</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center">
                                    {/* Delete Button */}
                                    <XMarkIcon className="h-6 w-6 text-[#874331] cursor-pointer" onClick={() => handleDelete(item.id, item.color, item.size)} />
                                </div>
                            </div>
                        ))}
                        <div class="px-4 relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div class="px-8 py-2 grid grid-cols-2 gap-y-4 gap-x-2">
                            <div class="">
                                <div class="font-normal">Subtotal</div>
                            </div>
                            <div class="">
                                <div class="">${
                                    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
                                }</div>
                            </div>
                            <div class="">
                                <div class="font-normal">Shipping fee</div>
                            </div>
                            <div class="">
                                <div class="font-normal">Free</div>
                            </div>
                        </div>
                        <div class="px-8 py-2 grid grid-cols-2 gap-y-4 gap-x-2 bg-[#f58364]">
                            <div class="">
                                    <div class="text-lg font-semibold">Total order</div>
                                </div>
                                <div class="">
                                    <div class="font-semibold">${
                                    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
                                }</div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="mt-3 bg-[#B8583F]">
                        <div class="pt-2 pl-4 pr-4 pb-2 text-center font-semibold text-[#FCEBE2]">Complete Order</div>
                    </div> */}
                    <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-[#B8583F]" onClick={() => submit()}>Complete Order</button>
                </div>
            </div>
        </div>

        <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
    )
};

export default Checkout;