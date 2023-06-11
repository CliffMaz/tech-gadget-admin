import React from "react";
import "./Dashboard.scss";
import ShortInfo from "./ShortInfo";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <ShortInfo
          icon={<MonetizationOnIcon />}
          color="#df453f"
          title="Total Sales"
          total="632"
        />
        <ShortInfo
          icon={<ShoppingCartIcon />}
          color="#d4f77e"
          title="Total Orders"
          total="545"
        />
        <ShortInfo
          icon={<InventoryIcon />}
          color="#eec54f"
          title="Total Products"
          total="345"
        />
      </div>
      <div className="dashboard-body">
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
