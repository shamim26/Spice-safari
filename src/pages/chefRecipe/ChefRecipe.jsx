import React from "react";
import { useLoaderData } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { MdRestaurantMenu } from "react-icons/md";
import exp from "../../assets/icons/experience.png";
import LazyLoad from "react-lazy-load";

const ChefRecipe = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    bio,
    name,
    numberOfRecipes,
    yearsOfExperience,
    picture,
    recipes,
    likes,
  } = data;
  return (
    <div>
      <div className="banner flex gap-10 w-9/12 mx-auto pt-28">
          <img className="w-[580px] h-[330px]" src={picture} alt="" />
        <div className="space-y-4 font-medium text-gray-500">
          <h2 className="text-2xl text-black font-bold">{name}</h2>
          <p>{bio}</p>
          <p className="flex items-center gap-2 ">
            <span className="text-3xl inline">
              <FcLike />
            </span>
            {likes}+ Likes
          </p>
          <p className="flex items-center gap-2 ">
            <span className="text-3xl">
              <MdRestaurantMenu />
            </span>{" "}
            {numberOfRecipes}+ Recipes
          </p>
          <p className="flex items-center gap-2 ">
            <img className="w-[30px]" src={exp} alt="" />
            {yearsOfExperience}+ Years Of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
