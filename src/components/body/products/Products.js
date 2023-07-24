import React, { useEffect } from "react";
import "./Products.scss";
//import Customer from "./Customer";
import ProductTable from "../Table/ProductTable";
import {
  getProducts,
  productActions,
} from "../../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import Product from "./Product";

const columns = [
  { id: "id", label: "Product ID", minWidth: 20 },

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
  {
    id: "action",
    label: "Actions",
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
  const productView = useSelector((state) => state.product.productView);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.map((product) => {
    return {
      id: product._id,
      pname: product.pname,
      price: product.price,
      stockQuantity: product.stockQuantity,
      pDesc: product.pDesc,
      image: product.img,
      img: (
        <img style={{ width: "150px", height: "150px" }} src={product.img} />
      ),
      action: (
        <>
          <EditIcon />
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(productActions.productOpen());
              dispatch(productActions.setProducts(product));
            }}
          >
            <DeleteForeverIcon color="error" />
          </div>
        </>
      ),
    };
  });

  const rows = filteredProducts;
  console.log("data n", rows);
  return (
    <div className="customers">
      {productView && <img />}
      <h1>Products</h1>
      <div className="product-btns">
        <div className="product-search">
          <input type="text" placeholder="Search" />
        </div>
        <Button variant="outlined" color="success">
          ADD NEW PRODUCT
        </Button>
      </div>
      <ProductTable column={columns} row={rows} />
      {productView && <Product />}
    </div>
  );
};

export default Products;
