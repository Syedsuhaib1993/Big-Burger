import React from "react";
import img from "../assets/deals.jpg";
const Deals = () => {
  return (
    <div className="bg-teritary dark:bg-gray-900">
      <div className="min-h-screen container flex flex-col justify-center pt-16 md:pt-0">
        {/* Heading */}
        <h1 className="font-semibold text-3xl text-secondary text-center mt-5 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">Hot Deals</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="w-full md:w-2/4">
            <img className="rounded-lg" src={img} alt="deal" />
          </div>
          <div className="w-full md:w-2/4 text-center md:text-start space-y-4">
            {/* content section */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Exclusive Special Combo</h1>
            <h3 className="text-3xl md:text-4xl font-semibold text-secondary">Elevate your Meal with our special Bundle</h3>
            <p className="text-sm md:text-base text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              sapiente ducimus alias expedita ab fugiat, incidunt saepe vitae
              maiores accusantium.
            </p>
            <button className="bg-primary px-4 py-2 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
