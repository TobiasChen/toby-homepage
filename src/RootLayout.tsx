import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

type ContextType = { title: String | "" };

function RootLayout(prop: {visitorCount: number}) {
  function setTitle2(title: string){
    document.title = `${title} / Toby`
  }
  return (
    <div className="Home bg-default-background text-default-color font-default-font flex justify-center items-center flex-col min-h-screen">
      <NavBar></NavBar>
      <Outlet context={setTitle2}></Outlet>
      <Footer visitorCount={prop.visitorCount}></Footer>
    </div>
  );
}
export function setTitle(){
  return useOutletContext<ContextType>();
}
export default RootLayout;
