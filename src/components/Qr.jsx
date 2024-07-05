import React from "react";
import carrot1 from "/src/assets/photo-1560252030-9fc63cb78dac.avif";

export const Qr = () => {
  return (
    <>
      <div className=" flex align-middle justify-center ">
        <h1>QR GENRATOR</h1>
        <img src={carrot1} className="h-[100px]"></img>
        <div className="flex flex-row">
          <h1>Data for QR CODE</h1>
          <input
            type="text"
            placeholder="Enter QR CODE "
            required
            className=" border-2 border-black rounded-xl p-1 w-auto  "
          ></input>
        </div>
      </div>
    </>
  );
};
