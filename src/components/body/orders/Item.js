import React, { useState } from "react";
import "./Cart.scss";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Item({
  item,

  disabled,

  itemQuantity,
}) {
  let value = item.quantity;
  const [, setQuantity] = useState(value);
  console.log("check", item.pname);

  return (
    <section className="cart">
      <div className="cart-left">
        <img src={item.img} alt="" />
      </div>
      <div className="cart-right">
        <h1>{item.pname}</h1>
        <p>${item.price}</p>
        <div className="cart-buttons">
          <div className="cart-edit">
            <button disabled={disabled}>-</button>
            <input type="text" value={itemQuantity} />
            <button disabled={disabled}>+</button>
          </div>
        </div>
      </div>
      {disabled === "disabled" ? (
        ""
      ) : (
        <p className="cart-delete">
          <DeleteForeverOutlinedIcon
            style={{ cursor: "pointer" }}
            fontSize="large"
            color="error"
            disabled={disabled}
          />
        </p>
      )}
    </section>
  );
}

export default Item;
