import React, { useContext } from "react";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const Projects = () => {
  const { ref, setSectionVisible } = useContext(Context);

  return (
    <section
      className="section projects_section"
      ref={(r) => (ref.current[2] = r)}
    >
      <InView
        as="div"
        className="container"
        onChange={(inView) => (inView ? setSectionVisible(2) : "")}
      >
        <h1 className="section_title">
          <span className="stroke">Recent</span> Projects
        </h1>
        <div className="project_wrapper">
          <div className="project">
            <div className="left"></div>
            <div className="right">
              <h3 className="title">Easy.jobs</h3>
              <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
            </div>
          </div>
          <div className="project">
            <div className="left"></div>
            <div className="right">
              <h3 className="title">Easy.jobs</h3>
              <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
            </div>
          </div>
          <div className="project">
            <div className="left"></div>
            <div className="right">
              <h3 className="title">Easy.jobs</h3>
              <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
            </div>
          </div>
          <div className="project">
            <div className="left"></div>
            <div className="right">
              <h3 className="title">Easy.jobs</h3>
              <p className="text">To Attract, Manage &amp; Hire Right Talent</p>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default Projects;
