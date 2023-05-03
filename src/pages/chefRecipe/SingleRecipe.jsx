import React from "react";
import Rating from "react-rating";
import toast, { Toaster } from 'react-hot-toast';
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleRecipe = ({ recipe }) => {
  const { cooking_method, ingredients, rating, recipe_image, recipe_name } =
    recipe;

  const handleFavorite = (e) => {
    e.target.classList.add("btn-disabled");
    return toast.success('Favorite Recipe')
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg rounded-none transition-all duration-200 ease-in hover:shadow-2xl mb-16">
      <figure className="">
        <img className="h-[400px] w-[600px]" src={recipe_image} alt="Recipe" />
      </figure>
      <div className="card-body w-[800px] pl-7 pb-3 pr-3 pt-1">
        <h2 className="card-title font-custom">{recipe_name}</h2>
        <h3 className="font-semibold text-lg underline mt-2">Cooking Method</h3>
        <p className="text-gray-500 font-medium">
          {cooking_method.length > 250
            ? cooking_method.slice(0, 200)
            : cooking_method}
          ...
        </p>
        <h3 className="font-semibold text-lg underline">Ingredients</h3>
        <div className="flex mt-0">
          {ingredients.map((i, index) => (
            <ol
              key={index}
              className="list-disc text-gray-500 font-medium ml-5 pl-2"
            >
              <li>{i}</li>
            </ol>
          ))}
        </div>
        <p className="text-warning font-medium my-4">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
            readonly
          />
          <span className="align-top text-gray-500 ml-3">{rating}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleFavorite}
            className="btn btn-primary rounded-none text-white w-full"
          >
            Favorite
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
