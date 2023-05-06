
import { Link } from "react-router-dom";
import { ReactComponent as GithubSVG } from "../assets/github-mark.svg";

function Footer(){
    return (
    <div className="flex items-baseline h-8">
        <div className="flex flex-row items-center gap-2">
            <a href="https://github.com/TobiasChen/toby-homepage" rel="noopener noreferrer" target="_blank" className="flex items-center gap-1" >
                <GithubSVG className="fill-default-color" width="24" height="24" viewBox="0 0 100 100"/>
                <span className="inline-flex items-center min-h-full">code</span>
            </a>
            <span className="inline-flex items-center min-h-full">|</span>
            <span>Built 02 May 2023 </span>
            <span className="inline-flex items-center min-h-full">|</span>
            <p>Tobias Chen</p>
            <span className="inline-flex items-center min-h-full">|</span>
            <p><Link to={"/privacy"}>Privacy policy</Link></p>
        </div>
    </div>
    )
}

export default Footer;