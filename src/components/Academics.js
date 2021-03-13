import React from "react";
import { Parallax } from "react-parallax";

export default function Academics({
  img,
  para = "We have long been at the forefront of breakthrough research and innovation. We offer several degree programs, major, minor and specializations, as well as research opportunities, to follow your passion.",
  title = "Engineering",
}) {
  return (
    <div id="rooms">
      <Parallax
        className="my-img"
        bgImage={img}
        bgImageAlt="alt"
        strength={-200}
      >
        <div className="our-container our-rooms" id="rooms">
          <h1 className="our-title-color">{title}</h1>
          <p className="card-des">{para}</p>
        </div>
      </Parallax>
    </div>
  );
}
