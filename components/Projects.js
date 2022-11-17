import React, { useState, useEffect, useContext } from "react";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const Projects = () => {
  const { ref, setSectionVisible } = useContext(Context);
  const [activeProject, setActiveProject] = useState(0);
  const [prevButtonDisable, setPrevButtonDisable] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);

  const projects = [
    {
      link: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Easy.jobs",
      description: "To Attract, Manage & Hire Right Talent",
    },
    {
      link: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Templately.com",
      description: "To Attract, Manage & Hire Right Talent",
    },
    {
      link: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "NotificationX",
      description: "To Attract, Manage & Hire Right Talent",
    },
    {
      link: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
      title: "xCloud",
      description: "To Attract, Manage & Hire Right Talent",
    },
  ];

  const handleActiveState = (type) => {
    if (type == "next" && activeProject < projects.length - 1) {
      setActiveProject(++activeProject);
    }
    if (type == "prev" && activeProject > 0) {
      setActiveProject(--activeProject);
    }
  };

  useEffect(() => {
    activeProject == 0
      ? setPrevButtonDisable(true)
      : setPrevButtonDisable(false);
    activeProject == projects.length - 1
      ? setNextButtonDisable(true)
      : setNextButtonDisable(false);
  }, [activeProject]);

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
        <div className="project_carousel_wrapper">
          <button
            className="prev_button"
            onClick={() => handleActiveState("prev")}
            disabled={prevButtonDisable}
          ></button>
          <div
            className="project_wrapper"
            style={{
              transform: `translate(-${activeProject * 450}px, -${
                activeProject * 250
              }px)`,
            }}
          >
            {projects?.map((project) => (
              <div className="project" key={Math.random()}>
                <div className="left">
                  {project?.link && (
                    <img src={project?.link} alt={project?.title} />
                  )}
                </div>
                <div className="right">
                  <h3 className="title">{project?.title}</h3>
                  <p className="text">{project?.description}</p>
                </div>
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
