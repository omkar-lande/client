import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4  bg-[#24262b]">
        <h1 className="w-full text-3xl font-bold text-white text-center">Urban<span className="text-[#228B22]">Health</span></h1>
        <p className="w-full text-xl font-bold   text-[#228B22] text-center">Why To <span className="text-white">Choose Us?</span></p>
      <div className="py-2 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

       
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Organic Products</h6>
            <p>All our Products Are Natural. come directly from farm to our doorstep.</p>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">High Quality and Fresh</h6>
            <p>All our Products Are Natural. come directly from farm to our doorstep.</p>
          </div>
          
          
          
       
      </div>
    </div>
  );
};

export default Footer;
