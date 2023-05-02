import React from "react";
import banner from "../../../assets/banner.jpg";
import Chef from "../Chef's/Chef";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
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
      <div className="container w-4/5 mx-auto my-20">
        <h1 className="font-custom font-bold text-4xl underline text-center mb-10 uppercase">
          Our Chef's
        </h1>

        <div className="grid gap-0 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((chef) => (
            <Chef key={chef.chefId} chef={chef}></Chef>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
