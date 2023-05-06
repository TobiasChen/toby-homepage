import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

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
            <source type="image/webp" srcSet="src/assets/resized/bonnie-1920.webp 1920w, src/assets/resized/bonnie-1280.webp 1280w, src/assets/resized/bonnie-640.webp 640w, src/assets/resized/bonnie-320.webp 320w"></source>
            <source type="image/jpg" srcSet="src/assets/resized/bonnie-1920.jpg 1920w, src/assets/resized/bonnie-1280.jpg 1280w, src/assets/resized/bonnie-640.jpg 640w, src/assets/resized/bonnie-320.jpg 320w"></source>
            <img src="src/assets/bonnie.jpg" loading="lazy" className="w-96 rounded-xl "></img>
          </picture>
        </span>
      </div>
    )
}

export default Home;
