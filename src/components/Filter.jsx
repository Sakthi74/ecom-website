import React from "react";
import { useState } from "react";

const Filter = () => {
  const [selectitem, setselectitem] = useState(1);
  const display = () => {
    console.log("printed");
  };

  return (
    <>
      <div className="mt-12   items-center  flex flex-col md:flex-row lg:flex-row    gap-8 justify-center font-semibold  text-white">
        <div
          className={`p-3 rounded-3xl w-52 border-2 flex justify-center transform hover:scale-110 duration-100 cursor-pointer ${
            selectitem === 1 ? "bg-blue-400   text-white" : "bg-green-400"
          }`}
          onClick={() => setselectitem(1)}
        >
          Latest
        </div>

        <div
          className={`p-3 rounded-3xl w-52 border-2 flex justify-center transform hover:scale-110 duration-100 cursor-pointer ${
            selectitem === 2 ? "bg-blue-400 text-white" : "bg-green-400"
          }`}
          onClick={() => setselectitem(2)}
          onClick={display}
        >
          Special
        </div>

        <div
          className={`p-3 rounded-3xl w-52 border-2 flex justify-center transform hover:scale-110 duration-100 cursor-pointer ${
            selectitem === 3 ? "bg-blue-400 text-white" : "bg-green-400"
          }`}
          onClick={() => setselectitem(3)}
        >
          Best seller
        </div>
      </div>
    </>
  );
};

export default Filter;
