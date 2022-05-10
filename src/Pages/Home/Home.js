import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services></Services>
      <MakeAppointment />
    </div>
  );
};

export default Home;
