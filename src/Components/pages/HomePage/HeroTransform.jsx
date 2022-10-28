import React from "react";
import { transform, mtransform } from "../../../assets/images/index";

const HeroTransform = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center">
      <img src={mtransform} className="sm:hidden object-cover w-full " />
      <img src={transform} className="hidden object-cover w-full sm:flex  " />
      <div className="sm:order-first flex justify-center">
        <div className="m-4 my-16 sm:my-0 w-4/4 xs:w-3/4 sm:w-4/4 md:w-3/4 lg:w-3/5 text-center md:text-left">
          <div className=" font-extrabold text-3xl md:text-4xl ">
            Transform your brand
          </div>
          <div className=" py-8 sm:py-4 leading-snug  text-gray-500 text-sm xs:text-base sm:text-sm lg:text-base lg:py-6 ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <div className="font-black font-serif text-sm underline decoration-yellow-200 decoration-8 underline-offset-1  ">
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTransform;
