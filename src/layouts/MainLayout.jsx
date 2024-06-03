import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const MainLayout = () => {
  return ( 
    <>
    <Navbar />
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLayout