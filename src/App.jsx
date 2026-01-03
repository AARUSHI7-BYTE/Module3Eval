import Login from "./login"
import Customer from "./Customerdashboard"
import Dashboard from "./Dashboard"
import Protected from "./Authenticated"
import { useState } from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App() {
  const [User, SetUser] = useState(null);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setUser={SetUser}/>}/>
      <Route path="/admin" element={<Protected user={User} role="admin">
        <Dashboard/>
      </Protected>}/>
      <Route path="/customer" element={<Protected user={User} role="customer">
        <Customer/>
      </Protected>}/>
      </Routes>
      </BrowserRouter>
    </>
  )

}
export default App
