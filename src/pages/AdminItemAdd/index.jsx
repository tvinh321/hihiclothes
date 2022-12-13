import React from "react";

import AdminSelection from "../../components/admin-selection/AdminSelection";
import AdminHeader from "../../components/admin-header/AdminHeader";

import { firestore, storage } from "../../firebase/firebase.utils";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const AdminItemAdd = () => {
    const [name, setName] = React.useState();
    const [summary, setSummary] = React.useState();
    const [description, setDescription] = React.useState();
    const [type, setType] = React.useState();
    const [collection_type, setCollectionType] = React.useState();
    const [brand, setBrand] = React.useState();
    const [colors, setColors] = React.useState([]);
    const [sizes, setSizes] = React.useState([]);
    const [images, setImages] = React.useState({});
    const [prices, setPrices] = React.useState({});

    const updateItem = async () => {
        let data = {};

        data.name = name;
        data.summary = summary;
        data.description = description;
        data.type = type;
        data.collection_type = collection_type;
        data.brand = brand;
        data.images = images;
        data.prices = prices;

        await firestore.collection("items").add(data).then(() => {
            window.location.href = "/admin/items";
        });
    }

    return (
        <div className="bg-gray-100">
            <AdminHeader />
            <div className="grid grid-cols-4 gap-10 mx-10 py-10">
                <AdminSelection />
                <form onSubmit={() => {

                }} className="w-full col-span-3">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input value={name} className="appearance-none block w-full border py-3 px-4 mb-3 leading-tight focus:outline-none" id="name" type="text" placeholder="Jane" onChange={(e) => {
                                setName(e.target.value);
                            }} />  

                            <label htmlFor="summary" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Summary
                            </label>
                            <textarea value={summary} className="appearance-none block w-full text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none h-36" id="summary" type="text" placeholder="Jane" onChange={(e) => {
                                setSummary(e.target.value);
                            }} />

                            <label htmlFor="description" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Description
                            </label>
                            <textarea value={description} className="appearance-none block w-full text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none h-36" id="description" type="text" placeholder="Jane" onChange={(e) => {
                                setDescription(e.target.value);
                            }} />

                            <label htmlFor="type" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Type
                            </label>
                            <select value={type} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline mb-3" id="type" onChange={(e) => {
                                setType(e.target.value);
                            }}>
                                <option value="" disabled selected>--- Select Type ---</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Dress">Dress</option>
                                <option value="Jacket">Jacket</option>
                                <option value="Pants">Pants</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Glasses">Glasses</option>
                                <option value="Bag">Bag</option>
                            </select>

                            <label htmlFor="collection_type" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Collection Type
                            </label>
                            <select value={collection_type} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline mb-3" id="collection_type" onChange={(e) => {
                                setCollectionType(e.target.value);
                            }}>
                                <option value="" disabled selected>--- Select Collection Type ---</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                            </select>

                            <label htmlFor="brand" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Brand
                            </label>
                            <select value={brand} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline mb-3" id="brand" onChange={(e) => {
                                setBrand(e.target.value);
                            }}>
                                <option value="" disabled selected>--- Select Brand ---</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Louis Vuitton">Louis Vuitton</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Chanel">Chanel</option>
                            </select>

                            <label htmlFor="colors" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Colors
                            </label>
                            <div className="flex flex-wrap gap-2 flex-col">
                                {colors.map((color, index) => {
                                    return (
                                        <div className="flex gap-2 w-full">
                                            <input value={color} className="appearance-none block border py-3 px-4 mb-3 leading-tight focus:outline-none w-32 h-10" id="colors" type="text" placeholder="Jane" onChange={(e) => {
                                                let newColors = [...colors];
                                                newColors[index] = e.target.value;
                                                setColors(newColors);
                                            }} />

                                            <div className="flex justify-items-stretch gap-2">
                                            {
                                                images[color] && images[color].map((image, index) => {
                                                    return (
                                                        <div className="flex flex-col gap-2">
                                                            <img src={image} alt = "image" className="h-20 w-20 object-cover" />
                                                            <button onClick={() => {
                                                                let newImages = {...images};
                                                                newImages[color].splice(index, 1);
                                                                setImages(newImages);
                                                            }} className="bg-red-500 hover:bg-red-700 text-white font-bold focus:outline-none focus:shadow-outline h-6 w-8 flex justify-center items-center" type="button">
                                                                <MinusIcon className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                    );
                                                })
                                            }

                                            <input type="file" onChange={(e) => {
                                                let file = e.target.files[0];
                                                let storageRef = storage.ref();
                                                let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                                                let imageRef = storageRef.child(`images/${randomString}`);
                                                imageRef.put(file).then((snapshot) => {
                                                    imageRef.getDownloadURL().then((url) => {
                                                        let newImages = {...images};
                                                        if (!newImages[color]) {
                                                            newImages[color] = [];
                                                        }
                                                        newImages[color].push(url);
                                                        setImages(newImages);
                                                    });
                                                });
                                            }} />
                                            </div>

                                            <div className="relative w-full">
                                                <button onClick={() => {
                                                    let newColors = [...colors];
                                                    newColors.splice(index, 1);
                                                    setColors(newColors);
                                                }} className="bg-red-500 hover:bg-red-700 text-white font-bold focus:outline-none focus:shadow-outline flex justify-center items-center px-4 h-10 place-self-end absolute right-0" type="button">
                                                    Delete Color
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="w-full relative h-16">
                                    <button onClick={() => {
                                        let newColors = [...colors];
                                        newColors.push("");
                                        setColors(newColors);
                                    }} className="bg-hihiclothes-1 hover:bg-hihiclothes-3 text-white font-bold focus:outline-none focus:shadow-outline px-4 py-2 w-fit absolute right-0" type="button">
                                        Add Color
                                    </button>
                                </div>
                            </div>

                            <label htmlFor="sizes" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Sizes
                            </label>
                            <div className="flex flex-col gap-2">
                                {sizes.map((size, index) => {
                                    return (
                                        <div className="flex gap-2">
                                            <input value={size} className="appearance-none block w-32 border py-3 px-4 mb-3 leading-tight focus:outline-none" id="sizes" type="text" placeholder="Size" onChange={(e) => {
                                                let newSizes = [...sizes];
                                                newSizes[index] = e.target.value;
                                                setSizes(newSizes);
                                            }} />

                                            <input value={prices[size] && prices[size][Object.keys(prices[size])[0]].price} className="appearance-none block w-32 border py-3 px-4 mb-3 leading-tight focus:outline-none" id="prices" type="number" placeholder="Price" onChange={(e) => {
                                                let newPrices = {...prices};
                                                if (!newPrices[size]) {
                                                    newPrices[size] = {};
                                                }

                                                colors.map((color) => {
                                                    newPrices[size][color] = {
                                                        price: Number(e.target.value),
                                                        stock: 100
                                                    }
                                                });
                                                setPrices(newPrices);
                                            }} />

                                            <button onClick={() => {
                                                let newSizes = [...sizes];
                                                newSizes.splice(index, 1);
                                                setSizes(newSizes);
                                            }} className="bg-red-500 hover:bg-red-700 text-white font-bold focus:outline-none focus:shadow-outline h-6 w-8 flex justify-center items-center" type="button">
                                                <MinusIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    );
                                })}
                                <button onClick={() => {
                                    let newSizes = [...sizes];
                                    newSizes.push("");
                                    setSizes(newSizes);
                                }} className="bg-hihiclothes-1 hover:bg-hihiclothes-3 text-white font-bold focus:outline-none focus:shadow-outline h-6 w-8 flex justify-center items-center" type="button">
                                    <PlusIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={() => {
                            updateItem();
                        }} className="bg-hihiclothes-1 hover:bg-hihiclothes-3 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminItemAdd;