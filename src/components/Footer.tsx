
import { Link } from "react-router-dom";
import { ReactComponent as GithubSVG } from "../assets/github-mark.svg";

function Footer(prop: {visitorCount: number}){
    return (
    <div className="flex items-baseline h-12 md:h-10 sm:h-8 ml-4 mr-4">
        <div className="flex flex-row items-center gap-2">
            <a href="https://github.com/TobiasChen/toby-homepage" rel="noopener noreferrer" target="_blank" className="flex items-center gap-1" >
                <GithubSVG className="fill-default-color" width="24" height="24" viewBox="0 0 100 100"/>
                <span className="md:inline-flex items-center min-h-full hidden">code</span>
            </a>
            <span className="inline-flex items-center min-h-full">|</span>
            <span className="hidden md:inline">Built: 02 May 2023 </span>
            <span className="inline md:hidden">02/05/2023 </span>
            <span className="items-center min-h-full hidden md:inline-flex">|</span>
            <p className="hidden md:inline">Tobias Chen</p>
            <span className="inline-flex items-center min-h-full">|</span>
            <p>Visits: {prop.visitorCount}</p>
            <span className="inline-flex items-center min-h-full">|</span>
            <p><Link to={"/privacy"}>Privacy policy</Link></p>
        </div>
    </div>
    )
}

export default Footer;