import { Navigate } from "react-router-dom";

function Protected({user,role,children}){
    if(!user) return <Navigate to="/"/>;
    if(user!==role) return <Navigate to="/"/>;
    return children;
}

export default Protected;