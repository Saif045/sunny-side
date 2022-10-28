import React from "react";
import { standout, mstandout } from "../../../assets/images/index";

const HeroStand = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center">
      <img
        src={mstandout}
        alt="talents"
        className="sm:hidden object-cover w-full"
      />
      <img
        src={standout}
        alt="talents"
        className="hidden sm:flex object-cover w-full"
      />
      <div className="flex justify-center">
        <div className="m-4 my-16 sm:my-0 w-4/4 xs:w-3/4 sm:w-4/4 md:w-3/4 lg:w-3/5 text-center md:text-left">
          <div className=" font-extrabold text-3xl md:text-4xl ">
            Stand out to the right audience
          </div>
          <div className=" py-8 sm:py-4 leading-snug text-gray-500 text-sm xs:text-base sm:text-sm lg:text-base lg:py-6">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </div>
          <div className="font-black font-serif text-sm underline decoration-red-200 decoration-8 underline-offset-1   ">
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStand;
