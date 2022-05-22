import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery(["services"], () =>
    fetch(" https://afternoon-plateau-95028.herokuapp.com/services").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    const imageStorageKey = "bbb38cfd9a904b4c973bfd3fa56708f9";
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.services,
            img: image,
          };
          fetch(" https://afternoon-plateau-95028.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((insert) => {
              if (insert.insertedId) {
                toast.success("successfully Added Doctor");

                reset();
              } else {
                toast.error("Failed to add tray again");
              }
            });
        }
      });
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

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Specialist</span>
          </label>
          <select
            {...register("services", {
              required: {
                value: true,
                message: "services is required",
              },
            })}
            className="select select-bordered"
          >
            {services.map((s, index) => (
              <option key={index} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <label class="label">
            <span className="  label-text-alt">
              {errors.services?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.services.message}
                </span>
              )}
            </span>
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Upload Image</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.image?.message}
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
