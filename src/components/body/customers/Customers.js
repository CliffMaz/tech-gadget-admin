import React, { useEffect } from "react";
import "./Customer.scss";
import Customer from "./Customer";
import Table from "../Table/Table";
import { getUsers } from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  // dispatch(getUsers());
  const users = useSelector((state) => state.user.users);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    navigate("/");
  }

  let customerView = useSelector((state) => state.customer.customerView);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users.map((user) => {
    return {
      id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  });

  const rows = filteredUsers;
  return (
    <div className="customers">
      {customerView && <Customer />}
      <h1>Customers</h1>
      <Table column={columns} row={rows} />
    </div>
  );
};

export default Customers;
