import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import  bonnie1920Jpeg from "./assets/resized/bonnie-1920.jpg"
import  bonnie1920Webp from "./assets/resized/bonnie-1920.webp"
import  bonnie1280Jpeg from "./assets/resized/bonnie-1280.jpg"
import  bonnie1280Webp from "./assets/resized/bonnie-1280.webp"
import  bonnie640Jpeg from "./assets/resized/bonnie-640.jpg"
import  bonnie640Webp from "./assets/resized/bonnie-640.webp"
import  bonnie320Jpeg from "./assets/resized/bonnie-320.jpg"
import  bonnie320Webp from "./assets/resized/bonnie-320.webp"
import original from "./assets/bonnie.jpg"

function Home(prop: {title: string}){

    const setTitle: (title: string) => void = useOutletContext();
    useEffect(() => {
      setTitle(prop.title);
    }, []);


    return (
        <div className="main flex flex-col justify-center  grow ">
        <span className="flex items-center flex-row gap-5">
          <div className="flex items-center min-w-fit">         
            <h1 className=" font-bold text-5xl text-center bg-opacity-30 ">
              Greetings✌️<br/> from Bonnie🐱<br/>
              and welcome to <br/>
               Toby's page
            </h1>
          </div>
          <picture className="flex w-2/3 items-center flex-auto">
            <source type="image/webp" srcSet={`${bonnie1920Webp} 1920w, ${bonnie1280Webp} 1280w, ${bonnie640Webp} 640w, ${bonnie320Webp} 320w`}></source>
            <source type="image/jpg" srcSet={`${bonnie1920Jpeg} 1920w, ${bonnie1280Jpeg} 1280w, ${bonnie640Jpeg} 640w, ${bonnie320Jpeg} 320w`}></source>
            <img src={original} loading="lazy" className="w-96 rounded-xl "></img>
          </picture>
        </span>
      </div>
    )
}

export default Home;
