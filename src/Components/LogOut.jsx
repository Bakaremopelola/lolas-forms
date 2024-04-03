import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function LogOut() {

    let location = useLocation();
    return(
        <>


            
            <div className="Head">
           <li><NavLink to={"/"}> LogOut</NavLink></li>
           

           </div>


{/*             <div>{location.state.firstName}</div>
            <div>{location.state.lastName}</div>
            <div>{location.state.Email}</div>
            <div>{location.state.Password}</div> */}
            

        </>
    )
    
}
export default LogOut;