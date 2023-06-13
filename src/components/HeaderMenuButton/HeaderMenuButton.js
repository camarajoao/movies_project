//child of Header
import React, { useState } from 'react';
import "./HeaderMenuButton.scss";
import menuIconBlack from "../../assets/icons/menu-black.svg";
import menuIconYellow from "../../assets/icons/menu-yellow.svg";
import SideBar from "../SideBar/SideBar";

function HeaderMenuButton({ theme }) {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(true);

    const closeSidebar = () => setSidebar(false);

    return (
        <>
            <button className="header__menu" onClick={showSidebar}>
                <img src={theme === 'light' ? menuIconBlack : menuIconYellow} className="header__menu__icon" alt='menu icon' />
            </button>
            <SideBar sidebar={sidebar} theme={theme} closeSidebar={closeSidebar} />
        </>
    )
}

export default HeaderMenuButton