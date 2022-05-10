import React from "react";

const InfoCard = ({ myIcon, bgClass, cardTitle }) => {
  console.log(bgClass);
  return (
    <div className={` card lg:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img className="pl-2 pt-2" src={myIcon} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
