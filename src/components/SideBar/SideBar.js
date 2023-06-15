import "./SideBar.scss";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from 'react';

import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch"

import logoMultiColor from "../../assets/logo/just-movies-color-on-transparent-background-multi-color.svg";
import logoYellow from "../../assets/logo/just-movies-color-on-transparent-background-yellow.svg";
import closeIconBlack from "../../assets/icons/close-black.svg";
import closeIconYellow from "../../assets/icons/close-yellow.svg";


function SideBar({ sidebar, closeSidebar, theme }) {

    const myRef = useRef(null);

    const [sidebarSearchRoot, setSidebarSearchRoot] = useState(null);

    useEffect(() => {
        setSidebarSearchRoot(myRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sidebarSearchRoot]);


    return (
        <div className={sidebar ? "sidebar active" : "sidebar"} >
            <div className="sidebar__header">
                <Link to='/'><img className="sidebar__logo" src={theme === 'light' ? logoMultiColor : logoYellow} alt="just movie logo" onClick={closeSidebar} /></Link>
                <button className="sidebar__close-button" onClick={closeSidebar}>
                    <img className="sidebar__close-button__icon" src={theme === 'light' ? closeIconBlack : closeIconYellow} alt="close button" />
                </button>
            </div>
            <div className="sidebar__autocomplete" ref={myRef}>
                {sidebarSearchRoot ? < AutocompleteSearch theme={theme} /> : null}
            </div>
        </div >
    )
}

export default SideBar