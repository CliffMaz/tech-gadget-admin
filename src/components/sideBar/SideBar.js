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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.opened);

  console.log("init state: ", store.getState());
  //dispatch(menuActions.opened(true));
  //store.dispatch(menuActions.opened(true));
  console.log("final: ", store.getState().menu.opened);
  console.log(isOpen);
  const [sideBar, setSideBar] = useState(store.getState().menu.opened);

  const handleClose = () => {
    dispatch(menuActions.open(false));
  };
  return (
    <div className={isOpen ? `sidebar` : `sidebar-open`}>
      <div className="close-bar">
        <h2
          onClick={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
          X
        </h2>
      </div>
      <h4 className="">Tech-Gadget</h4>
      <div className="sidebar-top">
        <Link style={{ textDecoration: "none", color: "#ffff" }} to="/">
          <div className="sidebar-btn">
            <DashboardCustomizeOutlinedIcon /> <p>Dashboard</p>
          </div>
        </Link>

        <div className="sidebar-btn">
          <AttachMoneyOutlinedIcon /> <p>Sales</p>
        </div>
        <div className="sidebar-btn">
          <GroupsOutlinedIcon /> <p>Customers</p>
        </div>
        <Link style={{ textDecoration: "none", color: "#ffff" }} to="/orders">
          <div className="sidebar-btn">
            <ShoppingCartOutlinedIcon /> <p>Orders</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "#ffff" }} to="/orders">
          <div className="sidebar-btn">
            <ShoppingCartOutlinedIcon /> <p>Products</p>
          </div>
        </Link>
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
