import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppointments from "./AvailableAppointments ";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container mx-auto">
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appoinment;
