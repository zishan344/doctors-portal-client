import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import SingleUser from "./SingleUser";
const AllUsers = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://afternoon-plateau-95028.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("access_token");
        navigate("/login");
      }
      return res.json();
    })
  );

  // const { data: users, isLoading } = useQuery("users", () =>
  //   fetch("https://afternoon-plateau-95028.herokuapp.com/user").then((res) => res.json())
  // );

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h2>Total users {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <SingleUser user={user} index={index} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
