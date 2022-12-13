import React from "react";
import { headerimg, mheaderimg } from "../../../assets/images";
import { m, motion } from "framer-motion";
import AnimateText from "../../AnimateText";

const Front = () => {
  let p = "WE ARE CREATIVES".split("");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: 0.7,
      },
    },
  };
  const transition = { delay: 0.8 , duration: 4.4, ease: "anticipate"  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="">
      <div className="relative w-full h-screen">
        <div className="flex flex-col  absolute top-1/4 inset-x-1 text-center font-serif font-black text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
          <AnimateText p={p} />
          <div className="self-center">
            <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#FFF"
                strokeWidth="6"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <motion.path
                  initial={{opacity:0 , y:-40 , pathLength: 0 }}
                  animate={{opacity:1 , y:0 , pathLength: 1 }}
                  transition={transition}
                  d="M18 3v100M3 95.484l15 15 15-15"
                />
              </g>
            </svg>
          </div>
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
    </motion.div>
  );
};

export default Front;
