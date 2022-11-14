import React from "react";

//Import Icons
import CartIcon from "../../assets/cart-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";

const Header = ({ HiHiClothesLogo }) => {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const items = localStorage.getItem("hihiclothes-cart")
      ? JSON.parse(localStorage.getItem("hihiclothes-cart"))
      : [];
    setCartCount(items.length);

    const interval = setInterval(() => {
      const items = localStorage.getItem("hihiclothes-cart")
        ? JSON.parse(localStorage.getItem("hihiclothes-cart"))
        : [];
      setCartCount(items.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 inset-x-0">
      <div className="relative">
        <div className="absolute flex items-center gap-10 top-8 right-16">
          <div className="grid grid-cols-3 gap-16 text-xl font-mono text-hihiclothes-1">
            <a href="/">
              <h1>Home</h1>
            </a>
            <a href="/product-list">
              <h1>Shop</h1>
            </a>
            <h1 className="cursor-pointer ">Blogs</h1>
          </div>
          <button className="text-hihiclothes-1 border-2 border-hihiclothes-1 hover:text-white hover:bg-hihiclothes-1 transition duration-500 rounded-lg p-2 text-lg">
            Book a stylist
          </button>
          <div className="grid grid-cols-2 gap-8">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-6 h-6 cursor-pointer object-contain"
            />
            <a href="/checkout">
              <div className="relative">
                <img
                  src={CartIcon}
                  alt="Cart Icon"
                  className="w-6 h-6 cursor-pointer object-contain"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-hihiclothes-1 rounded-full text-white text-xs font-mono flex justify-center items-center">
                  {cartCount}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-fit h-fit">
          <a href="/">
            <HiHiClothesLogo className="w-64 h-32 pl-16 pt-8 fill-hihiclothes-1 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
