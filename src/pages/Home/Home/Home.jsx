import React from "react";
import banner from "../../../assets/banner.jpg";
import Chef from "../Chef's/Chef";
import { useLoaderData } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Brand from "../Brand/Brand";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../../../components/PDF/PDF";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* Home Banner  */}
      <div
        className="banner bg-no-repeat h-screen bg-cover bg-gray-500 bg-blend-multiply"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="flex flex-col justify-center items-center pt-48 space-y-4">
          <h1 className="font-custom font-extrabold text-7xl text-center text-white leading-snug">
            Explore the Rich <br /> Heritage of Indian <br /> Cuisine
          </h1>

          <button className="btn btn-success rounded-none text-white px-8">
            Explore Now
          </button>
        </div>
      </div>
      {/* Home Cards */}
      <div className="container w-4/5 mx-auto my-36">
        <h1 className="font-custom font-bold text-4xl underline text-center mb-20 uppercase">
          Our Chef's
        </h1>

        <div className="grid gap-0 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="bg-[#dfebf0] my-36">
        <Brand />
      </div>
      <PDFDownloadLink document={<PDF />} fileName="blog">
          {({loading}) =>loading?<button>Loading..</button>:<button>Download</button>}
        </PDFDownloadLink>
    </div>
  );
};

export default Home;
