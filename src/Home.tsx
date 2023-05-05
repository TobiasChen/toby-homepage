import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import humanFace from "./assets/bonnie.jpg";

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
              Hello✌️<br/> from Toby
            </h1>
          </div>
 
          <picture className="flex w-2/3 items-center flex-auto">
            <img src={humanFace} className="w-96 rounded-xl "></img>
          </picture>
        </span>
      </div>
    )
}

export default Home;
