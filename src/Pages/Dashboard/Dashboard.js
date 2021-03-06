import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
        {/* <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                {" "}
                <Link to="/dashboard/user">All User</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/dashboard/addDoctor">Add Doctor</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/dashboard/manageDoctor">Manage Doctor</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
