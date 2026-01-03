import { useState } from "react";

function Dashboard(){
    const[name,setname]=useState("");
    const[address,setaddress]=useState("");
    const[type,settype]=useState("");
    const[Parking,setParking]=useState("yes");
    const[Restraunt,setRestraunt]=useState([]);
 
    const handleadd=()=>{
        const newRestaurant={
            restaurantId: Date.now(),
            name,
            address,
            type,
            Parking,
            image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
        };
        const updated=[...Restraunt,newRestaurant];
        setRestraunt(updated);
        localStorage.setItem("restaurants");
        setname("");
        setaddress("");
    }
    return(
        <>
        <div style={{display:"flex", alignContent:"center",alignItems:"center", marginLeft:"600px"}}>
          <h1>Admin Dashboard</h1>
          </div>
          <div style={{marginLeft:"560px"}}>
          <input type="Search" placeholder="Search" />
          <select name="Types" id="">
            <option value="Northindian">North-indian</option>
          </select>
          <select name="" id="">
            <option value="Parking">Parking</option>
          </select>
          </div>

    <div style={{width:"400px", height:"240px", alignItems:"center", marginTop:"0px"}}>
        
        <h2>Add Restraunt</h2>
        <input type="text" placeholder="type restraurant name" value={name} onChange={(e)=>{setname(e.target.value)}} />
        <br />
        <input type="text" placeholder="type address" value={address} onChange={(e)=>{setaddress(e.target.value)}} />
        <br />
        <select name="" id="" onChange={(e)=>{settype(e.target.value)}}></select>
        <br />
        <select onChange={(e)=>{setParking(e.target.value)}}></select>
        <button onClick={handleadd}>Add</button>
    </div>
     </>
    )

}
export default Dashboard;