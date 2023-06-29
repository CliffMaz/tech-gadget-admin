import React, { useEffect, useState } from "react";
import "./Customer.scss";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store/store";
import { customerActions } from "../../../redux/customer/customerSlice";

const Customer = () => {
  const data = useSelector((state) => state.customer.customerInfo);
  const [customer, setCustomer] = useState(data);

  const dispatch = useDispatch();
  useEffect(() => {
    setCustomer(data);
  }, [data]);
  return (
    <div className="customer">
      <div>
        <p
          onClick={(e) => {
            e.preventDefault();
            dispatch(customerActions.customerClose());
          }}
        >
          X
        </p>
      </div>
      <p>our customer</p>
      <div>{customer.fullname}</div>
    </div>
  );
};

export default Customer;
