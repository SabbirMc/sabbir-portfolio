import React, { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Context from "./context/context";
const MainLayout = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(0);
  const ref = useRef([]);

  return (
    <>
      <Context.Provider
        value={{
          activeNav,
          setActiveNav,
          ref,
          sectionVisible,
          setSectionVisible,
        }}
      >
        <Header />
        <main className={`main_content ${!activeNav ? "smooth_scroll" : ""}`}>
          {children}
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default MainLayout;
