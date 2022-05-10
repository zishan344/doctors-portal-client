import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import Button from "../Shared/Button";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex items-center"
    >
      <div className="flex-1">
        <img className="mt-[-160px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white">
        <h4 className="text-primary  font-bold">Appointment</h4>
        <h2 className="text-2xl my-5 font-semibold">
          Make an appointment Today
        </h2>
        <p className="my-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button>Get started</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
