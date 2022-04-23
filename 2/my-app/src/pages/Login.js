import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckLogin } from "../context/checkLogin";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setUserLogin } = useContext(CheckLogin);
  const { nameUser, setNameuser } = useContext(CheckLogin);
  const database = [
    {
      name: "razieh",
      email: "razieh@gmail.com",
      password: "1234"
    },
    {
      name: "razieh2",
      email: "izanloo@gmail.com",
      password: "1234"
    }
  ];
  const handelSubmit = (event) => {
    event.preventDefault();
    let { enterdEmail, password } = document.forms[0];
    const userData = database.find((user) => user.email === enterdEmail.value);
    if (userData) {
      if (userData.password !== password.value) {
        alert("پسورد وارد شده اشتباه است")
      } else {
        setUserLogin(true);
        navigate("/Dashbord", { state: "wellcome !", replace: true });
        setNameuser(userData.name)
      }
    } else {
      alert("ایمیل وارد شده وجود ندارد")
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form>

        <div>
          <TextField id="outlined-text" label="email" name="enterdEmail" type="text" />
        </div>
        <div>
          <TextField id="outlined-text" label="password" name="password" type="password" />

        </div>

        <br />
        <Button onClick={handelSubmit} variant="contained" color="success">
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
