import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    &copy; 2023 www.painkra.com. All rights reserved. | Created with Next.js
                </p>
                <p className={styles.footerText}>
                    Website designed by <a href="#" className={styles.footerLink}>Deepak Painkra</a>
                </p>
            </footer>
        </div>
    )
}

export default Footer