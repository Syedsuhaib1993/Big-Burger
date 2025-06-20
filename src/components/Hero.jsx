import React from "react";
import img from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="dark:bg-gray-900 bg-teritary dark:text-white">
      <div className="container flex flex-col md:flex-row md:justify-center justify-center items-center min-h-screen">
        {/* content section */}
        <div className="w-full md:w-2/4 space-y-8 text-center md:text-start md:mt-10 mt-24">
          <div>
            <h1 className="font-bold text-4xl md:text-5xl">Dive into our...</h1>
            <h3 className="font-bold text-5xl md:text-7xl text-primary mt-2">
              Cheesy Cluster!
            </h3>
          </div>
          <p>
            A quarter pound flattened piece of meat typically a beef mixture
            that has been shaped into a circle and covered with a slice of
            cheese. Along with lettuce, tomato, ketchup and mustard. All in
            between two circular shaped buns.
          </p>
          <button className="bg-primary font-semibold px-4 py-2 rounded-md hover:scale-105 transition duration-300 ease-in-out text-white">
            Order Now
          </button>
        </div>
        {/* image content */}
        <div >
          <img src={img} alt="burger" className="hover:-translate-y-2 transition duration-200 ease-linear" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
