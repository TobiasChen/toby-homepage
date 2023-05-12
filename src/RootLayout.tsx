import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";


const api_url = "https://api.tobias-chen.de/visitorCount"
const getVisitorCount = async(setVisitorCount: CallableFunction) => {
  fetch(api_url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status + ": " + response.statusText + " | Error thrown by call with body: " + response.body);
  })
  .then((responseJson) => {
    setVisitorCount(responseJson.Attributes.visits)
  })
  .catch((error) => {
    console.log(error)
  })
}




type ContextType = { title: String | "" };

function RootLayout() {
  const [visitorCount, setVisitorCount] = useState(0)
  useEffect(()=>{
    console.log("Use Effect called")
    getVisitorCount(setVisitorCount)
 },[]);

  function setTitle2(title: string){
    document.title = `${title} / Toby`
  }
  return (
    <div className="RootLayout bg-default-background text-default-color font-default-font flex justify-center items-center flex-col min-h-screen">
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
