
import React from "react";

export function Header(props){
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        textDecorationa: 'none'
    }

    return (
        <div style={{backgroundColor: '#ccc'}}>
            <a href=" " style={aStyle}>Home</a> |&nbsp;
            <a href=" " style={aStyle}>React</a> |&nbsp;
            <a href=" " style={aStyle}>React Native</a> |&nbsp;
            <a href=" " style={aStyle}>{props.menu}</a> |&nbsp;
        </div>
    )
}

export function Context(){
    return (


        <div>
            <center>
                <h2>Hello <br/>React&React Native</h2>
            </center>
            <br/>
            <br/>
            <br/>
        </div>
    )
}


export function Footer(){
    return (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            &copy; {new Date().getFullYear()} <br/> Creact By :: Sophisva.Ph
        </div>
    )
}