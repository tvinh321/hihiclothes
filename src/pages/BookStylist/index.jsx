import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";

const BookStylist = () => {
  const [dobType, setDobType] = useState("text");
  const [fromDateType, setFromDateType] = useState("text");
  const [toDateType, setToDateType] = useState("text");
  const [formValues, setFormValues] = useState({});
  const [errorMsgs, setErrorMsgs] = useState({});

  const today = new Date();
  const defaultDate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  return (
    <div>
      <Header HiHiClothesLogo={HiHiClothesLogo} />
      <div className="pt-40 pl-28 pr-28">
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
                  2 mix-and-match sets/concept
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
                  Hiring time: During day
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
                  + 30$/extra hour
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-hihiclothes-1 hover:bg-hihiclothes-3 focus:ring-4 focus:outline-none focus:ring-hihiclothes-1 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>

          <div className="w-full max-w-sm p-4 bg-[#fca088] text-white border rounded-lg shadow-md sm:p-8 ">
            <h5 className="mb-4 text-2xl font-medium text-center">
              Be Fabulous
            </h5>
            <div className=" text-neutral-700 text-center">
              <sup className="text-lg">$</sup>
              <span className="text-2xl font-semibold tracking-tight text-neutral-900">
                1999
              </span>
            </div>
            <hr className="my-4 border-white" />
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  2 mix-and-match sets/concept
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  Hiring time: Less than 1 week
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  + 5$/extra hours
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  className="flex-shrink-0 w-5 h-5 text-white"
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
                  1 free makeup items (random)
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-hihiclothes-1 hover:bg-hihiclothes-3 focus:ring-4 focus:outline-none focus:ring-hihiclothes-1 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
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
                  2 mix-and-match sets/concept
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
                  Hiring time: 3 days
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
                  + 20$/extra hour
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
            >
              Choose plan
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-400 font-semibold">Or you can</p>
          <p className="text-hihiclothes-1 font-bold text-3xl">
            Register via our form
          </p>
        </div>
        <form>
          <div className="bg-white mt-8 mb-32">
            <div className="mt-8 px-2 py-4 border-solid border-2 border-[#874331]">
              <div>
                <div className="pl-4 pr-4 text-xl font-semibold leading-loose">
                  Personal Information
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
              <div className="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                <div>
                  <select
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    defaultValue={0}
                    value={formValues.gender}
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
                    <option value={1}>Female</option>
                    <option value={2}>Male</option>
                    <option value={3}>Other</option>
                  </select>
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.firstName}
                  </p>
                </div>
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
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
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.lastName}
                  </p>
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
              <div>
                <div className="pl-4 pr-4 text-xl font-semibold leading-loose">
                  Booking Details
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4 mb-4 grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={fromDateType}
                    placeholder="From date*"
                    value={
                      formValues.fromDate ||
                      (fromDateType === "date" ? defaultDate : "")
                    }
                    min="1900-01-01"
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
                  <p className="mt-2 text-sm text-red-400">{errorMsgs.city}</p>
                </div>
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={toDateType}
                    placeholder="To date*"
                    value={
                      formValues.toDateType ||
                      (toDateType === "date" ? defaultDate : "")
                    }
                    min="1900-01-01"
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
                  <p className="mt-2 text-sm text-red-400">{errorMsgs.zip}</p>
                </div>
              </div>
              <div className="mt-4 ml-4 mr-4">
                <textarea
                  className="border border-[#874331]  p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  rows="4"
                  cols="50"
                  placeholder="Notes"
                  value={formValues.notes}
                  onChange={(e) =>
                    setFormValues({ ...formValues, notes: e.target.value })
                  }
                />
                <p className="mt-2 text-sm text-red-400">{errorMsgs.country}</p>
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
    </div>
  );
};

export default BookStylist;