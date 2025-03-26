import { useState } from "react";
import { LOGO_LINK } from "../config/constants";


const Header = () => {
    const [sbtnName, setSbtnName]=useState("logout");
    const updateBtnName = () => {
         (sbtnName==="login")? setSbtnName("logout"):setSbtnName("login");
    };
    
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_LINK}></img>
        </div>
        <div className="nav-items">
        <ul >

            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        <button onClick={()=> updateBtnName()}>{sbtnName}</button>
        </div>
    </div>
    );

    };


export default Header;