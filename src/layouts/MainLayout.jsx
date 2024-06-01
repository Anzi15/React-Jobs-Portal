import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return ( 
    <>
    <Navbar />
    <Outlet/>
    </>
  )
}

export default MainLayout