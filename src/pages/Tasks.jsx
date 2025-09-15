import React, { useEffect, useState } from "react";
import API from "../api/api";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks from backend
  const fetchTasks = () => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Request permission for notifications
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  // Reminder notification checker
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (
            task.reminder &&
            new Date(task.reminder) <= now &&
            !task.notified
          ) {
            new Notification("Task Reminder", {
              body: `${task.title} is due now!`,
            });
            return { ...task, notified: true };
          }
          return task;
        })
      );
    }, 60000); // check every 1 min

    return () => clearInterval(interval);
  }, []);

  // Add or update task
  const handleSave = (task) => {
    if (editingTask) {
      API.put(`/tasks/${editingTask.id}`, task).then(fetchTasks);
      setEditingTask(null);
    } else {
      API.post("/tasks", task).then(fetchTasks);
    }
  };

  // Delete task
  const handleDelete = (id) => {
    API.delete(`/tasks/${id}`).then(fetchTasks);
  };

  return (
    <div className="ml-72 p-6">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      {/* Task Form */}
      <TaskForm task={editingTask} onSubmit={handleSave} />

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => setEditingTask(task)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
