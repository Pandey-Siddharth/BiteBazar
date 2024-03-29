import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/img/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import {  MdShoppingBasket } from "react-icons/md";import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../utils/userslice";
import { toast } from "react-hot-toast";
import "../images/style.css"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-primary ">
      {/* desktop */}

      <div className="flex items-center h-full justify-between nav">
        <Link to={"/"} className="flex items-center  gap-2 ">
          <img src={logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">BiteBazaar</p>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""} className="nav-link">Home</Link>
            <Link to={"menu/64cbcd29d28623ffce0bb3e3"} className="nav-link">Menu</Link>
            <Link to={"about"} className="nav-link">About</Link>
            <Link to={"contact"} className="nav-link">Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
             <MdShoppingBasket />
             {cartItemNumber && cartItemNumber.length>0 &&(
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
  )}
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" alt="" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === "rishavvatsa62033@gmail.com" && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2 pb-2 hover:bg-purple-200 nav-link"
                  >
                    Add product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/64cbcd29d28623ffce0bb3e3"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
