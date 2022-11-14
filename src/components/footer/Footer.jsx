import React from "react";

import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import TwitterIcon from '../../assets/twitter-icon.png';

const Footer = ({ HiHiClothesLogo }) => {
    return (
        <div>
            <div className="relative bg-hihiclothes-2 px-4 py-8">
                <HiHiClothesLogo className='w-64 h-24 pl-16 fill-black' />
                <div className='ml-24 my-12 grid grid-cols-3 w-fit gap-2'>
                    <img src={FacebookIcon} alt="Facebook Icon" className="w-8 h-8 mr-4 cursor-pointer object-contain" />
                    <img src={TwitterIcon} alt="Twitter Icon" className="w-8 h-8 cursor-pointer object-contain" />
                    <img src={InstagramIcon} alt="Instagram Icon" className="w-8 h-8 mr-4 cursor-pointer object-contain" />
                </div>
                <div className="absolute top-8 right-16 text-right">
                    <h1 className="text-xl">246 Ly Thuong Kiet Street, District 10, Ho Chi Minh City</h1>
                    <h2 className="text-sm">Phone: +84 123 456 789</h2>
                </div>
            </div>
            <div className="bg-[#847E7E] pt-2 pb-4">
                <h1 className="text-center text-gray-100 font-light">© 2022  All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer;