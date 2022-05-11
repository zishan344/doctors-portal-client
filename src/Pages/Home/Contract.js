import React from "react";
import appoinment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";
const Contract = () => {
  return (
    <div
      style={{ background: ` url(${appoinment})`, backgroundSize: "cover" }}
      className="hero py-2"
    >
      <div className="card w-full max-w-sm shadow-2xl px-2">
        <div className="card-body">
          <div className="form-control">
            <h4 className="text-primary  font-bold text-center">Contact Us</h4>
            <h2 className="text-white font-bold text-2xl text-center">
              Stay connected with us
            </h2>
            <label className="label">
              <span className="label-text text-white ">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Subject</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text text-white">description</span>
            </label>
            <textarea
              className="textarea textarea-bordered "
              placeholder="description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <Button>send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
