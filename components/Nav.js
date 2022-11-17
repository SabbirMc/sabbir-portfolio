import React, { useContext } from "react";
import Context from "./context/context";

const Nav = () => {
  const { activeNav, setActiveNav, ref, sectionVisible, setSideTabVisible } =
    useContext(Context);

  const navItem = [
    {
      id: 0,
      title: "Home",
    },
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Projects",
    },
    {
      id: 3,
      title: "Services",
    },
  ];

  const handleNavClick = (id) => {
    ref.current[id]?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setActiveNav(false);
    }, 1000);

    setSideTabVisible(false);
    setTimeout(() => {
      setActiveSideTab("");
      setActiveSkill(null);
    }, 300);
  };

  return (
    <nav className={`scroller_button_group ${activeNav ? "show" : ""}`}>
      {navItem?.map((item) => (
        <button
          key={Math.random()}
          className={`scroller_button ${
            sectionVisible == item?.id ? "active" : ""
          }`}
          onClick={() => handleNavClick(item?.id)}
        >
          {item?.title}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
