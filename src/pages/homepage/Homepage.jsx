import React from 'react';

// Import HiHiClothes Logo
import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

// Import Images
import WinterCollection from '../../assets/winter-collection.png';
import AutumnCollection from '../../assets/autumn-collection.png';
import NikeLogo from '../../assets/nike-logo.svg';
import AdidasLogo from '../../assets/adidas-logo.png';
import GucciLogo from '../../assets/gucci-logo.svg';
import LouisVuittonLogo from '../../assets/louis-vuitton-logo.png';
import ChanelLogo from '../../assets/chanel-logo.png';
import Hats from '../../assets/hats.png';
import Bags from '../../assets/bags.png';
import Sneakers from '../../assets/sneakers.png';
import Skirt from '../../assets/skirts.png';
import Glasses from '../../assets/glasses.png';
import Jeans from '../../assets/jeans.png';

// Import Header and Footer
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Homepage = () => (
    <div className="relative">
        <Header HiHiClothesLogo={HiHiClothesLogo} />

        <div style={{ backgroundColor: '#F4EBE6' }} className="w-full bg-hihiclothes-2 mt-0 flex max-h-[32rem]">
            <div className="w-5/12 px-8 pt-40">
                <a href="/product-list?collection=Winter">
                    <div className="mt-28 ml-24 leading-loose text-hihiclothes-1 cursor-pointer">
                        <h2 className="font-serif text-2xl">New Women's Collection</h2>
                        <h1 className="text-6xl font-bold mt-3">Winter 2022</h1>
                    </div>
                </a>
            </div>
            <div className="w-7/12">
                <img src={WinterCollection} alt="Winter Collection" className="object-cover w-full h-full" />
            </div>
        </div>
        
        {/* Brands */}
        <div className="w-full px-4 py-16">
            <h1 className='text-center text-2xl text-hihiclothes-3 font-bold mb-8'>Brands</h1>
            <div className='grid grid-cols-5 gap-20 place-items-center px-48'>
                <a href="/product-list?brand=Nike"><img src={NikeLogo} alt="Nike Logo" className="object-contain w-32 h-32" /></a>
                <a href="/product-list?brand=Adidas"><img src={AdidasLogo} alt="Adidas Logo" className="object-contain w-32 h-32" /></a>
                <a href="/product-list?brand=Gucci"><img src={GucciLogo} alt="Gucci Logo" className="object-contain w-32 h-24" /></a>
                <a href="/product-list?brand=Louis Vuitton"><img src={LouisVuittonLogo} alt="Louis Vuitton Logo" className="object-contain w-32 h-24" /></a>
                <a href="/product-list?brand=Chanel"><img src={ChanelLogo} alt="Chanel Logo" className="object-contain w-32 h-24" /></a>
            </div>
        </div>

        {/* Summer Collection Sale  */}
        <a href="/product-list?collection=Summer">
        <div className="w-full bg-hihiclothes-2 mt-0 flex cursor-pointer">
            <div className='relative w-1/2'>
                <div className="text-hihiclothes-3 absolute inset-x-0 bottom-0 text-right py-8 px-8">
                    <h2 className='text-3xl mb-2'>20% Off</h2>
                    <h1 className='text-5xl font-semibold'>SUMMER 2022 COLLECTION</h1>
                </div>
            </div>
            <div className="w-1/2">
                <img src={AutumnCollection} alt="Summer Collection" className="object-cover w-full h-full" />
            </div>
        </div>
        </a>

        {/* Categories */}
        <div className="w-full px-16 py-16 grid grid-cols-4 gap-12 tracking-widest">
            <div className="w-full col-span-2 flex bg-[#DAE5E3] cursor-pointer" onClick={() => window.location = "/product-list?type=Pants"}>
                <div className="w-1/2 flex flex-col justify-center px-16 py-4 text-[#405563]">
                    <h2 className='font-light'>MOST WANTED</h2>
                    <h2 className=' font-bold text-3xl'>Blue Jeans</h2>
                </div>
                <div className="w-1/2">
                    <img src={Jeans} alt="Jeans" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Sneakers})` }} className='col-span-2 row-span-2 bg-cover relative cursor-pointer' onClick={() => window.location = "/product-list?type=Shoes"}>
                <div className="absolute inset-x-0 bottom-0 py-16 flex flex-col items-center">
                    <h2 className='text-hihiclothes-3 font-bold text-3xl'>Sneakers</h2>
                    <h2 className='text-hihiclothes-3 font-light text-lg'>NEW COLLECTION</h2>
                </div>
            </div>
            <div className="w-full col-span-2 flex bg-[#FCEBE2] cursor-pointer" onClick={() => window.location = "/product-list?type=Bags"}>
                <div className="w-1/2">
                    <img src={Bags} alt="Bags" />
                </div>
                <div className="w-1/2 flex flex-col justify-center px-16 py-4 text-[#C08E82]">
                    <h2 className='text-sm font-light'>BRAND NEW</h2>
                    <h2 className=' font-bold text-3xl'>Bags</h2>
                </div>
            </div>
            <div className='bg-[#F7F8FA] cursor-pointer' onClick={() => window.location = "/product-list?type=Hats"}>
                <div className="h-1/2 flex items-center justify-center text-2xl font-semibold px-12 text-center">
                    <h1 className="leading-relaxed">Hats</h1>
                </div>
                <img src={Hats} alt="Hats" className="h-1/2 w-full object-contain object-center" />
            </div>
            <div className='w-full col-span-2 flex bg-[#C1E4DE] cursor-pointer' onClick={() => window.location = "/product-list?type=Dress"}>
                <div className="w-1/2 flex flex-col justify-center px-16 py-4 text-[#867A75]">
                    <h2 className='font-bold text-3xl mb-4'>Dress</h2>
                    <h2 className='text-sm font-light'>From just $100</h2>
                </div>
                <div className="w-1/2">
                    <img src={Skirt} alt="Skirt" className='object-cover w-full h-full' />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Glasses})` }} className="bg-cover bg-bottom cursor-pointer" onClick={() => window.location = "/product-list?type=Glasses"}>
                <h1 className='mt-10 text-center text-2xl text-[#847E7E] font-light'>GLASSES</h1>
            </div>
        </div>

        <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
);

export default Homepage;