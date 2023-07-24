import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productActions,
} from "../../../redux/product/productSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productInfo);
  console.log("clifff", product);
  //const [user, setUser] = useState("");
  const user = useSelector((state) => state.user.userData.user);
  const token = useSelector((state) => state.user.userData.token);
  console.log(token);
  const pnameRef = useRef("");
  const pDescRef = useRef("");
  const priceRef = useRef("");
  const [file, setFile] = useState(null);
  let toUpdateProduct = {
    _id: product.id,
    pname: product.pname,
    pDesc: product.pDesc,
    price: product.price,
    stockQuantity: product.stockQuantity,
    img: product.image,
  };

  const notifySuccess = (succ) => {
    toast.success(`🦄 ${succ}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyErr = (err) => {
    toast.success(`🦄 ${err}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if (pnameRef.current.value !== "") {
      toUpdateProduct = {
        ...toUpdateProduct,
        pname: pnameRef.current.value,
      };
    }
    if (pDescRef.current.value !== "") {
      toUpdateProduct = {
        ...toUpdateProduct,
        pDesc: pDescRef.current.value,
      };
    }
    if (priceRef.current.value !== "") {
      toUpdateProduct = {
        ...toUpdateProduct,
        price: priceRef.current.value,
      };
    }
    if (file !== null) {
      toUpdateProduct = {
        ...toUpdateProduct,
        img: file,
      };
    }
    console.log("cl", toUpdateProduct);
    axios
      .put(
        `http://localhost:4001/api/product/update`,
        toUpdateProduct,

        {
          headers: {
            authtoken: token,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            type: "formData",
          },
        }
      )
      .then((res) => {
        dispatch(productActions.setProducts(res.data));
        dispatch(getProducts());
        notifySuccess("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        notifyErr(err);
      });
  };

  return (
    <div className="product">
      <div className="product-top">
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(productActions.productClose());
          }}
        >
          <CancelPresentationIcon color="error" fontSize="large" />
        </div>
      </div>
      <div className="edit-product">
        <section className="settings">
          <h2>Product Detials</h2>

          <form
            className="updated-form"
            encType="multipart/form-data"
            onSubmit={handleUpdate}
          >
            <div className="form-contents">
              <div className="updated-left">
                <div>
                  <label>Product Name</label>
                  <input
                    ref={pnameRef}
                    type="text"
                    placeholder="Product Name"
                    defaultValue={product.pname}
                  />
                </div>
                <div>
                  <label>Product Description</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    data-min-rows="5"
                    ref={pDescRef}
                    type="text"
                    placeholder="Product Description"
                    defaultValue={product.pDesc}
                  ></textarea>
                </div>
                <div>
                  <label>Price</label>
                  <input
                    ref={priceRef}
                    type="text"
                    placeholder="Price"
                    defaultValue={product.price}
                  />
                </div>

                <div>
                  <label>Product Image</label>
                  <input
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    type="file"
                    name="profileDisplay"
                  />
                </div>
              </div>
              <div className="updated-right">
                <img src={product?.image} alt={product?.img} />
              </div>
            </div>
            <button type="submit">Update</button>
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </section>
      </div>
    </div>
  );
};

export default Product;
