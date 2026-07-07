import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      const token = response.data.data.token;

      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-xl bg-slate-900 p-8">

        <h1 className="text-3xl font-bold text-white mb-6">
          BusinessOS Login
        </h1>

        <input
          type="email"
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-slate-800 text-white"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-lime-400 text-black font-bold py-3 rounded hover:bg-lime-300"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;