import React, { useState, useEffect, useContext, useRef } from "react";
import Context from "./context/context";
import { InView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Projects = () => {
  const { ref, setSectionVisible } = useContext(Context);
  const [activeProject, setActiveProject] = useState(0);
  const [prevButtonDisable, setPrevButtonDisable] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);

  const projects = [
    <>
      <div className="left"></div>
      <div className="right">
        <h3 className="title">Easy.jobs</h3>
        <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
      </div>
    </>,
    <>
      <div className="left"></div>
      <div className="right">
        <h3 className="title">Easy.jobs</h3>
        <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
      </div>
    </>,
    <>
      <div className="left"></div>
      <div className="right">
        <h3 className="title">Easy.jobs</h3>
        <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
      </div>
    </>,
    <>
      <div className="left"></div>
      <div className="right">
        <h3 className="title">Easy.jobs</h3>
        <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
      </div>
    </>,
  ];

  const handleActiveState = (type) => {
    if (type == "next" && activeProject < projects.length) {
      setActiveProject(++activeProject);
    }
    if (type == "prev" && activeProject > 0) {
      setActiveProject(--activeProject);
    }
  };

  useEffect(() => {
    console.log(activeProject);
    activeProject == 0
      ? setPrevButtonDisable(true)
      : setPrevButtonDisable(false);
    activeProject == projects.length
      ? setNextButtonDisable(true)
      : setNextButtonDisable(false);
  }, [activeProject]);

  return (
    <section
      className="section projects_section"
      ref={(r) => (ref.current[2] = r)}
    >
      {console.log(prevButtonDisable, nextButtonDisable)}
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(2) : "")}
      >
        <h1 className="section_title">
          <span className="stroke">Recent</span> Projects
        </h1>
        <div className="project_carousel_wrapper">
          <button
            className="prev_button"
            onClick={() => handleActiveState("prev")}
            disabled={prevButtonDisable}
          ></button>
          <div className="project_wrapper">
            {projects?.map((project) => (
              <div className="project" key={Math.random()}>
                {project}
              </div>
            ))}
          </div>
          <button
            className="next_button"
            onClick={() => handleActiveState("next")}
            disabled={nextButtonDisable}
          ></button>
        </div>
      </InView>
    </section>
  );
};

export default Projects;
