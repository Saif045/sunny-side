import React from "react";
import { headerimg, mheaderimg } from "../../../assets/images";
import { arrow } from "../../../assets/images/index";

const Front = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen">
        <div className="absolute top-1/4 inset-x-1 text-center font-serif font-black text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
          WE ARE CREATIVES
        </div>
        <div className="absolute top-1/3 mt-6 sm:mt-8 -ml-4 left-2/4 ">
          <img src={arrow} />
        </div>
        <img
          className="sm:hidden w-full h-full object-cover object-bottom"
          src={mheaderimg}
        />
        <img
          className="hidden w-full h-full object-cover object-bottom sm:block "
          src={headerimg}
        />
      </div>
      <div className="snap-end"></div>
    </div>
  );
};

export default Front;
