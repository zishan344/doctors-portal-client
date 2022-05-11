import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner/Banner";
import Contract from "./Contract";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services></Services>
      <MakeAppointment />
      <Testimonials />
      <Contract />
      <Footer />
    </div>
  );
};

export default Home;
