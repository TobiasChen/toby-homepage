
import { ReactComponent as GithubSVG } from "../assets/github-mark.svg";

function Footer(){
    return (
    <div className="flex items-baseline h-16">
        <div className="flex flex-row items-center gap-2">
            <a href="https://github.com/TobiasChen/toby-homepage" target="_blank" className="flex items-center gap-1" >
                <GithubSVG className="fill-default-color" width="24" height="24" viewBox="0 0 100 100"/>
                <span className="inline-flex items-center min-h-full">code</span>
            </a>
            <span className="inline-flex items-center min-h-full">|</span>
            <span>Built 02 May 2023 </span>
        </div>
    </div>
    )
}

export default Footer;