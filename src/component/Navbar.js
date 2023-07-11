import React from "react";
import '../styles/navbar.css';
import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";
import { Calculator } from "./caculator";
import FormSearch from "./FormSearch";
import Login2 from "./Login2";

function Navbar() {
    
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-dark px-3 py-0">
        <a className="navbar-brand" href="">
          <img src="./logo192.png" height="65" alt="" />
        </a>
        <span className="navbar-brand text-info">React</span>
        <ul className="navbar-nav nav-pills  mx-4">
          <li className="nav-item ">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/product" className="nav-link" >Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Member" className="nav-link" >Member</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Menu List
            </a>
            <div className="dropdown-menu bg-light">
                <a className="dropdown-item" href="#">User</a>
                <a className="dropdown-item" href="#">Administrator</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="text-center m-3">
        <Routes>
          <Route path="/"  element={<Calculator/>} />
          <Route path="/product"  element={<FormSearch/>}/>
          <Route path="/member"  element={<div>Member</div>}/>
          <Route path="/login" element={<Login2/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navbar;
