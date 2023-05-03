import React from "react";
import logo from "../../../assets/logo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000000] text-white pb-16">
      <div className="flex flex-col items-center justify-center">
        <img className="w-[200px]" src={logo} alt="" />
        <p className="text-center">
          Spice Safari Cuisine is dedicated to bringing you <br /> the best and
          most authentic Indian cuisine. Our chefs use traditional recipes and
          fresh <br /> ingredients to create delicious dishes that will
          transport your taste buds to the vibrant streets of India.
          <br />
          Come visit us and experience the taste of India in every bite.
        </p>

        <div className="flex text-2xl gap-6 my-8">
            <span>
          <FaFacebook></FaFacebook>
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaPinterest />
        </span>
        <span>
          <FaWhatsapp />
        </span>
        <span>
          <FaTwitter />
        </span>
        </div>
        
        <p className="font-custom text-sm border-t w-80 pt-3 text-center">©SpiceSafari 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
