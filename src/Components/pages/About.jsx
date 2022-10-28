import React, { useRef } from "react";
import { roses, pineapples2 } from "../../assets/images/index";
import useScrollSnap from "react-use-scroll-snap";

const About = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  return (
    <div className="" ref={scrollRef}>
      <section className="relative w-full h-screen ">
        <img
          className="w-full h-full object-cover object-bottom  -z-50"
          src={pineapples2}
        />
        <div className="absolute top-1/4 mt-10 inset-x-1 text-center  font-serif font-black text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
          WE ARE CREATIVES
        </div>
      </section>

      <section className="grid sm:grid-cols-2">
        <div className="flex justify-center items-center text-center">
          <div className=" my-14 sm:m-0 w-5/6 xs:w-4/6 sm:w-5/6 md:w-4/6 lg:w-3/6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            nesciunt repellendus numquam ullam recusandae officiis at, omnis
            nihil cum, asperiores aut eos doloremque? Culpa eum laborum error
            voluptate id blanditiis!
          </div>
        </div>

        <img className="w-full  object-cover bg-no-repeat" src={roses} />
      </section>
    </div>
  );
};

export default About;
