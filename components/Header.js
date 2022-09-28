import React, { useContext } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Nav from "./Nav";
import Context from "./context/context";

const Header = () => {
  const { activeNav, setActiveNav } = useContext(Context);

  return (
    <>
      <header className="header_section">
        <div className="container">
          <div className="header_inner">
            <Link href="/">
              <a className="header_logo">
                <img src="/sabbir-logo.svg" alt="" />
              </a>
            </Link>
            <div className="header_marquee">
              <Marquee gradient={false}>
                <p className="header_marquee_text">
                  available for freelance work
                </p>
                <p className="header_marquee_text">
                  available for freelance work
                </p>
              </Marquee>
            </div>
            <button
              className={`header_toggler ${activeNav ? "active" : ""}`}
              onClick={() => setActiveNav(!activeNav)}
            ></button>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default React.memo(Header);
