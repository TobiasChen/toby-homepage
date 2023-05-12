import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

type ContextType = { title: String | "" };

function RootLayout() {
  const url = "https://api.tobias-chen.de/visitorCount"
  const [visitorCount, setVisitorCount] = useState(0)
  useEffect(()=>{
    const getVisitorCount = async() => {
      const res = await fetch(url);
      console.log(res)
      console.log(await res.json())
      const data : {Attributes :{id: string, visits: number}} = await res.json();
      console.log(data)
      setVisitorCount(data.Attributes.visits)
      
    }
    getVisitorCount()
 },[]);

  function setTitle2(title: string){
    document.title = `${title} / Toby`
  }
  return (
    <div className="Home bg-default-background text-default-color font-default-font flex justify-center items-center flex-col min-h-screen">
      <NavBar></NavBar>
      <Outlet context={setTitle2}></Outlet>
      <Footer visitorCount={visitorCount}></Footer>
    </div>
  );
}
export function setTitle(){
  return useOutletContext<ContextType>();
}
export default RootLayout;
