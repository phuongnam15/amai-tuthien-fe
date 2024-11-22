import { useState } from "react";
import { login } from "../../../api/adminApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const input = {
        email,
        password,
      };
      const response = await login(input);
      if (response) {
        localStorage.setItem("access_token", response?.data?.token);
        navigate("/admin/quy-tu-thien");
      }
    } catch (error) {
      console.log(error?.response?.data?.error_msg);
    }
  };

  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 hidden text-center text-sm text-red-500"></div>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            name="password"
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <span className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <a
          href="/register"
          className="text-xs font-medium text-indigo-500 underline underline-offset-4 hover:text-indigo-600"
        >
          Create a new account
        </a>
      </div>
    </div>
  );
};

export default Login;
