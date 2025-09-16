
"use client";
import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

export default function AddWidgetForm({ categoryId }) { 
  const { addWidget } = useDashboard();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget(categoryId, {
      id: Date.now().toString(),
      title,
      text,
      chartData: [5, 10, 15, 20, 25, 30],
    });
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <input
        className="border p-1 rounded"
        placeholder="Widget title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-1 rounded"
        placeholder="Widget text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3 rounded">Add</button>
    </form>
  );
}
