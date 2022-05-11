import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const appointmentSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="Booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking For: {treatment.name}
          </h3>
          <form
            onSubmit={appointmentSubmit}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              name="date"
              disabled
              value={format(date, "PP")}
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {treatment.slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name=""
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              class="input input-bordered w-full max-w-xs bg-secondary cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
