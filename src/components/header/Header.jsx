import React, {useState} from 'react';
import "./Header.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import store from "../../redux/store/store";
import { menuActions } from "../../redux/menu/menuSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Header = () => {

  const dispatch =useDispatch();
const user = useSelector((state)=> state.user.userData)

  const handleOpen =()=>{
    dispatch(menuActions.open(!store.getState().menu.opened))
  }
  return (
    <div className='header'>
        <div className='menu-icon' onClick={(e)=> { 
          e.preventDefault();
          handleOpen()} } >
            <MenuOutlinedIcon/>
        </div>
        <div className='menu-search'>
            <input type='text' placeholder='Search'/>
            <button>Search</button>
        </div>
        <div className='menu-profile'>
        <div className="loggedInUser">
                <img src={user?.profileDisplay} alt="" />
                Hi, {user.username}
                <div className="profil">
                  <div className="dp">
                    <img src={user.profileDisplay} alt="" />
                    <div>
                      <p>{user.fullname}</p>
                      <p className="fname">{user.role}</p>
                    </div>
                  </div>
                  <div className="logout-btns">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#39a537",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                      to="/profile/orders"
                    >
                      <p>
                        <ManageAccountsOutlinedIcon />
                        My Account
                      </p>
                    </Link>

                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#39a537",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                      to="/"
                    >
                      <p
                        onClick={(e) => {
                          e.preventDefault();
                          //setUser((prev) => (prev = undefined));
                          //localStorage.clear();
                        }}
                      >
                        <LoginOutlinedIcon />
                        Log Out
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Header