import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{slots[0]}</p>
        {slots.length < 1 && (
          <p className="text-red-500 text-sm"> Try Another Date</p>
        )}

        <p className="text-sm"> {slots.length} SPACES AVAILABLE</p>

        <div className="card-actions justify-start">
          <button className=""></button>
          <label
            onClick={() => {
              setTreatment(service);
            }}
            disabled={slots.length === 0}
            for="Booking-modal"
            class="btn modal-button btn btn-secondary text-white font-bold"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
