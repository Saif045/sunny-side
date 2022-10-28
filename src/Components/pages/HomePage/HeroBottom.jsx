import React, { useRef } from "react";
import {
  graphic,
  photography,
  mphotography,
  mgraphic,
} from "../../../assets/images/index";

const hero = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center">
      <section className=" relative border-none">
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
      </section>

      <section className=" relative border-none">
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
      </section>
    </div>
  );
};

export default hero;
