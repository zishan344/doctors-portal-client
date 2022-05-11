import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Service/Service";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      title: "Cavity Filling",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      img: whitening,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-40 container mx-auto px-2 ">
      <h3 className="text-center text-primary font-bold ">OUR SERVICES</h3>
      <h4 className="text-center text-2xl font-bold">Services We Provide</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-8 my-6">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
      <ServicesBanner />
    </div>
  );
};

export default Services;
