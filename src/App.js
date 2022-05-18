import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import Users from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequareAdmin from "./Pages/Login/RequareAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview />} />
          <Route
            path="user"
            element={
              <RequareAdmin>
                {" "}
                <Users />{" "}
              </RequareAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequareAdmin>
                {" "}
                <AddDoctor />{" "}
              </RequareAdmin>
            }
          />
          <Route
            path="manageDoctor"
            element={
              <RequareAdmin>
                {" "}
                <ManageDoctor />{" "}
              </RequareAdmin>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
