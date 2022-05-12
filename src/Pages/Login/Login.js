import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  let signInError;

  if (gerror || error) {
    signInError = (
      <p className="text-red-500">
        <small>{error.message || gerror.message}</small>
      </p>
    );
  }
  if (gloading || loading) {
    return <Spinner />;
  }
  if (guser || user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "provide a valid email",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "must be at least 6 characters longer",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs font-bold text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to doctors portal:{" "}
              <Link to="/signup" className="text-secondary">
                create an account
              </Link>
            </small>
          </p>
          {/* social login */}
          <div className="divider">OR</div>
          <button
            onClick={() => {
              signInWithGoogle();
            }}
            className="btn btn-outline"
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
