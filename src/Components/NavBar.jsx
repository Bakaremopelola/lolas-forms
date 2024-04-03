import { NavLink } from "react-router-dom" 
 import Button from "./Button" 
import Home from "./Home"
import "../Css/NavBar.css"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
   
   
   function NavBar() {
    return(
        <>
        <div className="Header">
            <div className="NL">
            <div className="MN">
                <h1>3ple <span style={{color:"hotpink",fontFamily:"italics",fontSize:BigInt}}>'M'</span></h1>
            </div>
            <div className="Logo">
                <img src="" alt="" />

            </div>
            </div>

            <div className="Header1">
            <div className="Head">
           <li><NavLink to={"/"}> Home</NavLink></li>
           
           <li><NavLink to={"/About"}>About</NavLink></li>
           
           <li><NavLink to={"/Settings"}>Settings</NavLink></li>
         
           <li><NavLink to={"/Contacts"}>Contacts</NavLink></li>
           
           </div>
           <div className="btn">
            <NavLink to={"/LogIn"}><button type="submit">LogIn</button></NavLink>
              
           </div>
           </div>
           </div>
        </>

    )
    
}

export default NavBar