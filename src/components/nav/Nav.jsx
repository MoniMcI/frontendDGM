import style from './Nav.module.css';

function Nav() {

    return(
        <nav className={style.navContainer}>

            <div className={style.logo}>
                logo
            </div>


            <div className={style.menu}>
                <ul>
                    <li>
                        <a class="dropdown-item" href="comingsoon.html">Home</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="comingsoon.html">Nosotros</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="comingsoon.html"> Servicios</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="comingsoon.html">Contacto</a>
                    </li>
                </ul>
            </div>            

        </nav>
    )

}


export default Nav;