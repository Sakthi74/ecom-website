import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import image1 from "/src/assets/carrot.avif";
import image2 from "/src/assets/potato.avif";
import image3 from "/src/assets/photo-1560252030-9fc63cb78dac.avif";

const Productcard = () => {
  const notify = () => {
    toast("Product Added to Cart🛒✅", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "fade",
    });
  };

  const [cardData, setCardData] = useState([
    {
      name: "Carrot",
      weight: "-1kg",
      rate: "30rs",
      url: image1,
    },
    {
      name: "Potato",
      weight: "-1kg",
      rate: "80rs",
      url: image2,
    },
    {
      name: "Beans",
      weight: "-1kg",
      rate: "50rs",
      url: image3,
    },
    {
      name: "Beans",
      weight: "1kg",
      rate: "50rs",
      url: image3,
    },
    {
      name: "Beans",
      weight: "1kg",
      rate: "50rs",
      url: image3,
    },
    {
      name: "Beans",
      weight: "1kg",
      rate: "50rs",
      url: image3,
    },
  ]);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2   gap-5 p-6 sm:p-12 mr-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center  w-24  md:h-84 md:w-64 bg-green-300 rounded-xl border-2 border-gray-300 hover:bg-blue-400 hover:scale-105 transition duration-150 "
        >
          <img
            src={card.url}
            alt={card.name}
            className=" md:w-40 md:h-40  w-24 h-24 rounded-3xl p-1 border-2 border-blue-400 mt-4"
          />
          <div className="p-4 text-center">
            <h1 className="text-lg font-bold">{card.name}</h1>
            <p>{card.weight}</p>
            <p>{card.rate}</p>
            <button
              className="mt-2 sm:mt-6 px-4 py-2 sm: bg-white border font-bold border-black rounded-xl hover:bg-green-300 hover:text-black text-green-400 scale-100 transition duration-300"
              onClick={notify}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Productcard;
