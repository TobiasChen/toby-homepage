import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom"
function RootLayout(){
    return (
    <div className="Home bg-default-background text-default-color font-default-font flex justify-center items-center flex-col min-h-screen">
      <NavBar></NavBar> 
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    )
}

export default RootLayout;
