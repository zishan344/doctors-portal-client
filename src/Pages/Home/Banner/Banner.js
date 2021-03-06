import React from "react";
import bgBanners from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import Button from "../../Shared/Button";
const Banner = () => {
  return (
    <div>
      <div
        style={{ background: `url(${bgBanners})` }}
        className="hero min-h-screen container mx-auto hero-pattern"
      >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={chair}
            className="max-w-sm xl:max-w-lg  sm:w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl xl:text-6xl font-bold ">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Button> Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
