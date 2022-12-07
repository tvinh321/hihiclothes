import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { firestore } from "../../firebase/firebase.utils";

const RateStylist = () => {
  const id = useParams().id;
  const [formValues, setFormValues] = useState({});
  const [errorMsgs, setErrorMsgs] = useState({});

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

  return (
    <>
      <Header HiHiClothesLogo={HiHiClothesLogo} />
      {!!stylists.length && (
        <div className="my-48 py-4">
          <div className=" text-center mb-2">
            <p className="text-neutral-400 font-semibold">Rating our stylist</p>
            <p className="text-hihiclothes-1 font-bold text-3xl">
              To help them improve their service
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <div className="h-40 w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img
                src={`${stylists[id - 1].img}`}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="h-40 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <h2 className=" text-hihiclothes-1 flex items-center text-2xl font-bold">
                  <FaceSmileIcon className="w-6 h-6 mr-2" />
                  {stylists[id - 1].name}
                </h2>

                <p className="text-gray-700 text-base w-3/4 mt-4">
                  {stylists[id - 1].description}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#874331] w-10/12 mx-auto">
            <div className="pl-4 text-2xl text-hihiclothes-1 font-semibold leading-loose text-center">
              Your rating
            </div>
            <form>
              <div className="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        name: e.target.value,
                      });
                    }}
                  />
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.firstName}
                  </p>
                </div>
              </div>

              <div className="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Your service/package*"
                    value={formValues.service}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        service: e.target.value,
                      });
                    }}
                  />
                  <p className="mt-2 text-sm text-red-400">
                    {errorMsgs.service}
                  </p>
                </div>
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={"text"}
                    placeholder="Register date*"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        registerDate: e.target.value,
                      });
                    }}
                  />
                  <p className="mt-2 text-sm text-red-400">{errorMsgs.city}</p>
                </div>
              </div>

              <div className="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center ml-3 gap-x-4">
                    <div className="text-semibold text-hihiclothes-3">
                      Rating for{" "}
                      <span className="text-bold">{stylists[id - 1].name}</span>
                    </div>
                    <ReactStars
                      count={5}
                      size={30}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#fbbf24"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center ml-3 gap-x-4">
                    <div className="text-semibold text-hihiclothes-3">
                      Rating for your service quality
                    </div>
                    <ReactStars
                      count={5}
                      size={30}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#fbbf24"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 ml-4 mr-4">
                <textarea
                  className="border border-[#874331]  p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  rows="4"
                  cols="50"
                  placeholder="Your comments"
                  value={formValues.notes}
                  onChange={(e) =>
                    setFormValues({ ...formValues, notes: e.target.value })
                  }
                />
              </div>

              <div className="w-1/2 mx-auto mb-8">
                <button
                  className="w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4  text-white bg-[#B8583F]"
                  type="submit"
                >
                  Submit your rating
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </>
  );
};

export default RateStylist;
