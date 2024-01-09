import React, { useState } from "react";
import { styles } from "../util/style";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { navigationLinks } from "./../util/constants";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-[130px] h-[35px] cursor-pointer"
        />
      </a>
      {/* Navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  ">
        {navigationLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`
            ${idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
            ${active === nav.id ? "text-white" : "text-slate-400"}
              font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 rigth-0 left-0  w-full sidebar  bg-black-gradient z-[19]`}
        >
          <ul className="list-none flex justify-center items-center flex-1 ">
            {navigationLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`
           ${idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
           ${active === nav.id ? "text-white" : "text-slate-500"}
             font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
