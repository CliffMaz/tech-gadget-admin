import React from "react";
import "./Dashboard.scss";

const ShortInfo = (props) => {
  return (
    <div className="shortInfo-card">
      <div className=" shortInfo-icon" style={{ backgroundColor: props.color }}>
        {props.icon}
      </div>
      <div>
        <h3> {props.title}</h3>
        <p>{props.total}</p>
      </div>
    </div>
  );
};

export default ShortInfo;
