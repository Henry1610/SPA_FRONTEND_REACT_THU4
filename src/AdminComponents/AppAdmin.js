import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardCards from "./DashboardCards";
import ReportsChart from "./ReportsChart";
import AnalyticsChart from "./AnalyticsChart";
import RecentOrdersTable from "./RecentOrdersTable";
import TopSellingProducts from "./TopSellingProducts";
import "./css/AppAdmin.css";

function AppAdmin() {
  return (
    <div className="app-admin">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <DashboardCards />
          <div className="charts-section">
            <div className="reports-chart">
              <ReportsChart />
            </div>
            <div className="analytics-chart">
              <AnalyticsChart />
            </div>
          </div>
          <div className="tables-section">
            <div className="recent-orders">
              <RecentOrdersTable />
            </div>
            <div className="top-selling">
              <TopSellingProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppAdmin;