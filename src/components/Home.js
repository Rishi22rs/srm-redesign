import React, { useEffect, useRef, useState } from "react";
// import { Parallax } from "react-parallax";
import aos from "aos";
import "aos/dist/aos.css";
import BG from "../assets/bg.jpg";
import logo from "../assets/srm.png";
import sci from "../assets/sci.jpg";
import med from "../assets/med.jpg";
import hum from "../assets/hum.jpg";
import buss from "../assets/buss.jpg";
import Card from "./Card";
import Card1 from "./Card1";
import M from "../assets/muthu.jpg";
import certi from "../assets/certi.jpg";
import berk from "../assets/berk.jpg";
import { Parallax } from "react-parallax";

import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import ub from "../assets/ub.png";
import tree from "../assets/tree.png";
import srmlogo from "../assets/srmlogo.svg";
import tp from "../assets/tp.jpg";

import "../css/academic.css";
import "../css/admission.css";
import Academics from "./Academics";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Scene from "./Scene";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

import { isMobile } from "react-device-detect";

const Home = ({ setClassName, className }) => {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);

  const location = useLocation();
  const [hash, setHash] = useState(location.hash);

  const liStyle = {
    active: {
      p: {
        width: "100%",
        background: "white",
        paddingLeft: "-20px",
        padding: "10px 10px 10px 10px",
        // borderLeft: "5px solid #ff4655",
        borderBottom: "5px solid #ff4655",
        textAlign: "center",
        transition: "0.1s",
      },
      c: {
        width: "100%",
        textDecoration: "none",
        color: "black",
        textAlign: "center",
        transition: "0.1s",
      },
    },
    nonActive: {
      p: {
        width: "100%",
        paddingLeft: "-20px",
        padding: "10px 10px 10px 10px",
        // borderLeft: "5px solid #ff4655",
        textAlign: "center",
        transition: "0.1s",
      },
      c: {
        width: "100%",
        textDecoration: "none",
        color: "#ff4655",
        transition: "0.1s",
      },
    },
  };
  return (
    <div>
      <div className="line"></div>
      {className === "canvas show-nav" && (
        <div className="overlay" onClick={() => setClassName("canvas")}></div>
      )}
      {!isMobile && (
        <nav className="nav">
          <div className="container liContainer">
            <li
              style={
                location.hash === "#home" || location.hash === ""
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#home" || location.hash === ""
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#home"
              >
                HOME
              </a>
            </li>
            <li
              style={
                location.hash === "#news"
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#news"
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#news"
              >
                LATEST NEWS
              </a>
            </li>
            <li
              style={
                location.hash === "#research"
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#research"
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#research"
              >
                RESEARCH
              </a>
            </li>
            <li
              style={
                location.hash === "#campus"
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#campus"
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#campus"
              >
                CAMPUS LIFE
              </a>
            </li>
            <li
              style={
                location.hash === "#admission"
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#admission"
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#admission"
              >
                ADMISSION
              </a>
            </li>
            <li
              style={
                location.hash === "#about"
                  ? liStyle.active.p
                  : liStyle.nonActive.p
              }
            >
              <a
                style={
                  location.hash === "#about"
                    ? liStyle.active.c
                    : liStyle.nonActive.c
                }
                href="#about"
              >
                ABOUT
              </a>
            </li>
          </div>
        </nav>
      )}
      <div
        id="home"
        className="home-container"
        style={className === "canvas show-nav" ? { overflow: "hidden" } : {}}
      >
        <div className="home-bg-title-container">
          <div className="top-line"></div>

          {className !== "canvas show-nav" ? (
            <button
              className="side-btn"
              onClick={() =>
                className === "canvas"
                  ? setClassName("canvas show-nav")
                  : setClassName("canvas")
              }
            >
              &#9776;
            </button>
          ) : (
            <button
              className="side-btn"
              onClick={() =>
                className === "canvas"
                  ? setClassName("canvas show-nav")
                  : setClassName("canvas")
              }
            >
              &#10006;
            </button>
          )}
          <img
            // src={`https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-156eae9527.svg`}
            src={srmlogo}
            alt="logo"
            className="home-srmlogo"
          />
          <div className="home-overlay"></div>
          <img src={BG} alt="BG" className="home-bg"></img>
        </div>
        <div className="home-content">
          <div className="center home-dot-container">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div id="news" className="center container" data-aos="fade-up">
            <h1 className="home-title center" data-aos="fade-down">
              LATEST NEWS
            </h1>
            <div className="row no-gutter">
              <Card
                img={M}
                para="The Founder Chancellor of the SRM Group, Dr. Paarivendhar, who is also a Member of Parliament of Lok Sabha from the Perambalur Constituency, has transferred the money collected to the Tamil Nadu Chief Minister’s Public Relief Fund."
              />
              <Card
                img={certi}
                title="ARIIA 2020 Rankings : SRM secures the second position"
                para="SRM Institute of Science and Technology (SRMIST), Kattankulathur has found a podium finish in Atal Rankings of Institutions on Innovation Achievements 2020."
                date="22/08/1999"
              />
              <Card1
                img={berk}
                title="START UP Student over to UC Berkeley, USA"
                para="It was an unforgettable journey for 20 students from SRM Institute of Science and Technology and SRM University, AP- Amravati, when they set foot on the hallowed grounds of the 2nd most highly ranked university for Computer Science in the USA (US News & World Report), University of California, Berkeley."
              />
            </div>
          </div>

          <hr className="container" />

          <div id="academics" className="container">
            <h1 className="home-title center" data-aos="fade-down">
              ACADEMICS
            </h1>
            {/* <div className="row"> */}
            <div data-aos="fade-up">
              <Carousel autoPlay infiniteLoop>
                <Academics img={sci} />

                <Academics
                  img={med}
                  title="Medical & Health Sciences"
                  para="Join us in pioneering research, healthcare and implementing
                  effective clinical therapies to improve living conditions."
                />

                <Academics
                  img={buss}
                  title="Management"
                  para=" Creating effective leaders who can provide innovative ideas
                  and solutions to change the world."
                />

                <Academics
                  img={hum}
                  title="Science & Humanities"
                  para="It is the place for fundamental research, curiosity driven,
                  where free, open and critical inquiry is pursued across
                  disciplines."
                />
              </Carousel>
            </div>
          </div>
          <div id="research" className="center container">
            <h1 className="home-title center" data-aos="fade-down">
              Research
            </h1>
            <div className="row no-gutter" data-aos="fade-up">
              <Card
                img={r1}
                para="The Founder Chancellor of the SRM Group, Dr. Paarivendhar, who is also a Member of Parliament of Lok Sabha from the Perambalur Constituency, has transferred the money collected to the Tamil Nadu Chief Minister’s Public Relief Fund."
              />
              <Card
                img={r2}
                title="ARIIA 2020 Rankings : SRM secures the second position"
                para="SRM Institute of Science and Technology (SRMIST), Kattankulathur has found a podium finish in Atal Rankings of Institutions on Innovation Achievements 2020."
                date="22/08/1999"
              />
              <Card1
                img={r3}
                title="START UP Student over to UC Berkeley, USA"
                para="It was an unforgettable journey for 20 students from SRM Institute of Science and Technology and SRM University, AP- Amravati, when they set foot on the hallowed grounds of the 2nd most highly ranked university for Computer Science in the USA (US News & World Report), University of California, Berkeley."
              />
            </div>
          </div>

          <div id="campus" className="center container">
            <h1 className="home-title center" data-aos="fade-up">
              Campus Life
            </h1>
            <div className="row no-gutter" data-aos="fade-down">
              <Card1
                img={c1}
                title="Arts and Cutlure"
                para="Several student clubs and cultural events to unwind talents"
              />
              <Card
                img={c2}
                title="Athletics & Fitness"
                para="Best in class facilities and coaches puts you on top of the world."
              />
              <Card
                img={c3}
                title="Students Life"
                para="Exciting opportunities, the way you want to be, choices are yours."
                date="22/08/1999"
              />
            </div>
          </div>
          <div id="admission" className="ad-container">
            <div className="container">
              <h1 className="ad-title container" data-aos="fade-down">
                ADMISSION
              </h1>
              <div className="row">
                <img
                  src={ub}
                  alt="ub"
                  className="col-md-6"
                  data-aos="fade-up"
                />
                {/* <Parallax
                  className="col-md-6"
                  bgImage={ub}
                  bgImageAlt="alt"
                  strength={100}
                ></Parallax> */}
                <div className="col-md-6 btn-container row">
                  <button className="my-btn" data-aos="fade-left">
                    Admission India
                  </button>
                  <button className="my-btn" data-aos="fade-right">
                    Admission International
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div classname="model-cont">
            {/* <div className="tp">
              <Scene />
            </div> */}
            <div id="about" className="about-container container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="about-title">
                    A place for learning, discovery, innovation, expression and
                    discourse
                  </h2>
                  <div className="row">
                    <h4 className="ach col-6" data-aos="fade-left">
                      Students <span style={{ color: "#ff4655" }}>50000+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-right">
                      Faculty <span style={{ color: "#ff4655" }}>3200+</span>
                    </h4>{" "}
                    <h4 className="ach col-6" data-aos="fade-left">
                      Job offers <span style={{ color: "#ff4655" }}>8500+</span>
                    </h4>{" "}
                    <h4 className="ach col-6" data-aos="fade-right">
                      MnU International{" "}
                      <span style={{ color: "#ff4655" }}>170+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-left">
                      External Funding{" "}
                      <span style={{ color: "#ff4655" }}>130+ Crore</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-right">
                      International Students{" "}
                      <span style={{ color: "#ff4655" }}>950+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-left">
                      Patents by Faculty{" "}
                      <span style={{ color: "#ff4655" }}>30+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-right">
                      International Collaboration{" "}
                      <span style={{ color: "#ff4655" }}>60+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-left">
                      h-Index <span style={{ color: "#ff4655" }}>91</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-right">
                      Companies Visited{" "}
                      <span style={{ color: "#ff4655" }}>625+</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-left">
                      Highest CTC{" "}
                      <span style={{ color: "#ff4655" }}>41.6 LPA</span>
                    </h4>
                    <h4 className="ach col-6" data-aos="fade-right">
                      Super Dream & Dream Offers{" "}
                      <span style={{ color: "#ff4655" }}>2000+</span>
                    </h4>
                  </div>
                </div>
                <img
                  src={tp}
                  alt="tp"
                  className="col-md-6"
                  data-aos="fade-down"
                />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
