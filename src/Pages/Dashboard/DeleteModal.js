import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ refetch, deleteModal, setDeleteModal }) => {
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
          toast.success(`Doctors: ${deleteModal.name} successfully`);
          refetch();
          setDeleteModal(null);
        }
      });
  };
  return (
    <div>
      {/* // <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" className=" btn btn-primary btn-sm ">
              cancel
            </label>
            <button
              onClick={() => handleDelete(deleteModal.email)}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
