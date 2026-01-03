import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}){
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const navigate=useNavigate();
    const handlelogin=()=>{
        if(Email==="admin@gmail.com" && Password==="admin1234"){
            setUser("admin");
            navigate("/admin");
        } 
        else if(Email==="customer@gmail.com" && Password==="customer1234"){
            setUser("customer");
            navigate("/customer")
        }
        else{
            alert("wrong Email/Password ");
        }
    }

    return(
        <div style={{width:"300px"} }>
            <h2>Login Page</h2>
            <input type="text" placeholder="Enter your email" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <br />
            <input type="password" placeholder="Enter your password" onChange={(e)=>{
                setPassword(e.target.value)
            }} />
            <br />
            <button onClick={handlelogin}>Login</button>
        </div>
    )

}
export default Login;
