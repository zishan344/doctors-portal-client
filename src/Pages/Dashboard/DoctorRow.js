import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeleteModal }) => {
  const { email, name, specialty, img } = doctor;
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
        <label
          for="my-modal-6"
          onClick={() => setDeleteModal(doctor)}
          class="btn modal-button btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
