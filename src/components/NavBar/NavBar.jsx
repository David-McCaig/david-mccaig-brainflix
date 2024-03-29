import "./NavBar.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import SearchLogo from "../../assets/Icons/search.svg";
import SearchFace from "../../assets/images/Mohan-muruge.jpg";
import ButtonUpload from "../../assets/Icons/upload.svg";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav">
            <NavLink to="/"><img src={BrainFlixLogo} className="nav__logo" alt="side profile of person"></img></NavLink>
            <div className="nav__container">
                <form className="nav__form">
                    <img src={SearchLogo} className="nav__form-logo" alt="search logo"></img>
                    <input type="text" placeholder="Search" className="nav__form-search" name="search"></input>
                </form>
                <img src={SearchFace} className="nav__form-image" alt="side profile of person"></img>
            </div>
            <NavLink to="/upload" className="button">
                <img src={ButtonUpload} className="button__icon" alt="upload icon"></img>
                <p className="button__text" href="./NavBar.jsx">upload</p>
            </NavLink>

            <img src={SearchFace} className="nav__form-image-desktop" alt="side profile of person"></img>
        </nav>

    );
}


export default NavBar;