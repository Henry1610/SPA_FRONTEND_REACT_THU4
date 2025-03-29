import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import "./css/ReportsChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ReportsChart = () => {
  const data = {
    labels: ["10am", "11am", "12pm", "01pm", "02pm", "03pm", "04pm", "05pm", "06pm", "07pm"],
    datasets: [
      {
        label: "Reports",
        data: [40000, 60000, 30000, 80000, 50000, 40000, 60000, 50000, 70000, 90000],
        borderColor: "#b54b67", /* Màu đường biểu đồ */
        backgroundColor: "rgba(181, 75, 103, 0.2)", /* Nền nhạt dựa trên #b54b67 */
        fill: true,
      },
    ],
  };

  return (
    <div className="reports-chart">
      <h2 className="chart-title">Reports</h2>
      <Line data={data} />
    </div>
  );
};

export default ReportsChart;