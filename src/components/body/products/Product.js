import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../redux/product/productSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productInfo);

  const [user, setUser] = useState("");
  const fullnameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [file, setFile] = useState(null);
  let toUpdateUser = { ...user, password: "" };

  const token = "";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullnameRef.current.value !== "") {
      toUpdateUser = {
        ...toUpdateUser,
        fullname: fullnameRef.current.value,
      };
    }
    if (usernameRef.current.value !== "") {
      toUpdateUser = { ...toUpdateUser, username: usernameRef.current.value };
    }
    if (emailRef.current.value !== "") {
      toUpdateUser = {
        ...toUpdateUser,
        email: emailRef.current.value,
      };
    }
    if (file !== null) {
      toUpdateUser = {
        ...toUpdateUser,
        profileDisplay: file,
      };
    }

    axios
      .put(
        `http://localhost:4001/api/user/update`,
        toUpdateUser,

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
        setUser(res.data.ne);
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
          <h2>Settings</h2>

          <form
            className="updated-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="form-contents">
              <div className="updated-left">
                <div>
                  <label>Product Name</label>
                  <input
                    ref={fullnameRef}
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
                    ref={usernameRef}
                    type="text"
                    placeholder="Product Description"
                    defaultValue={product.pDesc}
                  ></textarea>
                </div>
                <div>
                  <label>Price</label>
                  <input
                    ref={emailRef}
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
