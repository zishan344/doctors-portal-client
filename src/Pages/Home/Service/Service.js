import React from "react";

const Service = ({ service }) => {
  const { description, img, title } = service;
  return (
    <div>
      <div className="card  max-w-lg sm:w-full bg-base-100 shadow-xl">
        <figure className="px-8 pt-8">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
