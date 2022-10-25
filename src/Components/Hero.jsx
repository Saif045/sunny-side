import React from "react";
import {
  graphic,
  photography,
  standout,
  transform,
  mstandout,
  mtransform,
  mphotography,
  mgraphic,
} from "../assets/images";

const hero = () => {
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

      <div className=" relative border-none">
        <img
          src={mgraphic}
          alt="talents"
          className="sm:hidden object-cover w-full"
        />
        <img
          src={graphic}
          alt="talents"
          className="hidden sm:flex object-cover w-full"
        />

        <div className="absolute bottom-8 xs:bottom-36 sm:bottom-4 md:bottom-6  flex flex-col justify-center items-center ">
          <p className="text-2xl font-bold mb-4">Graphic Design</p>
          <p className=" text-sm  leading-snug text-center align-middle xs:mx-12 sm:mx-2 lg:mx-32 ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention
          </p>
        </div>
      </div>

      <div className=" relative border-none">
        <img
          src={mphotography}
          alt="talents"
          className="sm:hidden object-cover w-full"
        />
        <img
          src={photography}
          alt="talents"
          className="hidden sm:flex object-cover w-full"
        />

        <div className="absolute bottom-8 xs:bottom-36 sm:bottom-4 md:bottom-6  flex flex-col justify-center items-center ">
          <p className="text-2xl font-bold mb-4">Photography</p>
          <p className=" text-sm leading-snug text-center align-middle xs:mx-12 sm:mx-2 lg:mx-32  ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hero;
