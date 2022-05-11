import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Reviews from "./Reviews";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Tina",
      location: "California",
    },
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Mina",
      location: "California",
    },
  ];
  return (
    <section className="container mx-auto px-2 my-28">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primary font-bold">Testimonial</h4>
          <h2 className="text-2xl font-bold">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-44" src={quote} alt="" />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6 my-10 sm:justify-center">
        {reviews.map((review) => (
          <Reviews review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
