import React from "react";
import "./Orders.scss";
import { useDispatch, useSelector } from "react-redux";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { orderActions } from "../../../redux/order/orderSlice";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Item from "./Item";

const Order = () => {
  const orderInfo = useSelector((state) => state.order.orderInfo);
  const dispatch = useDispatch();
  return (
    <div className="order">
      <div className="order-top">
        <div>
          <h2>Order ID:</h2>
          <p>{orderInfo.id}</p>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(orderActions.orderClose());
          }}
        >
          <CancelPresentationIcon />
        </div>
      </div>
      <div className="order-btm">
        <div className="order-left">
          <div className="orderby">
            <label for="Orders">Ordered By:</label>

            <div className="orderby-body">
              <img
                src={orderInfo.orderBy.profileDisplay}
                alt={orderInfo.orderBy.username}
              />
              <p>{orderInfo.orderBy.fullname}</p>
            </div>
          </div>
          <div className="order-otions">
            <label for="Orders">Order Stage:</label>
            <select id="Orders" name="orders">
              {orderInfo.orderStatus !== "Not Processed" && (
                <option value="Defualt"> Not Processed</option>
              )}

              <option value="Not Processed">Not Processed</option>
              {orderInfo.orderStatus !== "Processing" && (
                <option value="Processing">Processing</option>
              )}

              {orderInfo.orderStatus !== "Dispatched" && (
                <option value="Dispatched">Dispatched</option>
              )}
              {orderInfo.orderStatus !== "Cancelled" && (
                <option value="Cancelled">Cancelled</option>
              )}

              {orderInfo.orderStatus !== "Delivered" && (
                <option value="Delivered">Delivered</option>
              )}
            </select>
          </div>
          <div className="orderDetials">
            <div>
              <label for="price">Total Price:</label>
              <p>{orderInfo.totalPrice}</p>
            </div>
            <div>
              <label for="paid">Payment:</label>
              <p>
                {" "}
                {orderInfo.isPaid ? (
                  <div style={{ fontSize: "20px", display: "flex" }}>
                    <CheckIcon color="success" fontSize="large" />
                    <p>Paid</p>
                  </div>
                ) : (
                  <div style={{ color: "red", display: "flex" }}>
                    <ClearIcon />
                    <p>Not Paid</p>
                  </div>
                )}
              </p>
            </div>

            <div>
              <label for="Shipping">Shipping Address:</label>
              <div>
                <div>
                  <h4>Address:</h4>
                  <p>{orderInfo.shippingAddress.address}</p>
                </div>
                <div>
                  <h4>City:</h4>
                  <p>{orderInfo.shippingAddress.city}</p>
                </div>
                <div>
                  <h4>Postal code:</h4>
                  <p>{orderInfo.shippingAddress.postalCode}</p>
                </div>
                <div>
                  <h4>Country:</h4>
                  <p>{orderInfo.shippingAddress.country}</p>
                </div>
              </div>
            </div>
          </div>
          <Button variant="outlined" color="success">
            Update
          </Button>
        </div>
        <div className="order-right">
          <h3>Product List:</h3>
          <div>
            {orderInfo?.orderItems?.map((item) => (
              <Item
                key={item._id}
                item={item.product}
                itemQuantity={item.quantity}
                disabled="disabled"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
