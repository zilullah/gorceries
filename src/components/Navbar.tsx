import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const handleAuthButton = async () => {
    if (user) {
      // Logout
      setShowUserLogin(false);
      setUser(null);
      setOpen(false);
      navigate("/");
    } else {
      // Login
      setShowUserLogin(true);
      setOpen(false);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"}>
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to={"/"} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to={"/products"}>All Product</NavLink>
        <NavLink to={"/"}>Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} className="w-4 h-4" />
        </div>

        <div
          onClick={() => {
            navigate("/carts");
          }}
          className="relative cursor-pointer"
        >
          <img src={assets.cart_icon} className="w-8 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button
            onClick={handleAuthButton}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <>
            <div className="relative group">
              <img src={assets.profile_icon} alt="" className="w-10" />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm  z-40">
                <li
                  onClick={() => {
                    navigate("my-orders");
                  }}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={handleAuthButton}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink
            to={"/"}
            onClick={() => {
              setOpen(false);
            }}
            className="block"
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            onClick={() => {
              setOpen(false);
            }}
            className="block"
          >
            Products
          </NavLink>
          {user && (
            <NavLink
              to={"/"}
              onClick={() => {
                setOpen(false);
              }}
              className="block"
            >
              My Orders
            </NavLink>
          )}
          <NavLink
            to={"/products"}
            onClick={() => {
              setOpen(false);
            }}
            className="block"
          >
            Contacts
          </NavLink>
          <button
            onClick={handleAuthButton}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            {!user ? "Login" : "Logout"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
