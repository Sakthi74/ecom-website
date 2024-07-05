import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const hi = useNavigate();
  const loc = useLocation();
  const [open, setopen] = useState(true);
  const [selectitem, setselectitem] = useState(1);

  const handlewent = () => {
    hi("/went");
  };
  const handleregister = () => {
    hi("/home");
  };
  const handleenter = () => {
    hi("/enter");
  };
  const handletable = () => {
    hi("/table");
  };

  const isActiveRoute = (route) => {
    return loc.pathname === route;
  };
  const menubar = () => {
    setopen(!open);
  };

  return (
    <>
      <nav className="h-14 mt-5 flex flex-row  space-x-2 font-semibold   text-black justify-between max-w 7xl ">
        <div className="md:flex w-5/6 md:max-w-7xl ">
          <div className="p-7 flex between">
            <div>
              <span className="text-green-400 text-3xl font-bold">Sakthi</span>
              <span className="font-bold text-2xl ml-1">FRUITS</span>
            </div>
            <button
              onClick={menubar}
              className="sm:p-4 md:p-0 md:hidden ml-12 hover:scale-105  cursor-none sm:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={` p-12 right-0 bottom-0 border-5  border-black bg-blue-400  md:bg-white   sm:hover:scale-105 transition duration-150 cursor-pointer md:p-0 md:relative absolute z-20  ${
            open ? "block" : "hidden md:block"
          }`}
        >
          <ul className="md:bg-white lg:bg-white sm:bg-green-400  md:flex gap-10 mt-4 ">
            <h1
              className="cursor-pointer hover:bg-green-400 hover:rounded-3xl  px-3 py-2  border-b-4 border-green-400   "
              onClick={handlewent}
            >
              Login
            </h1>
            <li
              className={`cursor-pointer ${
                isActiveRoute("/home") && "hover:text-yellow-200 "
              } hover:bg-green-400 rounded-3xl  px-3 py-2  `}
              onClick={handleregister}
            >
              Register
            </li>
            <li
              className="cursor-pointer hover:bg-green-400 rounded-3xl  px-3 py-2  "
              onClick={handleenter}
            >
              Items
            </li>
            <li
              className={`"sm:cursor-pointer md:cursor-pointer hover:bg-green-400 hover:rounded-3xl  px-3 py-2 ${
                selectitem === 3
                  ? " px-3 py-2  border-b-4 border-green-400 "
                  : " sm:bg-blue-400 md:bg-white"
              }  "`}
            >
              Product
            </li>
            <li
              className="cursor-pointer 
            hover:bg-green-400 rounded-3xl  px-3 py-2 "
              onClick={handletable}
            >
              Table
            </li>
            <h1 className="hover:bg-green-400 rounded-3xl  px-3 py-2  cursor-pointer">
              Help
            </h1>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mt-2 text-green-300 mr-3 hover:bg-green-400 rounded-3xl  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
