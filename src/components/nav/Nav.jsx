import style from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
import logo_a from '../../assets/img/badge-a.svg';

function Nav() {

    const navigate = useNavigate();

    return(
        <nav className={style.navContainer}>

            <div className={style.navContent}>

                <div className={style.logo}>
                    <img className={style.icon} src={logo_a} alt="badge a" />
                    <p className={style.logoText}>DGM</p>
                </div>


                <div className={style.menu}>
                    <ul>
                        <li onClick={() => navigate('/home')}>
                            <a class="dropdown-item" href="" >Home</a>
                        </li>
                        <li onClick={() => navigate('/nosotros')}>
                            <a class="dropdown-item" href="" >Nosotros</a>
                        </li>
                        <li onClick={() => navigate('/servicios')}>
                            <a class="dropdown-item" href="" >Servicios</a>
                        </li>
                        <li onClick={() => navigate('./contacto')}>
                            <a class="dropdown-item" href="" >Contacto</a>
                        </li>
                    </ul>
                </div>  

            </div>          

        </nav>
    )

}


export default Nav;