import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Priority distribution
  const priorityData = [
    { name: "High", value: tasks.filter((t) => t.priority === "High").length },
    { name: "Medium", value: tasks.filter((t) => t.priority === "Medium").length },
    { name: "Low", value: tasks.filter((t) => t.priority === "Low").length },
  ];

  // Deadlines by day
  const deadlineData = tasks.reduce((acc, task) => {
    if (task.dueDate) {
      const date = new Date(task.dueDate).toLocaleDateString();
      const existing = acc.find((d) => d.date === date);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ date, count: 1 });
      }
    }
    return acc;
  }, []);

  // Reminder notifications
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      tasks.forEach((task) => {
        if (task.reminder) {
          const reminderTime = new Date(task.reminder);
          if (reminderTime <= now && !task.notified) {
            alert(`⏰ Reminder: ${task.title}`);
            task.notified = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
          }
        }
      });
    };
    const interval = setInterval(checkReminders, 60000); // every 1 min
    return () => clearInterval(interval);
  }, [tasks]);

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  return (
    <div className="p-8 md:ml-72 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-colors duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-2">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight flex items-center gap-2 animate-fade-in">📊 Dashboard</h1>
        <p className="text-gray-500 text-lg">Your productivity at a glance</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        <div className="card flex flex-col items-center group hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg font-medium text-gray-600 mb-1">Total Tasks</h2>
          <p className="text-4xl font-extrabold text-indigo-500 group-hover:scale-110 transition-transform">{tasks.length}</p>
        </div>
        <div className="card flex flex-col items-center group hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg font-medium text-gray-600 mb-1">Completed</h2>
          <p className="text-4xl font-extrabold text-green-500 group-hover:scale-110 transition-transform">{tasks.filter((t) => t.completed).length}</p>
        </div>
        <div className="card flex flex-col items-center group hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg font-medium text-gray-600 mb-1">Pending</h2>
          <p className="text-4xl font-extrabold text-red-400 group-hover:scale-110 transition-transform">{tasks.filter((t) => !t.completed).length}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Priority Chart */}
        <div className="card p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Tasks by Priority</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {priorityData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#f1f5f9', borderRadius: 8, color: '#334155' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Deadline Chart */}
        <div className="card p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Tasks by Deadline</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deadlineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip contentStyle={{ background: '#f1f5f9', borderRadius: 8, color: '#334155' }} />
              <Legend />
              <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
