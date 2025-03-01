import Link from 'next/link'
import { useState } from "react";
import styles from '../styles/Navbar.module.css'
export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <p className={styles.navlogo}>Painkra</p>
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/' >
                            <p className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</p>
                        </Link>

                    </li>
                    <li className={styles.navitem}>
                        <Link href='/tech'>
                            <p className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Tech</p>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/mobile' >
                            <p className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Mobile</p>
                        </Link>
                    </li>

                    <li className={styles.navitem}>
                        <Link href='/computer' >
                            <p className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Computer</p>
                        </Link>
                    </li>
                    
                    <li className={styles.navitem}>
                        <Link href='/contact'>
                            <p className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact</p>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </header>
        {children}

    </>
}