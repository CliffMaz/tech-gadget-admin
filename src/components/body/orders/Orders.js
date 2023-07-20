import React, { useEffect } from "react";
import "./Orders.scss";
import OrderTable from "../Table/OrderTable";
import { getOrders } from "../../../redux/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  let orderView = useSelector((state) => state.order.orderView);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    dispatch(getOrders());
  }, [dispatch]);

  const filteredOrders = orders.map((order) => {
    return {
      id: order._id,
      orderStatus: order.orderStatus,
      totalPrice: "R" + order.totalPrice,
      paidAt: order.paidAt,
      action: (
        <>
          <EditIcon />
        </>
      ),
    };
  });

  const columns = [
    { id: "id", label: "Order ID", minWidth: 170 },
    {
      id: "orderStatus",
      label: "Order Status",
      minWidth: 100,
      render: (rowData) => (rowData.mode ? "True" : "False"),
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "totalPrice",
      label: "Total Price",
      minWidth: 200,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "paidAt",
      label: "Payment Date",
      minWidth: 200,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "action",
      label: "Action",
      minWidth: 200,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(id, paid, totalPrice, paidAt, action) {
    return { id, paid, totalPrice, paidAt, action };
  }

  const rows = filteredOrders;

  return (
    <div className="orders">
      <h1>Orders</h1>
      <OrderTable column={columns} row={rows} />
    </div>
  );
};

export default Orders;
