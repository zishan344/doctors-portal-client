import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(" http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-2xl">Mange Doctors {doctors?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialist</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={index}
                doctor={doctor}
                index={index}
                refetch={refetch}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
// authorization: `Bearer ${localStorage.getItem("access_token")}`
