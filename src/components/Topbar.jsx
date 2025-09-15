import { FiBell } from "react-icons/fi";

function Topbar() {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900">Dashboard</h2>
        <p className="text-gray-400 text-base mt-1">Overview of your tasks and productivity</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            className="border border-gray-200 rounded-lg px-5 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 transition w-72 bg-gray-50"
          />
          <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><line x1="16" y1="16" x2="12.5" y2="12.5"/></svg>
          </span>
        </div>
        <button className="relative bg-white rounded-full p-2 hover:bg-blue-50 transition">
          <FiBell size={22} className="text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg cursor-pointer">A</div>
      </div>
    </header>
  );
}

export default Topbar;
