import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="card flex flex-col justify-between min-h-[180px] group transition-shadow duration-300 hover:shadow-lg">
      <div>
        <h3 className="text-lg font-bold text-blue-700 group-hover:text-blue-900 transition-colors">{task.title}</h3>
        <p className="text-sm text-gray-500 mt-1">Status: <span className={task.status === 'DONE' ? 'text-green-600' : task.status === 'IN_PROGRESS' ? 'text-yellow-600' : 'text-red-500'}>{task.status.replace('_', ' ')}</span></p>
        <p className="text-sm text-gray-500">Priority: <span className={task.priority === 'HIGH' ? 'text-red-500' : task.priority === 'MEDIUM' ? 'text-yellow-500' : 'text-green-500'}>{task.priority}</span></p>
        {task.dueDate && (
          <p className="text-sm text-gray-400">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        )}
        {task.reminder && (
          <p className="text-sm text-blue-400">Reminder: {new Date(task.reminder).toLocaleString()}</p>
        )}
      </div>

      <div className="flex space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-lg font-medium shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-100 text-red-700 px-4 py-1.5 rounded-lg font-medium shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
