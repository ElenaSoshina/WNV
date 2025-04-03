import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import clsx from 'clsx';



export default function Header({ onOpenModal}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <Link to="/index.html">
                        <span className={styles.logoVisa}>MIG</span>
                        <span className={styles.logoLand}>MOS</span>
                    </Link>
                </div>

                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Открыть меню"
                >
                    <span/>
                    <span/>
                    <span/>
                </button>

                <div className={clsx(styles.menu, menuOpen && styles.menuOpen)}>

                    <div className={styles.contact}>
                        <a href="tel:+7 (495) 517-10-80" className={styles.phone}>
                            +7 (494) 517-10-80
                        </a>
                        <button className={styles.button} onClick={() => {
                            setMenuOpen(false);
                            onOpenModal();
                        }}>Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
