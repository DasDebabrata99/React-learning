import { useState } from "react";
import { LOGO_LINK } from "../config/constants";
import { Link } from "react-router-dom";
import useConnectivityStatus from "../config/useConnectivityStatus";


const Header = () => {
    const [sbtnName, setSbtnName]=useState("logout");
    const updateBtnName = () => {
         (sbtnName==="login")? setSbtnName("logout"):setSbtnName("login");
    };
    const onlineStatus = useConnectivityStatus();
    
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_LINK}></img>
        </div>
        <div className="nav-items">
        <ul >
            <li>Online Status: {onlineStatus? <>&#x2705;</> : <>&#128308;</>}</li>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/contact">Contact Us</Link></li> */}
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
        </ul>
        <button onClick={()=> updateBtnName()}>{sbtnName}</button>
        </div>
    </div>
    );

    };


export default Header;