import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="w-full h-64 flex justify-center items-center bg-gray-100">
        <img
          className="w-full h-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{item.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
        <p className="text-lg font-semibold text-green-600 mb-4">Price: {item.price}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default Cards;
