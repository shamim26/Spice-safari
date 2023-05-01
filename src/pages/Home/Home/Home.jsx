import React from "react";
import banner from "../../../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="banner bg-no-repeat h-screen bg-cover bg-gray-500 bg-blend-multiply"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="flex flex-col justify-center items-center pt-24 space-y-4">
          <h1 className="font-custom font-extrabold text-7xl text-center text-white leading-snug">
            Explore the Rich <br /> Heritage of Indian <br /> Cuisine
          </h1>

          <button className="btn btn-success rounded-none text-white px-8">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
