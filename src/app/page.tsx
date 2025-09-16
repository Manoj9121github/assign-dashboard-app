"use client";
import { useDashboard } from "./context/DashboardContext";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import AddWidgetForm from "./components/AddWidgetForm";


interface Category {
  id: string; 
}

export default function DashboardPage() {
  
  const { categories }: { categories: Category[] } = useDashboard();

  return (
    <div>
      <Navbar />
      <div className="space-y-6 p-4">
        
        {categories.map((cat) => (
          <div key={cat.id}>
            <Category category={cat} />
            <AddWidgetForm categoryId={cat.id} />
          </div>
        ))}
      </div>
    </div>
  );
}