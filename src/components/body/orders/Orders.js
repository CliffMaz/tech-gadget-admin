import React from "react";
import "./Orders.scss";
import Table from "../Table/Table";

const Orders = () => {
  const columns = [
    { id: "customerId", label: "Customer ID", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "username",
      label: "Username",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "email",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "role",
      label: "Role",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(customerId, name, username, email, role) {
    return { customerId, name, username, email, role };
  }

  const rows = [
    createData("132", "India", 1324171354, 3287263),
    createData("123", "CN", 1403500365, 9596961),
    createData("244", "Italy", 60483973, 301340),
    createData("154", "USA", 327167434, 9833520),
    createData("127", "Canada", 37602103, 9984670),
    createData("676", "Australia", 25475400, 7692024),
    createData("346", "Denmark", 83019200, 357578),
    createData("23", "Ireland", 4857000, 70273),
    createData("2", "Mexico", 126577691, 1972550),
    createData("763", "Japan", 126317000, 377973),
    createData("233", "France", 67022000, 640679),
    createData("700", "United Kingdom", 67545757, 242495),
    createData("12", "Russia", 146793744, 17098246),
    createData("15", "Nigeria", 200962417, 923768),
    createData("4", "Brazil", 210147125, 8515767),
  ];

  return (
    <div className="orders">
      <h1>Orders</h1>
      <Table column={columns} row={rows} />
    </div>
  );
};

export default Orders;
