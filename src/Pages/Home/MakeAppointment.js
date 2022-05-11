import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import Button from "../Shared/Button";
const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="flex justify-center items-center container mx-auto">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-160px] " src={doctor} alt="" />
        </div>
        <div className="flex-1 px-2 text-white py-4">
          <h4 className="text-primary  font-bold">Appointment</h4>
          <h2 className="text-2xl my-5 font-semibold">
            Make an appointment Today
          </h2>
          <p className="my-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
