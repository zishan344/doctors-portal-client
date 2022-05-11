import React from "react";

const Reviews = ({ review }) => {
  const { description, location, name, img } = review;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h2 className="font-bold">{name}</h2>
            <h3>{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
