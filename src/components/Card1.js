import React from "react";
// import "../css/card.css";

const Card1 = ({
  img,
  title = "SRM Founder Chancellor donates Rs.1.15 Crores",
  para = "SRM Founder Chancellor donates Rs.1.15 Crores towards CMPRF",
  date = "02/24/2020",
}) => {
  return (
    <div className="card1 col-md">
      <img src={img} alt="M" className="img-card1" />
      <div className="cont">
        <p className="date">{date}</p>
        <p className="title-card">{title}</p>
        <p className="card-des">{para}</p>
      </div>
    </div>
  );
};

export default Card1;
