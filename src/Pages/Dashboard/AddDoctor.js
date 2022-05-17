import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">Add a new Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
            type="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "provide a valid email",
              },
            })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialist</span>
          </label>
          <input
            {...register("specialist", {
              required: {
                value: true,
                message: "specialist is required",
              },
              minLength: {
                value: 6,
                message: "must be at least 6 characters longer",
              },
            })}
            type="text"
            placeholder="specialist"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.specialist?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.specialist.message}
              </span>
            )}
            {errors.specialist?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.specialist.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs font-bold text-white"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
