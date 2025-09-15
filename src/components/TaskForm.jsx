import React, { useEffect, useState } from "react";

export default function TaskForm({ task, onSubmit }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
      setPriority(task.priority || "MEDIUM");
      setDueDate(task.dueDate || "");
      setReminder(task.reminder || "");
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, status, priority, dueDate, reminder });
    setTitle("");
    setStatus("PENDING");
    setPriority("MEDIUM");
    setDueDate("");
    setReminder("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card space-y-4 mb-6 animate-fade-in"
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        required
      />

      <div className="flex gap-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-1/2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-1/2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        >
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      <div className="flex gap-4">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-1/2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        />

        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          className="w-1/2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
      >
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
