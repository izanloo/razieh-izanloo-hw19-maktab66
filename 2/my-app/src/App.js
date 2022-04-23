import "./App.css";
import Header from "./components/Header";
import Context from "./context/checkLogin";
import { useState } from "react";
import Login from './pages/Login'
import Dashbord from './pages/Dashbord'
import { Routes, Route } from 'react-router-dom';
import Additem from "./components/Additem";
import Home from './pages/Home'
 
function App() {

  return (
    <>
      <Context>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login />} />
              <Route path="/Dashbord" element={<Dashbord/>}/>
              <Route path="/addItem" element={<Additem/>} />
          </Route>
        </Routes>
      </Context>
      
    </>
  );
}

export default App;
