import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        data.token
      );

      if (data.user?.name) {
        localStorage.setItem(
          "userName",
          data.user.name
        );

        toast.success(
          `Welcome back, ${data.user.name}!`
        );
      } else {
        toast.success(
          "Login Successful!"
        );
      }

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-5xl font-bold text-white text-center mb-2">
          FlowState
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Login to manage your playlists
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <p className="text-slate-400">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="text-green-400 hover:text-green-300 font-semibold"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;