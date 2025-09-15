import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="card flex items-center justify-between px-8 py-5 bg-white/90 shadow-md animate-fade-in">
      <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight flex items-center gap-3">
        <span className="text-3xl">📝</span>
        Task Manager
      </h1>
      <div className="flex gap-3">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          <span className="text-lg">👤</span> Profile
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          <span className="text-lg">�</span> Logout
        </button>
      </div>
    </nav>
  );
}
