import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.jpg"
import { GoHeartFill } from "react-icons/go";
import { TbMenu4 } from "react-icons/tb";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  return (
    <header>
             <div className="inner-row">
                         <div className="header-content">
                                     <Link to={"/"} className="logo">
                                                <img src={logo} alt="" />
                                      </Link>
                                      <nav>
                                              <ul>
                                                       <li><NavLink  to={"/"}>Home</NavLink></li>
                                                       <li><NavLink to={"/who-we-are"}>Who We Are</NavLink></li>
                                                       <li><NavLink to={"/what-we-do"}>What We Do</NavLink></li>
                                                       <li><NavLink to={"/articles"}>Articles</NavLink></li>
                                                       <li><NavLink to={"/get-in-touch"}>Contact Us</NavLink></li>
                                              </ul>
                                      </nav>
                                      <div className="header-action">
                                                <Link to={"/donate-today"}>Donate Today <span><GoHeartFill /></span></Link>

                                                <span className="menu-btn" onClick={() => setSidebarStatus(true)}><TbMenu4 /></span>
                                      </div>
                         </div>
             </div>
    </header>
  )
}

export default Header