import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, index, refetch }) => {
  const { email, role } = user;
  console.log(role);
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Make an Admin Successfully");
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "Admin" && (
          <button onClick={makeAdmin} class="btn btn-sm  text-white">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-sm  text-white">Remove Admin</button>
      </td>
    </tr>
  );
};

export default SingleUser;
