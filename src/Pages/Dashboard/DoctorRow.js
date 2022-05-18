import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { email, name, specialty, img } = doctor;
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctors: ${name} successfully`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 ">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          class="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
