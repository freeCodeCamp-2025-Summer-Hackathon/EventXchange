import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App.jsx";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user != null) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!password || !username) return;
    const data = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => r.json());

    if (data.id) {
      setUser(data);
      // TODO: use a router parameter to determine where to redirect to while
      // using "/" as a fallback or default.
      navigate("/", { replace: true });
    } else {
      // TODO: an error happened so we should tell the user
      alert(`ERROR: ${data.error}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-6rem)] bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={(event) => handleLogin(event)}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              autoFocus
              className="border border-gray-300 p-2 w-full rounded"
              type="text"
              id="username"
              required
              value={username}
              onInput={(e) => setUsername(e.currentTarget.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="password"
              id="password"
              required
              value={password}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer w-full disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!username || !password}
            type="submit"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
