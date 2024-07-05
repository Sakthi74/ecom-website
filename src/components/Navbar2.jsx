import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const take = useNavigate();
  const Add = () => {
    take("/enter");
  };
  const handlenew = () => {
    take("/went");
  };
  const handlero = () => {
    take("/home");
  };
  const handlepro = () => {
    take("/inpro");
  };

  return (
    <>
      <nav className="h-14 mt-5 flex flex-row   font-semibold   text-black justify-between max-w 7xl ">
        <div className="flex w-5/6 md:max-w-7xl items-center">
          <div className="p-7">
            <span className="text-green-400 text-3xl font-bold">Sakthi</span>
            <span className="font-bold text-2xl ml-1">FRUITS</span>

            <button className="sm:p-4 md:p-0 md:hidden">
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

        <div>
          <ul className="flex mt-4 ">
            <h1
              className="cursor-pointer hover:bg-green-400 hover:rounded-3xl  mr-7 border-b-4 border-green-400   "
              onClick={handlenew}
            >
              Back to Login
            </h1>
            <li
              className="cursor-pointer hover:bg-green-400 rounded-3xl   "
              onClick={handlero}
            >
              REGISTER PAGE
            </li>

            <li
              className="cursor-pointer hover:bg-green-400 rounded-3xl  px-3 py-2  "
              onClick={handlepro}
            >
              VIEW PRODUCT
            </li>
            <li
              className="cursor-pointer hover:bg-green-400 rounded-3xl  px-3 py-2  "
              onClick={Add}
            >
              ADD PRODUCT
            </li>
            <li
              className="cursor-pointer 
            hover:bg-green-400 rounded-3xl  px-3 py-2 "
            >
              ADD TABLE
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

export default Navbar2;
