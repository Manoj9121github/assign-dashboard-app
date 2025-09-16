"use client";
import { useDashboard } from "../context/DashboardContext";

export default function Navbar() {
  const { setSearchTerm } = useDashboard();

  return (
    <nav className="p-4  text-white flex bg-blue-800 justify-between">
      <h1 className="text-xl text-white  font-bold">Dashboard</h1>
      <input
        className="p-2 rounded border-white text-white"
        placeholder="Search widgets..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </nav>
  );
}
