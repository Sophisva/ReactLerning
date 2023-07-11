import React, { useState, useEffect }  from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Router1(){
    const navStyle = {
        backgroundColor: '#ced',
        padding: '7px',
        top: 0,
        width: '100%',
        zIndex: 9999,
      };

    const linkStyle = {
        display: 'inline-block',
        color: 'blue',
        textDecoration: 'none'
    }

    return(
        <BrowserRouter>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/products" style={linkStyle}>Products</Link>
                <Link to="/member" styte={linkStyle}>Member</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
            </nav>
        </BrowserRouter>
    )
}