import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";
const Info = () => {
  return (
    <div className="px-4 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle={"Opening Hours"}
        bgClass={"bg-gradient-to-r from-secondary to-primary"}
        myIcon={location}
      />
      <InfoCard
        cardTitle={"Visit our location"}
        bgClass={"bg-accent"}
        myIcon={clock}
      />
      <InfoCard
        cardTitle={"Contact us now"}
        bgClass={"bg-gradient-to-r from-secondary to-primary"}
        myIcon={phone}
      />
    </div>
  );
};

export default Info;
