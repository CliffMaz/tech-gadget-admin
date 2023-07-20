import React, { useContext, useRef, useState } from "react";
import "./Settings.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/user/userSlice";
import { Navigate } from "react-router-dom";

function Settings() {
  const fullnameRef = useRef("");
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [file, setFile] = useState(null);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData.user);
  const token = useSelector((state) => state.user.userData.token);
  let toUpdateUser = { ...user, password: "" };

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
        dispatch(userActions.updateUser(res.data.ne));
        //setUser(res.data.ne);
        notifySuccess("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        notifyErr(err);
      });
  };

  return (
    <section className="settings-b">
      <h2>Settings</h2>

      <form
        className="update-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="form-content">
          <div className="update-left">
            <div>
              <label>Fullname</label>
              <input ref={fullnameRef} type="text" placeholder="Fullname" />
            </div>
            <div>
              <label>Username</label>
              <input ref={usernameRef} type="text" placeholder="Username" />
            </div>
            <div>
              <label>Email</label>
              <input ref={emailRef} type="text" placeholder="Email" />
            </div>

            <div>
              <label>New Password</label>
              <input ref={passwordRef} type="text" placeholder="New Password" />
            </div>
            <div>
              <label>Confirm Password</label>
              <input type="text" placeholder="Comfirm Password" />
            </div>
            <div>
              <label>Display Picture</label>
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                type="file"
                name="profileDisplay"
              />
            </div>
          </div>
          <div className="update-right">
            <img src={user?.profileDisplay} alt={user?.username} />
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
  );
}

export default Settings;
