import React from "react";
import aboutImg from "../../../assets/about-chef.jpg";
import aboutImg2 from "../../../assets/about-chef2.jpg";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 items-center text-center">
      <div className="md:flex gap-8">
        <img className="w-[300px] h-[420px]" src={aboutImg} alt="" />
        <img className="w-[300px] h-[420px]" src={aboutImg2} alt="" />
      </div>
      <div className="space-y-5 px-4">
        <h1 className="text-3xl text-center uppercase underline font-bold font-custom">
          About Us
        </h1>
        <p>
          "Spice Safari Cuisine is a platform for passionate chefs who love to
          create amazing culinary experiences. Our mission is to bring together
          the best chefs from around the world, and showcase their unique and
          creative recipes to food lovers everywhere. With a focus on authentic
          flavors and fresh ingredients, our chefs strive to provide a dining
          experience that is both delicious and memorable. Join us on a culinary
          journey that will awaken your senses and leave you craving for more!"
        </p>
        <button className="btn btn-primary border-black bg-transparent rounded-none text-black hover:text-white">Explore</button>
      </div>
    </div>
  );
};

export default AboutUs;
