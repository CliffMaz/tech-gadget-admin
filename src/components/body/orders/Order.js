import React from "react";
import "./Orders.scss";
import { useDispatch, useSelector } from "react-redux";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { orderActions } from "../../../redux/order/orderSlice";

const Order = () => {
  const orderInfo = useSelector((state) => state.order.orderInfo);
  const dispatch = useDispatch();
  return (
    <div className="order">
      <div className="orderTop">
        <h2>Order</h2>
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(orderActions.orderClose());
          }}
        >
          <CancelPresentationIcon />
        </div>
      </div>

      <div className="order-left">
        <div className="orderby">
          <label for="Orders">Ordered By:</label>
          <div>
            <div>
              <p>{orderInfo.orderBy.fullname}</p>
            </div>
          </div>
        </div>
        <div className="orderOtions">
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
            <p> {orderInfo.isPaid ? <>paid</> : <>Not Paid</>}</p>
          </div>

          <div>
            <label for="Shipping">Shipping Address:</label>
            <div>
              <div>
                <p>Address:</p>
                <p>{orderInfo.shippingAddress.address}</p>
              </div>
              <div>
                <p>City:</p>
                <p>{orderInfo.shippingAddress.city}</p>
              </div>
              <div>
                <p>Postal code:</p>
                <p>{orderInfo.shippingAddress.postalCode}</p>
              </div>
              <div>
                <p>Country:</p>
                <p>{orderInfo.shippingAddress.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-right">{orderInfo.orderStatus}</div>
    </div>
  );
};

export default Order;
