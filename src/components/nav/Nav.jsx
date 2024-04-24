import style from './Nav.module.css';
import { useNavigate } from 'react-router-dom';

function Nav() {

    const navigate = useNavigate();

    return(
        <nav className={style.navContainer}>

            <div className={style.logo}>
                logo
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

        </nav>
    )

}


export default Nav;