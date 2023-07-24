import React, {useState} from 'react';
import "./Header.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import store from "../../redux/store/store";
import { menuActions } from "../../redux/menu/menuSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { userActions } from '../../redux/user/userSlice';

const Header = () => {

  const dispatch =useDispatch();
  const navigate= useNavigate();
const user = useSelector((state)=> state.user.userData.user)
const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
  const handleOpen =()=>{if(isLoggedIn){
            dispatch(menuActions.open(!store.getState().menu.opened))
          }else{
            navigate("/");
          }
    
  }
  return (
    <div className='header'>
        <div className='menu-icon' onClick={(e)=> { 
          e.preventDefault();
          
          handleOpen()
          } } >
            <MenuOutlinedIcon/>
        </div>
        <div className='menu-search'>
            <input type='text' placeholder='Search'/>
            <button>Search</button>
        </div>
        <div className='menu-profile'>
          { isLoggedIn ?
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
                      to="/settings"
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
                          dispatch(menuActions.open(false));
                          dispatch(userActions.logOut());
                
                          navigate("/");
                        }}
                      >
                        <LoginOutlinedIcon />
                        Log Out
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              :<h3>Login</h3>}
        </div>
    </div>
  )
}

export default Header