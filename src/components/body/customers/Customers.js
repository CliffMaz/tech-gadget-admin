import React, { useEffect } from "react";
import "./Customer.scss";
import Customer from "./Customer";
import Table from "../Table/Table";
import { userActions, getUsers } from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { id: "id", label: "Customer ID", minWidth: 170 },
  { id: "fullname", label: "Name", minWidth: 100 },
  {
    id: "username",
    label: "Username",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
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

function createData(id, fullname, username, email, role) {
  return { id, fullname, username, email, role };
}

const Customers = () => {
  const dispatch = useDispatch();
  // dispatch(getUsers());
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsers);
    console.log("rendered");
  }, [dispatch]);
  console.log("u", users);
  const filteredUsers = users.map((user) => {
    return {
      id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  });

  console.log(filteredUsers);
  const rows = filteredUsers;
  return (
    <div className="customers" onLoadStart={() => console.log("loaded")}>
      <h1>Customers</h1>
      <Table column={columns} row={rows} />
    </div>
  );
};

export default Customers;
