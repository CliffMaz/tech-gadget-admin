import React from "react";
import "./Dashboard.scss";
import ShortInfo from "./ShortInfo";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <ShortInfo />
        <ShortInfo />
        <ShortInfo />
      </div>
      <div className="dashboard-body">body</div>
    </div>
  );
};

export default Dashboard;
