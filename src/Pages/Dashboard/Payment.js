import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L17frAwpofeLPggaDvCY2dAq1bY46D2natT2D0o3pHj0PdxUKZt1wEakm37uihs819MIALDFrgk2LTB2Ae4bm4e00V1m7fslz"
);

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["users", id], () =>
    fetch(` https://afternoon-plateau-95028.herokuapp.com/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  const {
    date,
    patientName,
    phone,
    patient: patientMail,
    price,
    slot,
    treatment,
  } = appointment;

  return (
    <div>
      <div class="card max-w-lg bg-base-100 shadow-xl text-primary-content">
        <div class="card-body ">
          <h2 class="card-title text-secondary text-sm">
            {" "}
            Hello {patientName}
          </h2>
          <p className="font-bold text-xl">
            Please pay for <span className="text-primary">{treatment}</span>{" "}
          </p>
          <p>
            Your Appointment{" "}
            <span className="text-red-400 font-bold">{slot}</span> {date}
          </p>
          <p>please pay ${price}</p>
          <div class="card-actions justify-end">
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="card max-w-lg bg-base-100 shadow-xl mt-10 text-primary-content">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
