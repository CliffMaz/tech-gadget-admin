import React from "react";
import "./Dashboard.scss";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const ShortInfo = () => {
  return (
    <div className="shortInfo-card">
      <div className=" shortInfo-icon">
        <MonetizationOnIcon />
      </div>
      <div>
        <h3> Total Sales</h3>
        <p>$1276</p>
      </div>
    </div>
  );
};

export default ShortInfo;
