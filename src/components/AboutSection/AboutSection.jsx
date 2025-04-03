import React from 'react';
import styles from './AboutSection.module.css';
import { FaBriefcase, FaUsers, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../App.css'

export default function AboutSection() {
    const stats = [
        {
            icon: <FaBriefcase />,
            number: '22',
            label: 'года работы'
        },
        {
            icon: <FaUsers />,
            number: '15',
            label: 'профессиональных сотрудников'
        },
        {
            icon: <FaFileAlt />,
            number: '200',
            label: 'документов ежемесячно'
        },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>О нас в цифрах</h2>

                <div className={styles.cards}>
                    {stats.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <div className={styles.number}>{item.number}</div>
                            <div className={styles.label}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
