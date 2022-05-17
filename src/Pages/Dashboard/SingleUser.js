import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(
      `https://afternoon-plateau-95028.herokuapp.com/users/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make an Admin Successfully");
          refetch();
        }
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
