import React from "react";

import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";

const Footer = ({ HiHiClothesLogo }) => {
  return (
    <div>
      <div className="relative bg-hihiclothes-2 px-4 py-8">
        <HiHiClothesLogo className="w-64 h-24 pl-16 fill-black" />
        <div className="ml-24 my-12 grid grid-cols-3 w-fit gap-2">
          <img
            src={FacebookIcon}
            alt="Facebook Icon"
            className="w-6 h-6 mr-4 cursor-pointer object-contain"
          />
          <img
            src={TwitterIcon}
            alt="Twitter Icon"
            className="w-6 h-6 cursor-pointer object-contain"
          />
          <img
            src={InstagramIcon}
            alt="Instagram Icon"
            className="w-6 h-6 mr-4 cursor-pointer object-contain"
          />
        </div>
        <div className="absolute top-8 right-16 ">
          <p className="text-hihiclothes-1 font-bold text-2xl mb-3">
            Contact Us
          </p>
          <div className="flex items-center gap-x-2 mb-3">
            <svg
              style={{ color: "#874331" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="18"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 10 7 L 21.046875 7 L 21.046875 25.875 L 10 25.875 Z M 10 7 "
                    clip-rule="nonzero"
                    fill="#874331"
                  ></path>
                </clipPath>
                <clipPath id="id2">
                  <path
                    d="M 7 3.375 L 16 3.375 L 16 10 L 7 10 Z M 7 3.375 "
                    clipRule="nonzero"
                    fill="#874331"
                  ></path>
                </clipPath>
                <clipPath id="id3">
                  <path
                    d="M 5.804688 6 L 12 6 L 12 15 L 5.804688 15 Z M 5.804688 6 "
                    clip-rule="nonzero"
                    fill="#874331"
                  ></path>
                </clipPath>
                <clipPath id="id4">
                  <path
                    d="M 11 3.375 L 21 3.375 L 21 14 L 11 14 Z M 11 3.375 "
                    clip-rule="nonzero"
                    fill="#874331"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="#874331"
                  d="M 19.820312 15.644531 L 19.828125 15.644531 C 19.828125 15.644531 17.777344 18.679688 16.050781 20.933594 C 14.5625 22.882812 14.125 24.550781 14 25.359375 C 13.953125 25.652344 13.714844 25.875 13.425781 25.875 C 13.136719 25.875 12.898438 25.652344 12.847656 25.359375 C 12.722656 24.550781 12.289062 22.882812 10.796875 20.933594 C 10.570312 20.632812 10.335938 20.320312 10.101562 20 L 15.730469 13.25 L 20.261719 7.828125 C 20.761719 8.886719 21.039062 10.074219 21.039062 11.332031 C 21.039062 12.921875 20.589844 14.398438 19.820312 15.644531 Z M 19.820312 15.644531 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                ></path>
              </g>
              <path
                fill="#874331"
                d="M 15.730469 13.25 L 10.101562 20 C 8.566406 17.925781 7.023438 15.644531 7.023438 15.644531 L 7.027344 15.644531 C 6.863281 15.378906 6.71875 15.113281 6.59375 14.832031 L 11.117188 9.410156 C 10.6875 9.929688 10.433594 10.601562 10.433594 11.332031 C 10.433594 13 11.769531 14.347656 13.425781 14.347656 C 14.355469 14.347656 15.1875 13.921875 15.730469 13.25 Z M 15.730469 13.25 "
                fill-opacity="1"
                fill-rule="nonzero"
              ></path>
              <g clip-path="url(#id2)">
                <path
                  fill="#874331"
                  d="M 15.816406 3.78125 L 11.15625 9.367188 L 7.589844 6.226562 C 8.980469 4.480469 11.082031 3.375 13.425781 3.375 C 14.261719 3.375 15.066406 3.515625 15.816406 3.78125 Z M 15.816406 3.78125 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                ></path>
              </g>
              <g clip-path="url(#id3)">
                <path
                  fill="#874331"
                  d="M 11.15625 9.367188 L 11.117188 9.410156 L 6.59375 14.832031 C 6.09375 13.773438 5.808594 12.585938 5.808594 11.332031 C 5.808594 9.386719 6.480469 7.605469 7.589844 6.226562 Z M 11.15625 9.367188 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                ></path>
              </g>
              <g clip-path="url(#id4)">
                <path
                  fill="#874331"
                  d="M 15.730469 13.25 C 16.160156 12.730469 16.417969 12.058594 16.417969 11.332031 C 16.417969 9.664062 15.078125 8.3125 13.425781 8.3125 C 12.496094 8.3125 11.664062 8.742188 11.117188 9.410156 L 15.816406 3.78125 C 17.769531 4.449219 19.371094 5.925781 20.261719 7.828125 Z M 15.730469 13.25 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            <p className="text-md">
              246 Ly Thuong Kiet Street, District 10, Ho Chi Minh City
            </p>
          </div>

          <div className="flex items-center gap-x-2 mb-3">
            <svg
              style={{ color: "#874331" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
            </svg>
            <p className="text-md">9AM - 10PM</p>
          </div>

          <div className="flex items-center gap-x-2">
            <svg
              style={{ color: "#874331" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="18"
              height="18"
            >
              <path
                fill="currentColor"
                d="M19 17v4c-2.758 0-5.07-.495-7-1.325-3.841-1.652-6.176-4.63-7.5-7.675C3.4 9.472 3 6.898 3 5h4l1 4-3.5 3c1.324 3.045 3.659 6.023 7.5 7.675L15 16l4 1z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C8.159 18.023 5.824 15.045 4.5 12m0 0C3.4 9.472 3 6.898 3 5h4l1 4-3.5 3zM14 4h.01M17 4h.01M20 4h.01M14 7h.01M17 7h.01M20 7h.01M14 10h.01M17 10h.01M20 10h.01"
              />
            </svg>
            <p className="text-md"> +84 123 456 789</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 pt-2 pb-4">
        <h1 className="text-center text-gray-700 font-light">
          © 2022 All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
