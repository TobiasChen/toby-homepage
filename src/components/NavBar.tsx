import { Link } from "react-router-dom"
function NavBar(){
    return (
    <div className="flex items-end h-8">
        <div className="flex flex-row items-center gap-2">
            <span><Link to={"/"}>Home</Link></span>
            <span>|</span>
            <span><Link to={"/about"}>About</Link></span>
            <span>|</span>
            <span><Link to={"/contact"}>Contact</Link></span>
            <span>|</span>
            <span><Link to={"/challenge"}>Challenge</Link></span>
        </div>
    </div>
    )
}
export default NavBar;