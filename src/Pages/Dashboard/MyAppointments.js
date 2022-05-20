import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://afternoon-plateau-95028.herokuapp.com/availableAppointments?patient=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("access_token");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => setAppointments(data));
  }, [user]);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{a.patientName}</td>
              <td>{a.date}</td>
              <td>{a.slot}</td>
              <td>{a.treatment}</td>
              <td>
                {a?.price && !a.paid && (
                  <Link to={`/dashboard/payment/${a._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
                {a?.price && a.paid && (
                  <p>
                    <span className="text-success">Paid</span>
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
