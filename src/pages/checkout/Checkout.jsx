import React, { useEffect, useState, useRef } from "react";

import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { firestore } from "../../firebase/firebase.utils";

import { XMarkIcon } from "@heroicons/react/24/solid";

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    zip: "",
  });

  const [errorMsgs, setErrorMsgs] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    zip: "",
  });

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("hihiclothes-cart")) || []
  );

  const [modalAddToCart, setModalAddToCart] = useState(false);

  const validateFormValues = () => {
    if (!cartItems.length) {
      setModalAddToCart(true);
      return false;
    }
    let emptyFields = [];
    for (let key in errorMsgs) {
      if (formValues[key] === "" && key !== "apartment") {
        emptyFields.push(key);
      }
    }
    if (emptyFields.length > 0) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        emptyFields.forEach((field) => {
          newState[field] = "This field is required";
        });
        return newState;
      });
    }

    const digitReg = new RegExp("^[0-9]*$");
    if (!digitReg.test(formValues.phone)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState["phone"] = "Please enter a valid phone number";
        return newState;
      });
    }
    if (!digitReg.test(formValues.zip)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState.zip = "Please enter a valid zip code";
        return newState;
      });
    }
    if (/\d/.test(formValues.firstName)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState.firstName = "First name should not contain numbers";
        return newState;
      });
    }
    if (/\d/.test(formValues.lastName)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState.lastName = "Last name should not contain numbers";
        return newState;
      });
    }
    if (/\d/.test(formValues.country)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState.lastName = "Country should not contain numbers";
        return newState;
      });
    }
    if (/\d/.test(formValues.city)) {
      setErrorMsgs((prevState) => {
        const newState = { ...prevState };
        newState.lastName = "City should not contain numbers";
        return newState;
      });
    }

    setTimeout(() => {
      for (let key in errorMsgs) {
        if (errorMsgs[key] !== "") {
          return false;
        }
      }
      return true;
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsgs({
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      country: "",
      zip: "",
    });
    if (validateFormValues()) {
      const {
        email,
        phone,
        firstName,
        lastName,
        address,
        apartment,
        city,
        country,
        zip,
      } = formValues;
      firestore
        .collection("purchases")
        .add({
          email,
          phone,
          firstName,
          lastName,
          address,
          apartment,
          city,
          country,
          zip,
          status: "pending",
          items: cartItems,
          createdAt: new Date(),
        })
        .then((docRef) => {
          window.location.href = `/payment/${docRef.id}`;
        });
    }
  };

  const handleDelete = (id, color, size) => {
    const newCartItems = cartItems.filter(
      (item) => item.id !== id || item.color !== color || item.size !== size
    );
    setCartItems(newCartItems);
    localStorage.setItem("hihiclothes-cart", JSON.stringify(newCartItems));
  };

  return (
    <div>
      <Header HiHiClothesLogo={HiHiClothesLogo} />

      <div className="pt-40">
        <div className="pl-28 pr-28 text-3xl font-bold">Checkout</div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="bg-white mt-8 ml-28 mr-28 mb-32 grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="border-solid border-2 border-[#874331] px-2 py-2">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">
                      Contact Information
                    </div>
                  </div>
                  <div className="place-self-end">
                    <div className="cursor-pointer w-fit pt-3 pl-4 pr-4 text-right text-base font-medium leading-loose text-[#874331]">
                      Already have account?
                    </div>
                  </div>
                </div>
                <div className="mt-4 ml-4 mr-4">
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Email*"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                  />
                  <p className="mt-2 text-sm text-red-400">{errorMsgs.email}</p>
                </div>
                <div className="mt-4 ml-4 mr-4 mb-4">
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="tel"
                    placeholder="Phone number*"
                    value={formValues.phone}
                    minLength="10"
                    maxLength="11"
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
                  />
                  <p className="mt-2 text-sm text-red-400">{errorMsgs.phone}</p>
                </div>
              </div>
              <div className="mt-8 px-2 py-4 border-solid border-2 border-[#874331]">
                <div>
                  <div className="pl-4 pr-4 text-xl font-semibold leading-loose">
                    Shipping Address
                  </div>
                </div>
                <div className="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                  <div>
                    <input
                      className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      placeholder="First name*"
                      value={formValues.firstName}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          firstName: e.target.value,
                        });
                      }}
                    />
                    <p className="mt-2 text-sm text-red-400">
                      {errorMsgs.firstName}
                    </p>
                  </div>
                  <div>
                    <input
                      className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      placeholder="Last name*"
                      value={formValues.lastName}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          lastName: e.target.value,
                        });
                      }}
                    />
                    <p className="mt-2 text-sm text-red-400">
                      {errorMsgs.lastName}
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-4 mr-4">
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Address*"
                    value={formValues.address}
                    onChange={(e) => {
                      setFormValues({ ...formValues, address: e.target.value });
                    }}
                  />
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.address}
                  </p>
                </div>
                <div className="mt-4 ml-4 mr-4">
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Apartment/Company"
                    value={formValues.apartment}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        apartment: e.target.value,
                      });
                    }}
                  />
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.apartment}
                  </p>
                </div>
                <div className="mt-4 ml-4 mr-4 mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <input
                      className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      placeholder="City*"
                      value={formValues.city}
                      onChange={(e) =>
                        setFormValues({ ...formValues, city: e.target.value })
                      }
                    />
                    <p className="mt-2 text-sm text-red-400">
                      {errorMsgs.city}
                    </p>
                  </div>
                  <div>
                    <input
                      className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      minLength={5}
                      maxLength={5}
                      placeholder="Postal Code*"
                      value={formValues.zip}
                      onChange={(e) =>
                        setFormValues({ ...formValues, zip: e.target.value })
                      }
                    />
                    <p className="mt-2 text-sm text-red-400">{errorMsgs.zip}</p>
                  </div>
                </div>
                <div className="mt-4 ml-4 mr-4">
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Country*"
                    value={formValues.country}
                    onChange={(e) =>
                      setFormValues({ ...formValues, country: e.target.value })
                    }
                  />
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.country}
                  </p>
                </div>
              </div>
              {/* <div className="mt-2 border-solid border-2 border-[#874331]">
                        <div >
                            <div className="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Payment Method</div>
                        </div>
                        <div className="mt-2 ml-4 mr-4 mb-4 grid grid-cols-5 gap-4">
                            <div >
                                <img src={Visa} className="object-contain h-15 w-25"/>
                            </div>
                            <div >
                                <img src={Master} className="object-contain h-15 w-25"/>
                            </div>
                            <div >
                                <img src={Paypal} className="object-contain h-15 w-25"/>
                            </div>
                            <div >
                            </div>
                            <div >
                            </div>
                            
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card number*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card Holder Name*" />
                        </div>
                        <div className="mt-2 ml-4 mr-4 mb-4 grid grid-cols-3 gap-6">
                            <div >
                                <div >
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="mm*" />
                                </div>
                            </div>
                            <div >
                                <div >
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="yy*" />
                                </div>
                            </div>
                            <div >
                                <div >
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="000*" />
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>
            <div>
              <div className="border-solid border-2 border-[#874331] px-2 py-2">
                <div className="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">
                  Promotion
                </div>
                <div className="pb-4 pl-4 pr-4 text-base text-[#874331] cursor-pointer w-fit">
                  Choose or Enter Promote code
                </div>
              </div>
              <div className="mt-8 border-solid border-2 border-[#874331] px-2 py-4">
                <div className="pl-4 pr-4 text-xl font-semibold leading-loose mb-4">
                  Your order
                </div>
                {/* <div className="pl-4 pr-4 grid grid-cols-3">
                            <div >
                                <img src={Sneakers} className="object-contain h-20 w-20"/>
                            </div>
                            <div >
                                <div className="grid grid-rows-3">
                                    <div className="row-start-2 text-left font-semibold">x 1</div>
                                </div>
                            </div>
                            <div >
                                <div className="grid grid-rows-3">
                                    <div className="row-start-2 text-center font-semibold">$35</div>
                                </div>
                            </div>
                        </div> */}
                {cartItems.map((item) => (
                  <div className="px-4 py-2 grid grid-cols-4 gap-4">
                    <div>
                      <img
                        src={item.image}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="col-span-2">
                      {/* Name, Size, Color, Quantity */}
                      <div className="grid grid-rows-3">
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="font-semibold text-sm">
                          <span className="font-normal">Size: </span>
                          {item.size}
                        </div>
                        <div className="font-semibold text-sm">
                          <span className="font-normal">Color: </span>
                          {item.color}
                        </div>
                        <div className="font-semibold text-sm">
                          <span className="font-normal">x </span>
                          {item.quantity}
                        </div>
                        <div className="font-semibold">
                          <span className="font-normal">Price: </span>$
                          {item.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* Delete Button */}
                      <XMarkIcon
                        className="h-6 w-6 text-[#874331] cursor-pointer"
                        onClick={() =>
                          handleDelete(item.id, item.color, item.size)
                        }
                      />
                    </div>
                  </div>
                ))}
                <div className="px-4 relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="px-8 py-2 grid grid-cols-2 gap-y-4 gap-x-2">
                  <div>
                    <div className="font-normal">Subtotal</div>
                  </div>
                  <div>
                    <div>
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-normal">Shipping fee</div>
                  </div>
                  <div>
                    <div className="font-normal">Free</div>
                  </div>
                </div>
                <div className="px-8 py-2 grid grid-cols-2 gap-y-4 gap-x-2 bg-[#f58364]">
                  <div>
                    <div className="text-lg font-semibold">Total order</div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-3 bg-[#B8583F]">
                        <div className="pt-2 pl-4 pr-4 pb-2 text-center font-semibold text-[#FCEBE2]">Complete Order</div>
                    </div> */}
              <button
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-[#B8583F]"
                type="submit"
              >
                Complete Order
              </button>
            </div>
          </div>
        </form>
        <div
          className={`fixed inset-0 z-50 overflow-y-auto ${
            modalAddToCart ? "block" : "hidden"
          }`}
        >
          <div className="flex items-end justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <XMarkIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-hihiclothes-1"
                      id="modal-headline"
                    >
                      You have not selected any item!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        Go to homepage and shopping!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <a href="/">
                  <button
                    onClick={() => setModalAddToCart(false)}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Let's Shopping
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
  );
};

export default Checkout;
