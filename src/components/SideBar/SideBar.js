import "./SideBar.scss";
import { Link } from "react-router-dom";

import logoMultiColor from "../../assets/logo/just-movies-color-on-transparent-background-multi-color.svg";
import logoYellow from "../../assets/logo/just-movies-color-on-transparent-background-yellow.svg";
import closeIconBlack from "../../assets/icons/close-black.svg";
import closeIconYellow from "../../assets/icons/close-yellow.svg";
import searchIconSilver from '../../assets/icons/search-silver.svg';
import searchIconBlack from '../../assets/icons/search-black.svg';


function SideBar({ sidebar, showSidebar, theme }) {

    return (
        <div className={sidebar ? "sidebar active" : "sidebar"} >
            <div className="sidebar__header">
                <Link to='/'><img className="sidebar__logo" src={theme === 'light' ? logoMultiColor : logoYellow} alt="just movie logo" /></Link>
                <button className="sidebar__close-button" onClick={showSidebar}>
                    <img className="sidebar__close-button__icon" src={theme === 'light' ? closeIconBlack : closeIconYellow} alt="close button" />
                </button>
            </div>
            <div className="sidebar__search">
                <input className="sidebar__search-input" type="search" placeholder="Search movie" />
                <button className="sidebar__search-icon" type="submit">
                    <img src={theme === 'light' ? searchIconBlack : searchIconSilver} alt="search-icon" className="sidebar__search-icon__icon" />
                </button>
            </div>
        </div >
    )
}

export default SideBar