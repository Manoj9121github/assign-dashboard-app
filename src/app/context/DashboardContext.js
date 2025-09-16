"use client";
import { createContext, useContext, useState } from "react";
import data from "../data/dashboard.json";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [categories, setCategories] = useState(data.categories);
  const [searchTerm, setSearchTerm] = useState("");

  const addWidget = (categoryId, widget) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
          : cat
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{ categories, addWidget, removeWidget, searchTerm, setSearchTerm }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);
