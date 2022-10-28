import React, { useRef } from "react";
import Front from "./HomePage/Front";
import HeroTransform from "./HomePage/HeroTransform";
import HeroStand from "./HomePage/HeroStand";
import HeroBottom from "./HomePage/HeroBottom";
import Testemonials from "./HomePage/Testemonials";

import useScrollSnap from "react-use-scroll-snap";

const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  return (
    <section ref={scrollRef}>
      <Front />
       <section>
         <HeroTransform />
         <HeroStand />
         <HeroBottom />
         <Testemonials />
       </section>
    </section>
  );
};

export default Home;
