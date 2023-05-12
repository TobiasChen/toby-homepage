import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";

export default function About(prop: { title: string }) {
  const setTitle: (title: string) => void = useOutletContext();
  useEffect(() => {
    setTitle(prop.title);
  }, []);

  return (
    <div className="main flex flex-col justify-center gap-4 grow max-w-5xl ml-12 mr-12">
      <p className=" text-5xl text-center mb-5 font-normal">Hey hey :D</p>
      <p className=" text-xl text-center mb-10">My name's Tobias Chen(more commenly Toby). I am a full-stack developer with a Bsc. in computer science and a strong interest in developer operations.</p>
      <p className=" text-xl text-center">Im currently a</p>
      <div className="text-center">    
        <ul className="text-xl text-left inline-block list-disc">
            <li>Fullstack Developer @ <a href="www.seitenbau.com" rel="noopener noreferrer" target="_blank">Seitenbau</a></li>
        </ul>
      </div>
      <p className=" text-xl text-center">I've previously been:</p>
      <div className="text-center">    
        <ul className="text-xl text-left inline-block list-disc">
            <li>Junior DevOps Enginer @ <a href="www.valtech-mobility.de" rel="noopener noreferrer" target="_blank">Valtech Mobility</a></li>
            <li>Junior Software Developer @ <a href="www.ida-sds.com" rel="noopener noreferrer" target="_blank">Intelligent Data Analytics</a></li>
        </ul>
      </div>
    </div>
  );
}
