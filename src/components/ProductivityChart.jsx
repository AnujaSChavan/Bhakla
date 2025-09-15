import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailyData = [
  { date: "2024-01-10", tasks: 3 },
  { date: "2024-01-11", tasks: 2 },
  { date: "2024-01-12", tasks: 4 },
  { date: "2024-01-13", tasks: 1 },
  { date: "2024-01-14", tasks: 5 },
];

const weeklyData = [
  { week: "Week 1", tasks: 15 },
  { week: "Week 2", tasks: 18 },
  { week: "Week 3", tasks: 12 },
  { week: "Week 4", tasks: 20 },
];

function ProductivityChart({ type }) {
  const data = type === "daily" ? dailyData : weeklyData;

  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <h3 className="font-semibold mb-3">{type === "daily" ? "Daily Productivity" : "Weekly Productivity"}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={type === "daily" ? "date" : "week"} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityChart;
