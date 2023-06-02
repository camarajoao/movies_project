import "./Header.scss";

import logoMultiColor from "../../assets/logo/just-movies-color-on-transparent-background-multi-color.svg";
import logoYellow from "../../assets/logo/just-movies-color-on-transparent-background-yellow.svg";
import { Link } from "react-router-dom";
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="header">
            <div className="header__inner">
                <HeaderMenuButton theme={theme} />
                <Link to='/'><img className="header__logo" src={theme === 'light' ? logoMultiColor : logoYellow} alt="just movie logo" /></Link>
                <button className="mode-toggler" onClick={toggleTheme}>
                    <img src={theme === 'light' ? moon : sun} className="mode-toggler__image" alt="light and dark modes icon" />
                </button>
            </div>
            
        </header>
    )
}