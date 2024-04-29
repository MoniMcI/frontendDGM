import style from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../../ThemeContext.jsx';
import logo_a from '../../assets/img/badge-a.svg';
import light_switch from '../../assets/img/theme-switcher-dark.svg';
import dark_switch from '../../assets/img/theme-switcher-light.svg';
import { useState } from 'react';

function Nav({ toggleTheme }) {

    const navigate = useNavigate();
    const [theme, setTheme] = useState('light'); /* establezco tema claro*/

    const handleToggleTheme = () => {
        // Cambiar tema en el onchange del switch
        setTheme(theme === 'light' ? 'dark' : 'light');
        toggleTheme();
    };    

    return(
        <nav className={style.navContainer}
            style={{
                backgroundColor: theme === 'dark' ? 'var(--bgThemeDarkNav)' : 'var(--bgThemeLightNav)',
                color: theme === 'dark' ? 'var(--textThemeDark)' : 'var(--textThemeLight)'
            }}>

            <div className={style.navContent}>

                <div className={style.logo}>
                    <img className={style.icon} src={logo_a} alt="badge a" />
                    <p className={style.logoText}>DGM</p>
                </div>


                <div className={style.menu}>
                    <ul>
                        <li onClick={() => navigate('/home')}>
                            <a className="dropdown-item" href="" >Home</a>
                        </li>
                        <li onClick={() => navigate('/nosotros')}>
                            <a className="dropdown-item" href="" >Nosotros</a>
                        </li>
                        <li onClick={() => navigate('/servicios')}>
                            <a className="dropdown-item" href="" >Servicios</a>
                        </li>
                        <li onClick={() => navigate('./contacto')}>
                            <a className="dropdown-item" href="" >Contacto</a>
                        </li>
                    </ul>
                </div>  

            </div>          

            {/* Interruptor de tema */}
            <div className={style.themeSwitch}>
                <input
                    type="checkbox"
                    id="themeSwitch"
                    name="theme-switch"
                    className={style.themeSwitch__input}
                    onChange={handleToggleTheme}
                />
                <label htmlFor="themeSwitch">
                    <img
                        src={light_switch}
                        alt=""
                        className={`${style.lightImage} light-image ${theme === 'dark' ? style.hidden : ''}`}
                    />
                    <img
                        src={dark_switch}
                        alt=""
                        className={`${style.darkImage} dark-image ${theme === 'light' ? style.hidden : ''}`}
                    />
                </label>
            </div>

        </nav>
    )

}


export default Nav;