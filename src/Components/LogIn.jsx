 import NavBar from "./NavBar"; 
 import "../Css/Home.css";
 import { useNavigate } from "react-router-dom";
import { useState } from "react";
 
  
  
  
 
  
  
   function LogIn() {

      let navigate = useNavigate()
      const [firstName, setFirstName] = useState("");
     
      const [LastName, setLastName] = useState('');
   
      const [Email, setEmail] = useState('');
       
      const [Password, setPassword] = useState('');
    
/*       const handleChangeLogIn = () => {
        (firstName&&LastName&&Email&&Password)==="" ? alert("input your login details") : 
      } */
    
         
    return(
        <>
         <NavBar/>
         
         <form>
           
           <input type="text" name="name"   placeholder="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
         <br />
           <input type="text" name="name" placeholder="LastName" value={LastName} onChange={(e)=>setLastName(e.target.value)} />
         <br />
           <input type="text" name="name" placeholder="Email"  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
         <br />
           <input type="text" name="name" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
          <br /><br />
            <button onClick={()=>{navigate('/LogOut', {replace:true, state:{firstName,LastName,Email,Password}})}}>click me</button>
        </form>

        </>
    )
    
}
export default LogIn;