"use client";
import { useDashboard } from "../context/DashboardContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Widget({ widget, categoryId }) {  
  const { removeWidget } = useDashboard();

  return (
    <div className="relative bg-white p-4 rounded shadow">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-1 right-2 text-red-500"
      >
        ✕
      </button>
      <h3 className="font-bold">{widget.title}</h3>
      <p>{widget.text}</p>
      {widget.chartData && (
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: widget.title,
                data: widget.chartData,
                borderColor: "blue",
              },
            ],
          }}
        />
      )}
    </div>
  );
}
