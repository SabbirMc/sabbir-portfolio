import React, { useContext } from "react";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const About = () => {
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section
      className="section about_section"
      ref={(r) => (ref.current[1] = r)}
    >
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(1) : "")}
      >
        <h1 className="section_title">
          Sabbir <span className="stroke">Ahmed</span>
        </h1>
        <div className="about_content">
          <div className="left">
            <button className="play_button"></button>
            <video>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/mov_bbb.ogg"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="right">
            <p className="text">
              Hey there, my name is Sabbir Ahmed,
              <br /> and I'm a freelance UI UX Designer currently based in
              Dhaka, Bangladesh. If you want to see the lates projects I worked
              on, just keep scrolling, or, if you wish to say hi, write me an
              email.
            </p>
            <button className="button">Send me an e-mail</button>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default About;
