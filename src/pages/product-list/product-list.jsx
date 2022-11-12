
import React from 'react';

import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

import Sneakers from '../../assets/sneakers.png';


import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { productList } from './product-list-styles';

const ProductList = () => (
    <div className="">
        <Header HiHiClothesLogo={HiHiClothesLogo} />

        <div className="relative">
            <div class="bg-white mt-32 grid grid-cols-5 grid-flow-col">
                <div class="w-xl-80 h-72 shadow-lg bg-white relative px-1 mt-36 ml-28">
                    <ul class="relative content-center py-6">
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Nike</a>
                        </li>
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Addidas</a>
                        </li>
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Puma</a>
                        </li>
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Louis Vutton</a>
                        </li>
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Gucci</a>
                        </li>
                        <li class="relative text-center my-4">
                            <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Chanel</a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-4 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-red-900 text-center">Shoes</h2>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                        <div class="group relative shadow-xl">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={Sneakers} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic Shoes
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">$35</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="mt-12 flex justify-center">
                        <nav aria-label="Page navigation example">
                            <ul class="flex list-style-none">
                                <li class="page-item"><a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                    href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a></li>
                                <li class="page-item"><a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">1</a></li>
                                <li class="page-item"><a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">2</a></li>
                                <li class="page-item"><a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">3</a></li>
                                <li class="page-item"><a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
);

export default ProductList;