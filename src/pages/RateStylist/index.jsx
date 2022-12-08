import React, { useEffect, useMemo } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ReactComponent as HiHiClothesLogo } from "../../assets/hihiclothes-logo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { firestore } from "../../firebase/firebase.utils";
import moment from "moment/moment";

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

  const chosenStylist = useMemo(
    () => stylists.filter((stylist) => stylist.id === id)[0],
    [stylists]
  );

  return (
    <>
      <Header HiHiClothesLogo={HiHiClothesLogo} />
      {chosenStylist && (
        <div className="my-48 py-4">
          <div className=" text-center mb-8">
            <p className="text-neutral-400 font-semibold">Rating our stylist</p>
            <p className="text-hihiclothes-1 font-bold text-3xl">
              To help them improve their service
            </p>
          </div>
          <div className="flex justify-center items-center my-12 w-3/4 mx-auto">
            <div className="h-36 w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img
                src={`${chosenStylist.img}`}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="h-36 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <h2 className=" text-hihiclothes-1 flex items-center text-2xl font-bold">
                  <FaceSmileIcon className="w-6 h-6 mr-2" />
                  {chosenStylist.name}
                </h2>

                <p className="text-gray-700 text-base w-11/12 mt-4">
                  {chosenStylist.description}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#874331] w-3/4 mx-auto">
            <div className="pl-4 text-2xl text-hihiclothes-1 font-semibold leading-loose text-center">
              Your rating
            </div>
            <form>
              <div className="mt-4 ml-4 mr-4 grid grid-cols-1 gap-4">
                <div>
                  <input
                    className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Your name (for service register)"
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
                      <span className="text-bold">{chosenStylist.name}</span>
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

          <div className=" text-center my-12">
            <p className="text-neutral-400 font-semibold">
              {chosenStylist.name}
            </p>
            <p className="text-hihiclothes-1 font-bold text-3xl">
              Ratings and Feedback
            </p>
          </div>

          {chosenStylist.feedbacks?.length > 0 &&
            chosenStylist.feedbacks.map((feedback) => (
              <div class="flex justify-center relative top-1/3 w-1/2 mx-auto mt-4">
                <div class="relative grid grid-cols-1 gap-4 px-4 py-2 mb-8 border rounded-lg bg-white shadow-lg w-full">
                  <div class="relative flex gap-4">
                    <img
                      src="https://loremflickr.com/320/240"
                      class="relative rounded-lg -top-6 -mb-4 bg-white border h-20 w-20"
                      alt=""
                      loading="lazy"
                    />
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <p class="relative text-lg whitespace-nowrap truncate overflow-hidden">
                          {feedback.commenter || <i>Anonymous</i>}
                        </p>

                        <p class="text-gray-400 text-sm">
                          {moment(feedback.time.toDate()).format(
                            "YYYY-MM-DD, hh:mm"
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2 text-hihiclothes-3  font-semibold text-lg">
                        {feedback.rating}
                        <svg
                          style={{ color: "rgb(251, 191, 36)" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="#fbbf24"
                          ></path>{" "}
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="-mt-2 text-gray-500">{feedback.comment}</p>
                </div>
              </div>
            ))}
        </div>
      )}
      <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </>
  );
};

export default RateStylist;
