import React, { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Context from "./context/context";
import SecondDisplay from "./SecondDisplay";
const MainLayout = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(0);
  const [sideTabVisible, setSideTabVisible] = useState(false);
  const [activeSideTab, setActiveSideTab] = useState("");
  const [activeSkill, setActiveSkill] = useState(null);
  const ref = useRef([]);

  const skillSet = [
    {
      title: "Brand Identity",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
    {
      title: "Web App",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
    {
      title: "Visual Design",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
    {
      title: "Product Design",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
    {
      title: "Web Design",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
    {
      title: "Mobile Design",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
      link: "https://www.wpdeveloper.com",
    },
  ];

  return (
    <>
      <Context.Provider
        value={{
          activeNav,
          setActiveNav,
          ref,
          sectionVisible,
          setSectionVisible,
          sideTabVisible,
          setSideTabVisible,
          activeSideTab,
          setActiveSideTab,
          skillSet,
          activeSkill,
          setActiveSkill,
        }}
      >
        <Header />
        <main
          className={`main_content ${!activeNav ? "smooth_scroll" : ""} ${
            sideTabVisible ? "secondary-screen-active" : ""
          }`}
        >
          {children}
        </main>
        <SecondDisplay />
        <Footer />
      </Context.Provider>
    </>
  );
};

export default MainLayout;
