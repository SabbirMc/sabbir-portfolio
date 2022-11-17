import Link from "next/link";
import React, { useContext } from "react";
import Context from "./context/context";

const SkillDetails = () => {
  const { skillSet, activeSkill } = useContext(Context);

  const skill = skillSet.find((skill) => skill?.title === activeSkill);

  return (
    <div className="skill-wrapper">
      <div className="skill-image"></div>
      <div className="skill-details">
        <h2 className="skill-title">{skill?.title}</h2>
        <p className="skill-description">{skill?.desc}</p>
        {skill?.link && (
          <Link href={skill?.link}>
            <a className="skill-link" target="_blank">
              Let's Start A Project
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
