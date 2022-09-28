import React, { useContext } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Context from "./context/context";
import { InView } from "react-intersection-observer";

const Services = () => {
  const { ref, setSectionVisible } = useContext(Context);

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
            <Link href="/">
              <a className="service">
                <span className="text">Brand Identity</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Web App</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Brand Identity</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Visual Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Product Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Web Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Mobile App</span>
              </a>
            </Link>
          </div>
        </Marquee>
        <Marquee
          className="service_slider slider_2"
          pauseOnHover={true}
          gradient={false}
          speed={100}
        >
          <div className="service_slider_inner">
            <Link href="/">
              <a className="service">
                <span className="text">Brand Identity</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Web App</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Brand Identity</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Visual Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Product Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Web Design</span>
              </a>
            </Link>
            <Link href="/">
              <a className="service">
                <span className="text">Mobile App</span>
              </a>
            </Link>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
