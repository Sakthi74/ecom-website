import React, { useState } from "react";
import image1 from "/src/assets/carrot.avif";
import image2 from "/src/assets/potato.avif";
import image3 from "/src/assets/photo-1560252030-9fc63cb78dac.avif";
import Navbar2 from "../components/Navbar2.jsx";

const Card = () => {
  const [cardData, setCardData] = useState([
    {
      Name: "carrot",
      Weight: "1kg",
      Rate: "30rs",
      url: image1,
    },
    {
      Name: "potato",
      Weight: "1kg",
      Rate: "80rs",
      url: image2,
    },
    {
      Name: "Beans",
      Weight: "1kg",
      Rate: "50rs",
      url: image3,
    },
  ]);

  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      Name: name,
      Weight: weight,
      Rate: rate,
      url: image2,
    };
    setCardData([...cardData, newCard]);

    setName("");
    setWeight("");
    setRate("");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar2 />
      <div className="flex-grow flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 mt-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl flex flex-col items-center p-6"
            >
              <img
                src={card.url}
                alt={card.Name}
                className="h-40 w-40 rounded-xl border-2 border-black mb-4 "
              ></img>
              <p className="text-lg font-semibold mb-12">{card.Name}</p>
              <p className="text-sm mb-1">{card.Weight}</p>
              <p className="text-sm mb-1">{card.Rate}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <form
          className="border-black border-2 p-5 flex flex-col w-96"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold mb-4">Product Details</h1>
          <input
            type="text"
            placeholder="Product Name"
            className="border-black p-2 border rounded mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Weight"
            className="border-black p-2 border rounded mb-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rate"
            className="border-black p-2 border rounded mb-2"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <button className="bg-green-300 text-white p-2 rounded hover:bg-blue-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
