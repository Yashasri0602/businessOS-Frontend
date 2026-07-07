import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

function Register() {
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await register(
        businessName,
        ownerName,
        phone,
        email,
        password
      );

      const token = response.data.data.token;

      localStorage.setItem("token", token);

      navigate("/dashboard");
      
    } catch (error: any) {
  console.log(error.response);

  const message =
    error.response?.data?.message || "Registration Failed";

  alert(message);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-2 text-3xl font-bold text-white">
          Create Business Account
        </h1>

        <p className="mb-8 text-slate-400">
          Start managing your business with AI.
        </p>

        <input
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <button
          onClick={handleRegister}
          className="w-full rounded-lg bg-lime-400 py-3 font-bold text-black hover:bg-lime-300"
        >
          Create Account
        </button>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-slate-700"></div>

          <span className="mx-4 text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        <button
          disabled
          className="w-full rounded-lg border border-slate-600 py-3 text-slate-400"
        >
          Continue with Google
          <br />
          <span className="text-xs">
            Coming Soon
          </span>
        </button>

      </div>
    </div>
  );
}

export default Register;