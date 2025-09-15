function StatCard({ label, value, color }) {
  const colors = {
    red: "bg-red-100 text-red-500",
    yellow: "bg-yellow-100 text-yellow-500",
    green: "bg-green-100 text-green-500",
  };

  return (
    <div className="card flex items-center gap-4 group hover:shadow-lg transition-all duration-300">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold ${colors[color]} group-hover:scale-110 transition-transform`}>
        ●
      </div>
      <div>
        <p className="text-gray-500 text-base font-medium">{label}</p>
        <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-blue-600 transition-colors">{value}</h3>
      </div>
    </div>
  );
}

export default StatCard;
