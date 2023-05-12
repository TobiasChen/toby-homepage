import { useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Contact(prop: { title: string }) {
  const setTitle: (title: string) => void = useOutletContext();
  useEffect(() => {
    setTitle(prop.title);
  }, []);

  return (
    <div className="main flex flex-col justify-center gap-4 grow ml-4 mr-4">
      <p className=" text-5xl text-center mb-5 font-normal">Shoot me a message</p>
      <p className=" text-xl text-center">You can find me on <a href={"https://www.linkedin.com/in/tobias-chen-11b816214/"} rel="noopener noreferrer" target="_blank">linkedin</a></p>
      <p className=" text-xl text-center">or pop me an email:</p>
      <p className=" text-xl text-center">tobias[at]chen[.]de</p>
    </div>
  );
}
