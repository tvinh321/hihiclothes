import React from "react";

//Import Icons
import CartIcon from '../../assets/cart-icon.svg';
import SearchIcon from '../../assets/search-icon.svg';

const Header = ({ HiHiClothesLogo }) => {
    return (
        <div className="absolute top-0 inset-x-0">
            <div className="relative">
                <div className="absolute flex top-8 right-16">
                    <div className="grid grid-cols-3 gap-16 mr-24 text-xl font-mono text-hihiclothes-1">
                        <h1 className="cursor-pointer">Home</h1>
                        <h1 className="cursor-pointer">Shop</h1>
                        <h1 className="cursor-pointer">Blogs</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <img src={SearchIcon} alt="Search Icon" className="w-6 h-6 cursor-pointer object-contain" />
                        <img src={CartIcon} alt="Cart Icon" className="w-6 h-6 cursor-pointer object-contain" />
                    </div>
                </div>

                <HiHiClothesLogo className='w-64 h-32 pl-16 pt-8 fill-hihiclothes-1 cursor-pointer' />
            </div>
        </div>
    );
}

export default Header;