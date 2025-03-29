import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./css/AnalyticsChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsChart = () => {
  const data = {
    labels: ["Sale", "Distribute", "Return"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#b54b67", "#d17a8f", "#e5a3b2"], /* Các màu dựa trên #b54b67 */
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="analytics-chart">
      <h2 className="chart-title">Analytics</h2>
      <div className="chart-wrapper">
        <Doughnut data={data} />
        <div className="chart-center">
          <p className="chart-percentage">80%</p>
          <p className="chart-label">Transactions</p>
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color sale"></span>
          <p>Sale</p>
        </div>
        <div className="legend-item">
          <span className="legend-color distribute"></span>
          <p>Distribute</p>
        </div>
        <div className="legend-item">
          <span className="legend-color return"></span>
          <p>Return</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;