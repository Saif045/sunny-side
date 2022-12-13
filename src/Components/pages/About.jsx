import React from "react";
import { roses, pineapples2 } from "../../assets/images/index";
import { motion } from "framer-motion";
import AnimateText from "../AnimateText";

const About = () => {
  
  let p = "WE ARE DISTINCTIVE".split("");
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
      exit={{ opacity: 0 }}>
      <section className="relative w-full h-screen -mt-16 sm:-mt-20">
        <img
          className="w-full h-full object-cover object-bottom  -z-50"
          src={pineapples2}
        />
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
                  initial={{ opacity: 0, y: -40, pathLength: 0 }}
                  animate={{ opacity: 1, y: 0, pathLength: 1 }}
                  transition={transition}
                  d="M18 3v100M3 95.484l15 15 15-15"
                />
              </g>
            </svg>
          </div>
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
    </motion.div>
  );
};

export default About;

{
  /* 
 const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  ref={scrollRef}
*/
}
