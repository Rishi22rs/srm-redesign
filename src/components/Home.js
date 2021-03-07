import React, { useEffect } from "react";
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

const Home = ({ setClassName, className }) => {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);

  return (
    <>
      <div className="line"></div>
      <div className="home-container">
        <div className="home-bg-title-container">
          {/* <button
            className="side-btn"
            onClick={() =>
              className === "canvas"
                ? setClassName("canvas show-nav")
                : setClassName("canvas")
            }
          >
            open
          </button> */}
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

          <div className="center container" data-aos="fade-up">
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

          <div className="container">
            <h1 className="home-title center" data-aos="fade-down">
              ACADEMICS
            </h1>
            <div
              className="row"
              style={{ marginLeft: 0, marginRight: 0 }}
              data-aos="fade-left"
            >
              <Parallax
                className="center para col-6"
                bgImage={sci}
                bgImageAlt="alt"
                strength={600}
              >
                <div className="aca-overlay"></div>
                <div className="aca-h">
                  <h1 className="para-txt">Engineering</h1>
                </div>
              </Parallax>
              <div className="col-6">
                <h1>Engineering</h1>
                <p>
                  We have long been at the forefront of breakthrough research
                  and innovation. We offer several degree programs, major, minor
                  and specializations, as well as research opportunities, to
                  follow your passion.
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{ marginLeft: 0, marginRight: 0 }}
              data-aos="fade-right"
            >
              <div className="col-6">
                <h1>Medical & Health Sciences</h1>
                <p>
                  Join us in pioneering research, healthcare and implementing
                  effective clinical therapies to improve living conditions.
                </p>
              </div>
              <Parallax
                className="center para col-6"
                bgImage={med}
                bgImageAlt="alt"
                strength={600}
              >
                <div className="aca-h">
                  <h1 className="para-txt">Medical & Health Sciences</h1>
                </div>
              </Parallax>
            </div>
            <div
              className="row"
              style={{ marginLeft: 0, marginRight: 0 }}
              data-aos="fade-left"
            >
              <Parallax
                className="center para col-6"
                bgImage={buss}
                bgImageAlt="alt"
                strength={600}
              >
                <div className="aca-h">
                  <h1 className="para-txt">Management</h1>
                </div>
              </Parallax>
              <div className="col-6">
                <h1>Management</h1>
                <p>
                  Creating effective leaders who can provide innovative ideas
                  and solutions to change the world.
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{ marginLeft: 0, marginRight: 0 }}
              data-aos="fade-right"
            >
              <div className="col-6">
                <h1>Science & Humanities</h1>
                <p>
                  It is the place for fundamental research, curiosity driven,
                  where free, open and critical inquiry is pursued across
                  disciplines.
                </p>
              </div>
              <Parallax
                className="center para col-6"
                bgImage={hum}
                bgImageAlt="alt"
                strength={600}
              >
                <div className="aca-h">
                  <h1 className="para-txt">Science & Humanities</h1>
                </div>
              </Parallax>
            </div>
          </div>
          <div className="center container">
            <h1 className="home-title center">Research</h1>
            <div className="row no-gutter">
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

          <div className="center container">
            <h1 className="home-title center">Campus Life</h1>
            <div className="row no-gutter">
              <Card1
                img={c1}
                title="START UP Student over to UC Berkeley, USA"
                para="It was an unforgettable journey for 20 students from SRM Institute of Science and Technology and SRM University, AP- Amravati, when they set foot on the hallowed grounds of the 2nd most highly ranked university for Computer Science in the USA (US News & World Report), University of California, Berkeley."
              />
              <Card
                img={c2}
                para="The Founder Chancellor of the SRM Group, Dr. Paarivendhar, who is also a Member of Parliament of Lok Sabha from the Perambalur Constituency, has transferred the money collected to the Tamil Nadu Chief Minister’s Public Relief Fund."
              />
              <Card
                img={c3}
                title="ARIIA 2020 Rankings : SRM secures the second position"
                para="SRM Institute of Science and Technology (SRMIST), Kattankulathur has found a podium finish in Atal Rankings of Institutions on Innovation Achievements 2020."
                date="22/08/1999"
              />
            </div>
          </div>
          <div className="ad-container">
            <div className="container">
              <h1 className="ad-title container">Admission</h1>
              <div className="row">
                <img src={ub} alt="ub" className="col-md-6" />
                {/* <Parallax
                  className="col-md-6"
                  bgImage={ub}
                  bgImageAlt="alt"
                  strength={100}
                ></Parallax> */}
                <div className="col-md-6 btn-container row">
                  <button className="my-btn">Admission India</button>
                  <button className="my-btn">Admission International</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="about-title">
                  A place for learning, discovery, innovation, expression and
                  discourse
                </h2>
                <div className="row">
                  <h4 className="ach col-6">
                    Students <span style={{ color: "#ff4655" }}>50000+</span>
                  </h4>
                  <h4 className="ach col-6">
                    Faculty <span style={{ color: "#ff4655" }}>3200+</span>
                  </h4>{" "}
                  <h4 className="ach col-6">
                    Job offers <span style={{ color: "#ff4655" }}>8500+</span>
                  </h4>{" "}
                  <h4 className="ach col-6">
                    MnU International{" "}
                    <span style={{ color: "#ff4655" }}>170+</span>
                  </h4>
                  <h4 className="ach col-6">
                    External Funding{" "}
                    <span style={{ color: "#ff4655" }}>130+ Crore</span>
                  </h4>
                  <h4 className="ach col-6">
                    International Students{" "}
                    <span style={{ color: "#ff4655" }}>950+</span>
                  </h4>
                  <h4 className="ach col-6">
                    Patents by Faculty{" "}
                    <span style={{ color: "#ff4655" }}>30+</span>
                  </h4>
                  <h4 className="ach col-6">
                    International Collaboration{" "}
                    <span style={{ color: "#ff4655" }}>60+</span>
                  </h4>
                  <h4 className="ach col-6">
                    h-Index <span style={{ color: "#ff4655" }}>91</span>
                  </h4>
                  <h4 className="ach col-6">
                    Companies Visited{" "}
                    <span style={{ color: "#ff4655" }}>625+</span>
                  </h4>
                  <h4 className="ach col-6">
                    Highest CTC{" "}
                    <span style={{ color: "#ff4655" }}>41.6 LPA</span>
                  </h4>
                  <h4 className="ach col-6">
                    Super Dream & Dream Offers{" "}
                    <span style={{ color: "#ff4655" }}>2000+</span>
                  </h4>
                </div>
              </div>
              <img src={tp} alt="tp" className="col-md-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
