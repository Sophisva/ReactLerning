import React from "react";
import { BrowserRouter, NavLink, Route, Router, Routes, Switch} from "react-router-dom";
import MessageBox from "./state-Fn";
import '../styles/navbar.css';

export default function Router2() {
    return(
        
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" 
                    className={({ isActive }) => isActive? "active menu active_menu":'menu'}
                    exact="true"  
                >Home
                </NavLink>&nbsp;&nbsp;
                <NavLink to="/products"
                    className={({ isActive }) => isActive? "active menu active_menu":'menu'}
                    exact="true"  
                >Products
                </NavLink>&nbsp;&nbsp;
                <NavLink to="/member"
                    className={({ isActive }) => isActive? "active menu active_menu":'menu'}
                    exact="true"  
                >Member
                </NavLink>&nbsp;&nbsp;
                <NavLink to="/contact"
                    className={({ isActive }) => isActive? "active menu ":'menu'}
                    exact="true"
                >Contact
                </NavLink>&nbsp;&nbsp;
            </nav>

                <Routes>
                    <Route path="/" element={<p>TEST HOME PAGE</p>} />
                    <Route path="/products" element={<MessageBox />} />
                    <Route element={
                        <div>
                        <h1>Error: 500 not found </h1>
                        <h2>Hi มามั้ย</h2>
                        </div>
                        } />
                </Routes> 

            
        </BrowserRouter>

    )
}
