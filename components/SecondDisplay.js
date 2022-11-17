import React, { useContext } from "react";
import Context from "./context/context";
import VideoPlayer from "./VideoPlayer";
import SkillDetails from "./SkillDetails";

const SecondDisplay = () => {
  const {
    sideTabVisible,
    setSideTabVisible,
    activeSideTab,
    setActiveSideTab,
    setActiveSkill,
  } = useContext(Context);

  const handleClose = () => {
    setSideTabVisible(false);
    setTimeout(() => {
      setActiveSideTab("");
      setActiveSkill(null);
    }, 300);
  };

  return (
    <section
      className={`section secondary-screen ${sideTabVisible ? "active" : ""}`}
    >
      <div className="container">
        <div className="secondary-screen-inner">
          <button className="screen-close-button" onClick={() => handleClose()}>
            Close
          </button>
          {activeSideTab === "video" && <VideoPlayer />}
          {activeSideTab === "skill" && <SkillDetails />}
        </div>
      </div>
    </section>
  );
};

export default SecondDisplay;
