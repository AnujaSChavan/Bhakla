import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiCheckSquare, FiCalendar, FiBell, FiSettings, FiLogOut } from "./SidebarIcons";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <FiGrid size={20} /> },
  { to: "/tasks", label: "Tasks", icon: <FiCheckSquare size={20} /> },
  { to: "/calendar", label: "Calendar", icon: <FiCalendar size={20} /> },
  { to: "/reminders", label: "Reminders", icon: <FiBell size={20} /> },
  { to: "/settings", label: "Settings", icon: <FiSettings size={20} /> },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 className="text-2xl font-extrabold text-blue-600">PlanHub</h1>
          <p className="text-sm text-gray-400 font-medium mt-1">Personal Task Manager</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                `sidebar-link${location.pathname === item.to ? ' active' : ''}`
              }
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 500 }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '12px', background: '#e0e7ff', marginBottom: '0.5rem' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: 700, fontSize: 18 }}>U</div>
          <div>
            <div style={{ fontWeight: 600, color: '#1e293b', lineHeight: 1.1 }}>User</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>user@example.com</div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 w-full rounded-lg text-gray-500 hover:bg-gray-100 transition text-base font-medium" style={{ justifyContent: 'flex-start' }}>
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
