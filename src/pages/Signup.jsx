import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/signup", { name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Error signing up");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
