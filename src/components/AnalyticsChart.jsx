import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function AnalyticsChart({ data }) {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div className="card w-full h-80">
      <h2 className="text-lg font-bold mb-4">Task Status Overview</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
