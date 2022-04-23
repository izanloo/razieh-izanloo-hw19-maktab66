import React, { useContext, useState } from 'react'
import {CheckLogin} from "../context/checkLogin";
import { useLocation, Navigate } from "react-router-dom";
import { Button } from '@mui/material';


export default function Dashbord() {
  const { nameUser, setNameuser } = useContext(CheckLogin);
  const { userLogin, setUserLogin } = useContext(CheckLogin);
  const [logOut,setLogout] = useState(false)
  const location = useLocation();

  if (userLogin ===false) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  function logoutUser(){
    setLogout(true)
  }
  if(logOut ===true) {
    return <Navigate to={"/"} state={true} />;
  }

  return (
    <>
      <h1>سلام{nameUser.length > 1 ? nameUser : ""}جان </h1>
      <h2>خوش اومدی</h2>
      <Button onClick={logoutUser}>Logout</Button>
    </>

  )
}
