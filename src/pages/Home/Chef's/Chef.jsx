import React from "react";

const Chef = ({ chef }) => {
  console.log(chef);
  const { name, chefId, likes, numberOfRecipes, yearsOfExperience, picture } =
    chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[288px]"
          src={picture}
          alt="Chef"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
