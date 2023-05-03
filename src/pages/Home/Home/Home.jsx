import React, { useEffect, useState } from "react";
import banner from "../../../assets/banner.jpg";
import Chef from "../Chef's/Chef";
import { useLoaderData, useNavigation } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Brand from "../Brand/Brand";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();
  const navi = useNavigation()

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);
  
  if (isLoading || navi.state === 'loading') {
    return (
      <div className="pt-40 flex justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  return (
    <div>
      {/* Home Banner  */}
      <div
        className="banner bg-no-repeat md:h-screen bg-cover bg-gray-500 bg-blend-multiply"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="flex flex-col justify-center items-center py-32  md:pt-48 space-y-4">
          <h1 className="font-custom font-extrabold text-4xl md:text-7xl text-center text-white leading-snug">
            Explore the Rich <br /> Heritage of Indian <br /> Cuisine
          </h1>

          <button className="btn btn-success rounded-none text-white px-8">
            Explore Now
          </button>
        </div>
      </div>
      {/* Home Cards */}
      <div className="container  md:w-4/5 mx-auto my-36">
        <h1 className="font-custom font-bold text-4xl underline text-center mb-20 uppercase">
          Our Chef's
        </h1>

        <div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((chef) => (
            <Chef key={chef.chefId} chef={chef}></Chef>
          ))}
        </div>
      </div>
      {/* About Us  */}
      <div className="container w-4/5 mx-auto my-36">
        <AboutUs />
      </div>
      {/* Restaurant brand */}
      <div className=" my-36">
        <h1 className="font-custom font-bold text-4xl underline text-center mb-10 uppercase">Partner's</h1>
        <div className="bg-[#dfebf0]">
         <Brand /> 
        </div>
        
      </div>
    </div>
  );
};

export default Home;
