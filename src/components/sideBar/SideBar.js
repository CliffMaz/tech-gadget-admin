import React, { useState } from "react";
import "./SideBar.scss";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import store from "../../redux/store/store";
import { menuActions } from "../../redux/menu/menuSlice";
const SideBar = () => {
  console.log("init state: ", store.getState());
  store.dispatch(menuActions.opened(true));
  console.log("final: ", store.getState());
  const [sideBar, setSideBar] = useState(true);
  return (
    <div className={sideBar ? `sidebar` : `sidebar-open`}>
      <h4 className="">Tech-Gadget</h4>
      <div className="sidebar-top">
        <div className="sidebar-btn">
          <DashboardCustomizeOutlinedIcon /> <p>Dashboard</p>
        </div>
        <div className="sidebar-btn">
          <AttachMoneyOutlinedIcon /> <p>Sales</p>
        </div>
        <div className="sidebar-btn">
          <GroupsOutlinedIcon /> <p>Customers</p>
        </div>
        <div className="sidebar-btn">
          <ShoppingCartOutlinedIcon /> <p>Orders</p>
        </div>
        <div className="sidebar-bottom"></div>
      </div>
      <div className="sidebar-btn">
        <SettingsOutlinedIcon /> <p>Settings</p>
      </div>
      <div className="sidebar-btn">
        <LogoutOutlinedIcon /> <p>Sign Out</p>
      </div>
    </div>
  );
};

export default SideBar;
