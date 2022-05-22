import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(" https://afternoon-plateau-95028.herokuapp.com/doctors", {
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
                setDeleteModal={setDeleteModal}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
        {deleteModal && (
          <DeleteModal
            deleteModal={deleteModal}
            refetch={refetch}
            setDeleteModal={setDeleteModal}
          ></DeleteModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctor;
// authorization: `Bearer ${localStorage.getItem("access_token")}`
