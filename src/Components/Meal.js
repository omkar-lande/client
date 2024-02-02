import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const fillterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
        <h1 className="text-black font-bold text-2xl text-center py-2">
            Meal
            </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button 
          onClick={()=>setFoods(mealData)}
          className="m-1 border-[#228B22]  text-white bg-[#228B22]  hover:bg-white hover:text-[#228B22]  hover:border-[#228B22] ">
            All
          </button>
          <button
           onClick={()=>fillterCat("pizza")}
          className="m-1 border-[#228B22]  text-white bg-[#228B22]  hover:bg-white hover:text-[#228B22]  hover:border-[#228B22] ">
            Pizza
          </button>
          <button 
           onClick={()=>fillterCat("chicken")}
          className="m-1 border-[#228B22]  text-white bg-[#228B22]  hover:bg-white hover:text-[#228B22]  hover:border-[#228B22] ">
            Chicken
          </button>
          <button 
           onClick={()=>fillterCat("salad")}
          className="m-1 border-[#228B22]  text-white bg-[#228B22]  hover:bg-white hover:text-[#228B22]  hover:border-[#228B22] ">
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6  py-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold ">{item.name}</p>
              <p className="bg-[#228B22]  h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 border-white font-bold">
                {" "}
                {item.price}
              </p>
            </div>

            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
