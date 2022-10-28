import React from "react";
import Front from "./HomePage/Front";
import HeroTransform from "./HomePage/HeroTransform";
import HeroStand from "./HomePage/HeroStand";
import HeroBottom from "./HomePage/HeroBottom";
import Testemonials from "./HomePage/Testemonials";

const Home = () => {
  return (
    <section>
      <Front />
      <HeroTransform />
      <HeroStand />
      <HeroBottom />
      <Testemonials />
    </section>
  );
};

export default Home;
