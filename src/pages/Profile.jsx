import React from "react";

export default function Profile() {
  return (
    <div className="ml-72 p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="card">
        <h2 className="text-lg font-semibold">User Info</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Role: User</p>
      </div>
    </div>
  );
}
