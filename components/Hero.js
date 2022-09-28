import React, { useContext } from "react";
import Context from "./context/context";
import Marquee from "react-fast-marquee";
import { InView } from "react-intersection-observer";

const Hero = () => {
  const date = new Date().getFullYear();
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section className="section hero_section" ref={(r) => (ref.current[0] = r)}>
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(0) : "")}
      >
        <h1 className="section_title">
          <span className="stroke">
            Independent <br />
          </span>
          UI/UX <br /> Designer
          <span className="primary">.</span>
        </h1>
        <p className="hero_content">
          Welcome To <span className="italic">my {date} portfolio.</span>
        </p>
      </InView>
      <Marquee className="hero_background_marquee" gradient={false} speed={100}>
        <div>ui/ux designer</div>
      </Marquee>
    </section>
  );
};

export default Hero;
