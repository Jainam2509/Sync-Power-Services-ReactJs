import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="w-full font-['open_sans'] z-20  bg-zinc-100 fixed">
      <div className="max-w-screen-xl m-auto  sm:px-4 md:px-1 py-2 px-5 md:flex justify-between">
        <NavLink to="/">
          <img
            className="w-20 h-20"
            src="https://www.sync-power.com/jpg/logo-construction2.png"
            alt=""
          />
        </NavLink>

        {/* Hamburgur Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute top-8 right-8 cursor-pointer"
        >
          {open ? (
            <IoMdClose size={"1.8rem"} />
          ) : (
            <GiHamburgerMenu size={"1.8rem"} />
          )}
        </div>
        {/* Navlinks */}
        <div
          className={`flex md:flex-row pt-5 sm:mt-0 md:items-center z-[-1] md:z-auto  w-full md:w-max left-0  bg-zinc-100 absolute md:static gap-5 flex-col transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {[
            {
              text: "Home",
              path: "/",
            },
            {
              text: "About us",
              path: "/about",
            },
            {
              text: "Services",
              path: "/services",
            },
            {
              text: "Product",
              path: "/product",
            },
            {
              text: "Solution",
              path: "/solution",
            },
            {
              text: "Contact",
              path: "/contact",
            },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(!open)}
              className={({ isActive }) => {
                return `md:text-sm text-base text-center md:text-left font-bold tracking-tight font-['open_sans'] ${
                  isActive ? "text-orange-400" : "text-zinc-900"
                } hover:text-white hover:bg-orange-400 px-2 py-2`;
              }}
            >
              {item.text}
            </NavLink>
          ))}
          <div className="text-center pb-2 md:mb-0 md:text-left">
            <button
            onClick={() => navigate("/login")}
            className=" md:ml-5 md:px-6 md:py-2 px-3 py-1 w-max h-min font-['open_sans'] text-white bg-orange-400 rounded hover:bg-white border border-orange-500 hover:text-orange-500">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
