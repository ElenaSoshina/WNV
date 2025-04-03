import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import clsx from 'clsx';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

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
                
                <div className={styles.headerRight}>
                    <div className={styles.topSocialButtons}>
                        <a href="https://wa.me/+79255171080" className={styles.socialButton}>
                            <FaWhatsapp className={`${styles.socialIcon} ${styles.whatsappIcon}`} />
                            <span className={styles.socialText}>Менеджер</span>
                        </a>
                        <a href="https://t.me/+79255171080" className={styles.socialButton}>
                            <FaTelegram className={`${styles.socialIcon} ${styles.telegramIcon}`} />
                            <span className={styles.socialText}>Менеджер</span>
                        </a>
                    </div>

                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Открыть меню"
                    >
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </div>

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
