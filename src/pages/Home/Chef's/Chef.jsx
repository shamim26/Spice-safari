import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { name, chefId, likes, numberOfRecipes, yearsOfExperience, picture } =
    chef;

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <LazyLoad height={500} offset={100} width={400} threshold={0.7}>
      <div>
        {!loaded && <CardSkeleton />}
        <div
          className={`card w-96 h-full hover:shadow-2xl transition-all bg-base-100 shadow-md rounded-none ${
            loaded ? "opacity-100" : "opacity-0"
          } duration-300`}
        >
          <figure>
            <img
              onLoad={handleImageLoad}
              className="h-[288px]"
              src={picture}
              alt="Chef"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title">{name}</h2>
            <div className="border-t text-gray-500 border-gray-500 font-medium flex justify-center justify-items-center gap-5 my-3">
              <p className="border-r border-black p-1">
                {yearsOfExperience}+{" "}
                <small>
                  Years Of <br /> Experience
                </small>
              </p>
              <p className="border-r border-black p-1">
                {numberOfRecipes}+ <br /> <small>Recipes</small>
              </p>
              <p className="p-1">
                {likes}+ <br /> <small>Likes</small>
              </p>
            </div>

            <div className="card-actions justify-items-stretch">
              <Link to={`chef-recipe/${chefId}`} className="bg-primary font-semibold text-white text-center mx-auto w-full rounded-none py-2 hover:bg-rose-950 duration-300 uppercase">
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Chef;
