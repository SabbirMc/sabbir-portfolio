import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const Services = () => {
  const {
    ref,
    setSectionVisible,
    setSideTabVisible,
    setActiveSideTab,
    skillSet,
    setActiveSkill,
  } = useContext(Context);

  const handleSkillClick = (skill) => {
    setSideTabVisible(true);
    setActiveSideTab("skill");
    setActiveSkill(skill);
  };

  return (
    <section
      className="section service_section"
      ref={(r) => (ref.current[3] = r)}
    >
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(3) : "")}
      >
        <h1 className="section_title">
          <span className="stroke">Main</span> Services
        </h1>
      </InView>
      <div className="service_slider_wrap">
        <Marquee
          className="service_slider slider_1"
          direction="right"
          pauseOnHover={true}
          gradient={false}
          speed={100}
        >
          <div className="service_slider_inner">
            {skillSet?.map(({ title }) => (
              <button
                className="service"
                key={Math.random()}
                onClick={() => handleSkillClick(title)}
              >
                <span className="text">{title}</span>
              </button>
            ))}
          </div>
        </Marquee>
        <Marquee
          className="service_slider slider_2"
          pauseOnHover={true}
          gradient={false}
          speed={100}
        >
          <div className="service_slider_inner">
            {skillSet?.map(({ title }) => (
              <button
                className="service"
                key={Math.random()}
                onClick={() => handleSkillClick(title)}
              >
                <span className="text">{title}</span>
              </button>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
