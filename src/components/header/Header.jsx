import React from "react";

//Import Icons
import CartIcon from "../../assets/cart-icon.svg";
import { UserIcon } from "@heroicons/react/24/solid";

const Header = ({ HiHiClothesLogo }) => {
  const [cartCount, setCartCount] = React.useState(0);
  const [login, setLogin] = React.useState("");

  const [userMenu, setUserMenu] = React.useState(false);

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

    const user = localStorage.getItem("hihiclothes-user")
      ? JSON.parse(localStorage.getItem("hihiclothes-user"))
      : null;

    if (user) {
      setLogin(user.email);
    }
    else {
      setLogin("Log In");
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 inset-x-0">
      <div className="relative">
        <div className="absolute flex items-center gap-10 top-8 right-16">
          <div className="grid grid-cols-2 gap-16 text-xl font-mono text-hihiclothes-1">
            <a href="/">
              <h1>Home</h1>
            </a>
            <a href="/product-list">
              <h1>Shop</h1>
            </a>
          </div>
          <button
            className="text-hihiclothes-1 border border-hihiclothes-1 hover:text-white  hover:bg-hihiclothes-1 transition duration-500 rounded-lg p-2 text-lg font-mono"
            onClick={() => {
              window.location.href = "/book-stylist";
            }}
          >
            Book a stylist
          </button>
          <div className="flex">
            <a href="/checkout">
              <div className="relative mr-8">
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
            <a href={login == "Log In" && '/login'} className="flex">
              <UserIcon className="w-7 h-7 cursor-pointer text-hihiclothes-1 mr-2" onClick={() => {
                login != "Log In" && setUserMenu(prev => !prev);
              }} />
              <p className="font-mono text-hihiclothes-1 cursor-pointer" onClick={() => {
                login != "Log In" && setUserMenu(prev => !prev);
              }}>{login}</p>

              {userMenu && (
                <div className="absolute top-12 right-0 bg-white border border-hihiclothes-1 rounded-lg py-2 px-4 font-mono text-hihiclothes-1">
                  <a href="/orders">
                    <p className="cursor-pointer hover:underline">My Purchases</p>
                  </a>
                  <p className="cursor-pointer mt-2 hover:underline transition-all duration-300" onClick={() => {
                    localStorage.removeItem("hihiclothes-user");
                    window.location.href = "/";
                  }}>Log Out</p>
                </div>
              )}
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
