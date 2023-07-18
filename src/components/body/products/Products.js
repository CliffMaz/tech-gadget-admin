import React, { useEffect } from "react";
import "./Products.scss";
//import Customer from "./Customer";
import ProductTable from "../Table/ProductTable";
import { getProducts } from "../../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "id", label: "Product ID", minWidth: 200 },

  {
    id: "pname",
    label: "Product name",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "pDesc",
    label: "Product Desc",
    minWidth: 20,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "stockQuantity",
    label: "Stock Quantity",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "img",
    label: "Product Image",
    minWidth: 30,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, fullname, username, email, role) {
  return { id, fullname, username, email, role };
}

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dispatch(getUsers());
  const products = useSelector((state) => state.product.products);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    navigate("/");
  }

  let productView = useSelector((state) => state.product.productView);

  useEffect(() => {
    dispatch(getProducts());
  });

  const filteredProducts = products.map((product) => {
    return {
      id: product._id,
      pname: product.pname,
      price: product.price,
      stockQuantity: product.stockQuantity,
      pDesc: product.pDesc,
      img: (
        <img style={{ width: "150px", height: "150px" }} src={product.img} />
      ),
    };
  });

  const rows = filteredProducts;

  return (
    <div className="customers">
      {productView && <img />}
      <h1>Products</h1>
      <ProductTable column={columns} row={rows} />
    </div>
  );
};

export default Products;
