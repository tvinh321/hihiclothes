
import React from 'react';

import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

import Sneakers from '../../assets/sneakers.png';

import { useSearchParams } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { firestore } from '../../firebase/firebase.utils';

const BrandList = [
    "Nike",
    "Adidas",
    "Louis Vuitton",
    "Gucci",
    "Chanel",
]

const ProductList = () => {
    const [products, setProducts] = React.useState([]);
    
    const searchParams = new URLSearchParams(window.location.search);
    const brand = searchParams.get('brand');
    const type = searchParams.get('type');
    const collection = searchParams.get('collection');

    /*
    {
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
                    "stars": 2.8,
                    "content": "I hate it !"
                }
            ],
            "description": "Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape. Named after James Morgan, the engineer who built the Regent's Canal, it features custom elements including fluid single piece bridge, adjustable nose pads and temple tips based on Constantin Brâncuși's Bird in Space.",
            "summary": "Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape.",
            "prices": {
                "XL": {
                    "Black": {
                        "price": 100,
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
        }
    */

    React.useEffect(() => {
        let query = firestore.collection('items')
        
        if (brand) {
            query = query.where('brand', '==', brand);
        }

        if (type) {
            query = query.where('type', '==', type);
        }

        if (collection) {
            query = query.where('collection_type', '==', collection);
        }
        
        query.get().then(snapshot => {
            const products = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                    price: doc.data().prices[Object.keys(doc.data().prices)[0]][Object.keys(doc.data().prices[Object.keys(doc.data().prices)[0]])[0]].price,
                    image: doc.data().images[Object.keys(doc.data().images)[0]][0],
                }
            })
            setProducts(products);
        })
    }, [])

    return (
    <div className="">
        <Header HiHiClothesLogo={HiHiClothesLogo} />

        <div className="pb-6">
            <div class="bg-white mt-32 grid grid-cols-5 grid-flow-col">
                <div class="w-xl-80 h-fit border-[#874331] border bg-white relative px-1 mt-36 ml-28 py-6">
                    <h1 className="text-center mt-4 font-semibold text-lg text-hihiclothes-1">Brands</h1>
                    <ul class="relative content-center">
                        {
                            BrandList.map((brand) => (
                                <li class="relative text-center my-4">
                                    <a class="items-center text-sm py-4 px-6 h-12 font-medium overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-red-900 transition duration-300 ease-in-out cursor-pointer" onClick={() => {
                                    // If the brand is already selected, remove it from the URL
                                    if (brand === searchParams.get('brand')) {
                                        searchParams.delete('brand');
                                    }
                                    else {
                                        searchParams.set('brand', brand);
                                    }
                                    window.location = `${window.location.pathname}?${searchParams.toString()}`;
                                }} data-mdb-ripple="true" data-mdb-ripple-color="dark">{brand}</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                <div class="col-span-4 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-red-900 text-center">{type || (collection && `${collection} Collection`)}</h2>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a href={`/item/${product.id}`}>
                            <div class="group relative border-[#874331] border h-full">
                            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img src={product.image} alt="Front of men&#039;s Basic Shoes in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="flex justify-between p-4">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        {product.name}
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">${product.price}</p>
                                </div>
                                <div>
                                    {/* <p class="text-sm font-medium text-red-900">$35</p> */}
                                    <button type="button" class="mt-1 inline-block px-6 py-2 border border-red-800 text-red-800 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Detail</button>
                                </div>
                            </div>
                        </div></a>
                        ))}
                    </div>
                    {/* <div class="mt-12 flex justify-center">
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
                    </div> */}
                </div>
            </div>
        </div>

        <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
    )
};

export default ProductList;