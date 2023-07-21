import React, { useEffect, useState } from "react";
import "./Customer.scss";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store/store";
import { customerActions } from "../../../redux/customer/customerSlice";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Customer = () => {
  const customer = useSelector((state) => state.customer.customerInfo);
  //const [customer, setCustomer] = useState(data);

  const dispatch = useDispatch();
  // useEffect(() => {
  //setCustomer(data);
  // }, [data]);
  return (
    <div className="customer">
      <div className="customer-close">
        <h1>Client's Detials</h1>
        <p
          className="close"
          onClick={(e) => {
            e.preventDefault();
            dispatch(customerActions.customerClose());
          }}
        >
          <CancelPresentationIcon />
        </p>
      </div>

      <div className="cust">
        <div className="cust-left">
          <img src={customer?.profileDisplay} alt={customer.username} />
        </div>
        <div className="cust-right">
          <div>
            <h2>Fullname:</h2>
            <p>{customer.fullname}</p>
          </div>
          <div>
            <h2>Username:</h2> <p>{customer.username}</p>
          </div>

          <div>
            <h2>Email:</h2>
            <p>{customer.email}</p>
          </div>
          <div>
            <h2>Role:</h2>
            <p>{customer.role}</p>
          </div>
          <div>
            <h2>Profile Created on:</h2>
            <p>{customer.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
