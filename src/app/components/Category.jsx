"use client";
import { useDashboard } from "../context/DashboardContext";
import Widget from "./Widget";

export default function Category({ category }) {
  
  const { searchTerm } = useDashboard();

 
  const filteredWidgets = category.widgets.filter(
    (w) =>
      w.title.toLowerCase().includes(searchTerm) ||
      w.text.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredWidgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
}
