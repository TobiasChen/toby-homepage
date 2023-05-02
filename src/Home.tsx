import { useState } from "react";
import "./App.css";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="Home bg-default-background text-default-font font-default-font flex justify-center items-center flex-col min-h-screen">
        <NavBar></NavBar>  
        <HomeContent></HomeContent> 
        <Footer></Footer>
    </div>
  );
}

export default Home;
