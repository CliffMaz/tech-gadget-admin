import React, { useEffect, useState } from "react";
import "./SideBar.scss";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import store from "../../redux/store/store";
import { menuActions } from "../../redux/menu/menuSlice";
import { getUsers, userActions } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const SideBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.opened);

  const [sideBar, setSideBar] = useState(store.getState().menu.opened);
  const navigate = useNavigate();
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
        <Link
          style={{ textDecoration: "none", color: "#ffff" }}
          to="/dashboard"
        >
          <div className="sidebar-btn">
            <DashboardCustomizeOutlinedIcon /> <p>Dashboard</p>
          </div>
        </Link>

        <div className="sidebar-btn">
          <AttachMoneyOutlinedIcon /> <p>Sales</p>
        </div>
        <Link
          style={{ textDecoration: "none", color: "#ffff" }}
          to="/customers"
        >
          <div className="sidebar-btn" onClick={() => dispatch(getUsers())}>
            <GroupsOutlinedIcon /> <p>Customers</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none", color: "#ffff" }} to="/orders">
          <div className="sidebar-btn">
            <ShoppingCartOutlinedIcon /> <p>Orders</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "#ffff" }} to="/products">
          <div className="sidebar-btn">
            <ShoppingCartOutlinedIcon /> <p>Products</p>
          </div>
        </Link>
        <div className="sidebar-bottom"></div>
      </div>
      <Link style={{ textDecoration: "none", color: "#ffff" }} to="/settings">
        <div className="sidebar-btn">
          <SettingsOutlinedIcon /> <p>Settings</p>
        </div>
      </Link>
      <div
        className="sidebar-btn"
        onClick={(e) => {
          e.preventDefault();
          dispatch(menuActions.open(false));
          dispatch(userActions.logOut());

          navigate("/");
        }}
      >
        <LogoutOutlinedIcon /> <p>Sign Out</p>
      </div>
    </div>
  );
};

export default SideBar;
