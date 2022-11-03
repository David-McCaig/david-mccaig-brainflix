import "./NavBar.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import SearchLogo from "../../assets/Icons/search.svg";
import SearchFace from "../../assets/images/Mohan-muruge.jpg"
import ButtonUpload from "../../assets/Icons/upload.svg"


function NavBar() {    
    return (
            <nav className="nav">
                <img src={BrainFlixLogo} className="nav__logo" alt="side profile of person"></img> 
                <div className="nav__container">
                    <form className="nav__form">
                    <img src={SearchLogo} className="nav__form-logo" alt="search logo"></img>
                    <input type="text" placeholder="         Search" className="nav__form-search" name="search"></input>
                    </form>
                    <img src={SearchFace} className="nav__form-image" alt="side profile of person"></img>
                </div>

                <div className="button">
                    <img src={ButtonUpload} className="button__icon" alt="upload icon"></img>
                    <a className="button__text" href="./NavBar.jsx">upload</a>
                </div>
            </nav>

    );
}


export default NavBar;