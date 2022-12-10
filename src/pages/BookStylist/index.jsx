import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";
import { CheckIcon } from "@heroicons/react/24/solid";
import { sortBy } from "lodash";

import BeTrendy from "../../assets/beTrendy.jpg";
import BeNice from "../../assets/beNice.jpg";
import BeFabulous from "../../assets/beFabulous.jpg";

import ChauBui from "../../assets/chaubui.jpg";
import ChooseOutfit from "../../assets/chooseoutfit.jpg";
import MakeUp from "../../assets/makeup.webp";
import StyleHair from "../../assets/stylehair.webp";
import CountUpComponent from "./CountUp";
import PaginatedStylists from "./PaginatedStylist";

import { firestore } from "../../firebase/firebase.utils";

const BookStylist = () => {
  const [dobType, setDobType] = useState("text");
  const [fromDateType, setFromDateType] = useState("text");
  const [toDateType, setToDateType] = useState("text");
  const [formValues, setFormValues] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    fromDate: "",
    toDate: "",
    stylist: {
      id: "",
      name: "",
    },
    note: "",
    phone: "",
  });
  const [chosenStylist, setChosenStylist] = useState("");

  const [modalAddToCart, setModalAddToCart] = useState(false);

  const [stylists, setStylists] = useState([]);

  const getStylists = async () => {
    const stylists = await firestore.collection("stylists").get();

    setStylists(
      stylists.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
        };
      })
    );
  };

  useEffect(() => {
    getStylists();
  }, []);

  const today = new Date();
  const defaultDate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  const handleAddToCart = (cartItem) => {
    const cart = JSON.parse(localStorage.getItem("hihiclothes-cart")) || [];
    const index = cart.findIndex(
      (item) => item.id === cartItem.id && item.name === cartItem.name
    );
    if (index === -1) {
      cart.push(cartItem);
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("hihiclothes-cart", JSON.stringify(cart));
    setModalAddToCart(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firestore
      .collection("bookings")
      .add({
        ...formValues,
        status: "waiting",
        createdAt: new Date(),
      })
      .then(() => {
        alert(
          `Successfully booking! ${formValues.stylist.name} will contact you soon`
        );
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Header HiHiClothesLogo={HiHiClothesLogo} />
      <div
        style={{ backgroundColor: "#F4EBE6" }}
        className="w-full bg-hihiclothes-2 mt-0 flex max-h-[32rem]"
      >
        <div className="w-1/2">
          <img
            src={ChauBui}
            alt="Chau Bui"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-1/2 pt-40">
          <a href="/product-list?collection=Winter">
            <div className="mt-28 ml-10 leading-loose text-hihiclothes-1 cursor-pointer">
              <h2 className="font-serif text-lg">
                Wearing expensive outfits does not make you become fashionable
              </h2>
              <h1 className="text-4xl leading-10 tracking-wide font-semibold mt-3">
                Self-confident attitude <br /> and Unique characteristic do
              </h1>
              <h2 className="font-serif text-lg text-center mt-3">Chau Bui</h2>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- Grid 3 Content --> */}
      <div className="mt-28">
        <div className=" text-center">
          <p className="text-neutral-400 font-semibold">Our mission</p>
          <p className="text-hihiclothes-1 font-bold text-3xl">
            What we can do for you
          </p>
        </div>
        <div className="flex justify-center items-center w-10/12 lg:w-8/12 mx-auto mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
              <img
                className="w-full h-44 object-cover"
                src={ChooseOutfit}
                alt="Choose Outfit"
              />
              <div className="p-6 pb-12">
                <div className="font-bold text-xl mb-2">
                  Choose your outfits
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nihil quos, error eos officia, quam laborum.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
              <img
                className="w-full h-44 object-cover"
                src={MakeUp}
                alt="Make Up"
              />
              <div className="p-6 pb-12">
                <div className="font-bold text-xl mb-2">
                  Make you look pretty
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nihil quos, error eos officia, quam laborum.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
              <img
                className="w-full h-44 object-cover"
                src={StyleHair}
                alt="Style Hair"
              />
              <div className="p-6 pb-12">
                <div className="font-bold text-xl mb-2">Style your hair</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nihil quos, error eos officia, quam laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 py-16 w-full bg-hihiclothes-1">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/4 text-white text-center">
            <CountUpComponent
              id={1}
              endNumb={stylists.length}
              item="Experienced Stylists"
            />
          </div>

          <div className="w-1/4 text-white text-center">
            <CountUpComponent
              id={2}
              endNumb={320}
              suffix=" K"
              item="Satisfied Customers"
            />
          </div>

          <div className="w-1/4 text-white text-center">
            <CountUpComponent
              id={3}
              endNumb={97}
              suffix=" %"
              item="Positive Feedback"
            />
          </div>

          <div className="w-1/4 text-white text-center">
            <CountUpComponent id={4} endNumb={72} item="Fashion Concepts" />
          </div>
        </div>
      </div>

      <div className="mt-28">
        <div className=" text-center mb-14">
          <p className="text-neutral-400 font-semibold">Our stylists</p>
          <p className="text-hihiclothes-1 font-bold text-3xl">
            All the people who brings beauty and confidence to you
          </p>
        </div>
        <PaginatedStylists
          stylistList={stylists}
          setChosenStylist={setChosenStylist}
        />
      </div>

      <div className="pl-28 pr-28 mt-32">
        <div className="mt-16 text-center">
          <p className="text-neutral-400 font-semibold">
            Our preferential-price packages
          </p>
          <p className="text-hihiclothes-1 font-bold text-3xl">
            Choose the perfect one for you
          </p>
        </div>

        <div className="flex justify-center items-center gap-x-4 mt-12">
          <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 ">
            <h5 className="mb-4 text-2xl font-medium text-hihiclothes-1 text-center">
              Be Nice
            </h5>
            <div className=" text-neutral-700 text-center">
              <sup className="text-lg">$</sup>
              <span className="text-2xl font-semibold tracking-tight text-neutral-900">
                999
              </span>
            </div>
            <hr className="my-4 border-hihiclothes-1" />
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  1 stylist
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  1 concepts
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  2 mix-and-match outfit sets
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  1 makeup layout
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  2 <b>simple</b> hairstyle layouts
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  Max hiring time: During day
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  + 25$/extra hour
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-hihiclothes-1 hover:bg-hihiclothes-3 focus:ring-4 focus:outline-none focus:ring-hihiclothes-1 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              onClick={() =>
                handleAddToCart({
                  id: 1,
                  name: "Be Nice",
                  price: 999,
                  quantity: 1,
                  image: BeNice,
                  type: "Stylist",
                })
              }
            >
              Choose plan
            </button>
          </div>

          <div className="w-full max-w-sm text-white border rounded-lg shadow-md">
            <div className="bg-hihiclothes-1 w-full rounded-t-lg sm:p-8 p-4">
              <h5 className="mb-4 text-2xl font-medium text-center">
                Be Fabulous
              </h5>
              <div className=" text-[#ffd6cc] text-center">
                <sup className="text-lg">$</sup>
                <span className="text-2xl font-semibold tracking-tight">
                  1999
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-8 sm:pt-1">
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-700 ">
                    2 stylists
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    2 concepts
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    3 mix-and-match outfit sets
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    2 makeup layouts
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    2 hairstyle layouts
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    Max hiring time: 5 days
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-neutral-800 ">
                    + 5$/extra hour
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-semibold leading-tight text-neutral-800 ">
                    1 additional accessory item
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-semibold leading-tight text-neutral-800 ">
                    1 free makeup item (random)
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-hihiclothes-1 hover:bg-hihiclothes-3 focus:ring-4 focus:outline-none focus:ring-hihiclothes-1 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                onClick={() =>
                  handleAddToCart({
                    id: 2,
                    name: "Be Fabulous",
                    price: 1999,
                    quantity: 1,
                    image: BeFabulous,
                    type: "Stylist",
                  })
                }
              >
                Choose plan
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 ">
            <h5 className="mb-4 text-2xl font-medium text-hihiclothes-1 text-center">
              Be Trendy
            </h5>
            <div className=" text-neutral-700 text-center">
              <sup className="text-lg">$</sup>
              <span className="text-2xl font-semibold tracking-tight text-neutral-900">
                1499
              </span>
            </div>
            <hr className="my-4 border-hihiclothes-1" />
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  1 stylist
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  2 concepts
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  3 mix-and-match outfit sets
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  1 makeup layout
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  2 hairstyle layouts
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  Max hiring time: 3 days
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-neutral-700 ">
                  + 15$/extra hour
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-hihiclothes-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-semibold leading-tight text-neutral-700 ">
                  1 additional purse
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-hihiclothes-1 hover:bg-hihiclothes-3 focus:ring-4 focus:outline-none focus:ring-hihiclothes-1 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              onClick={() =>
                handleAddToCart({
                  id: 3,
                  name: "Be Trendy",
                  price: 1499,
                  quantity: 1,
                  image: BeTrendy,
                  type: "Stylist",
                })
              }
            >
              Choose plan
            </button>
          </div>
        </div>

        <div id="bookForm" className="mt-28 text-center">
          <p className="text-neutral-400 font-semibold">Or you can</p>
          <p className="text-hihiclothes-1 font-bold text-3xl">
            Register via our form
          </p>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="bg-white mt-8 mb-32">
            <div className="mt-8 px-2 py-4 border-solid border-2 border-[#874331]">
              <div>
                <div className="pl-4 pr-4 text-xl font-semibold leading-loose">
                  Personal Information
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                    type="text"
                    placeholder="Your name*"
                    required
                    value={formValues.name}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                <div>
                  <select
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                    defaultValue={0}
                    value={formValues.gender || 0}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        gender: e.target.value,
                      });
                    }}
                  >
                    <option value={0} disabled>
                      Gender*
                    </option>
                    <option value={"female"}>Female</option>
                    <option value={"male"}>Male</option>
                    <option value={"other"}>Other</option>
                  </select>
                </div>
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                    type={dobType}
                    placeholder="Date of birth"
                    value={
                      formValues.dob || (dobType === "date" ? defaultDate : "")
                    }
                    min="1900-01-01"
                    onFocus={() => {
                      setDobType("date");
                    }}
                    onBlur={() => {
                      setDobType("text");
                    }}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        dob: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4">
                <input
                  className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                  type="email"
                  placeholder="Email*"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </div>
              <div className="mt-4 ml-4 mr-4 mb-4">
                <input
                  className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                  type="tel"
                  placeholder="Phone number*"
                  value={formValues.phone}
                  minLength="10"
                  maxLength="11"
                  required
                  onChange={(e) =>
                    setFormValues({ ...formValues, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="pl-4 pr-4 text-xl font-semibold leading-loose">
                  Booking Details
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4 mb-4 grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                    type={fromDateType}
                    placeholder="From date*"
                    required
                    value={
                      formValues.fromDate ||
                      (fromDateType === "date" ? defaultDate : "")
                    }
                    min={defaultDate}
                    onFocus={() => {
                      setFromDateType("date");
                    }}
                    onBlur={() => {
                      setFromDateType("text");
                    }}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        fromDate: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                    type={toDateType}
                    placeholder="To date*"
                    required
                    value={
                      formValues.toDate ||
                      (toDateType === "date" ? defaultDate : "")
                    }
                    min={defaultDate}
                    onFocus={() => {
                      setToDateType("date");
                    }}
                    onBlur={() => {
                      setToDateType("text");
                    }}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        toDate: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4">
                <select
                  className="border border-[#874331]  p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                  defaultValue={0}
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      stylist: {
                        id: e.target.value,
                        name: stylists.filter(
                          (stylist) => stylist.id === e.target.value
                        )[0].name,
                      },
                    });
                  }}
                >
                  <option value={0} disabled>
                    Stylist
                  </option>
                  {sortBy(stylists, "name").map((stylist) => (
                    <option
                      value={stylist.id}
                      selected={stylist.name === chosenStylist}
                    >
                      {stylist.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 ml-4 mr-4">
                <textarea
                  className="border border-[#874331]  p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-neutral-900"
                  rows="4"
                  cols="50"
                  placeholder="Notes"
                  value={formValues.note}
                  onChange={(e) =>
                    setFormValues({ ...formValues, note: e.target.value })
                  }
                />
              </div>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-[#B8583F]"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer HiHiClothesLogo={HiHiClothesLogo} />

      {/* Add To Cart Modal */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto ${
          modalAddToCart ? "block" : "hidden"
        }`}
      >
        <div className="flex items-end justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
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
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <CheckIcon
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Item Added to Cart
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Package has been added to your cart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={() => setModalAddToCart(false)}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Continue Shopping
              </button>
              <a href="/checkout">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Go to Cart
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStylist;
