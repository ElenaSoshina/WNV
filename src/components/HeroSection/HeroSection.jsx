import React, {useState} from 'react';
import styles from './HeroSection.module.css';
import passportImage from '../../assets/hero.webp';
import {FaFileAlt, FaLock, FaMoneyCheckAlt} from "react-icons/fa";
import Modal from "../Modal/Modal.jsx";
import '../../App.css'

export default function HeroSection() {
    const [isModalOpen, setModalOpen] = useState(false);


    return (
        <section className={styles.hero}>
            <div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>
                            <span className={styles.black}>Помощь в получении </span>
                            <span className={styles.pink}>РВП, ВНЖ, Гражданство РФ </span>
                            <span className={styles.black}>по Московской области (Одинцово, Подольск) — без лишних очередей, переплат и бюрократии. </span>
                            <span className={styles.black}>Уже </span>
                            <span className={styles.pink}>22 года</span>
                            <span className={styles.black}> работаем на Ваш результат.</span>
                        </h1>


                        <div className={styles.features}>
                            <div className={styles.featureItem}>
                                <FaFileAlt className={styles.icon}/>
                                <div>
                                    <strong>Полное сопровождение</strong><br/>
                                    <span>при подаче документов</span>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <FaMoneyCheckAlt className={styles.icon} />
                                <div>
                                    <strong>Поэтапная оплата /</strong><br/>
                                    <span>Рассрочка</span>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <FaLock className={styles.icon} />
                                <div>
                                    <strong>100%</strong><br/>
                                    <span>конфиденциальность</span>
                                </div>
                            </div>
                        </div>

                        <button className={styles.cta} onClick={() => setModalOpen(true)}>УЗНАТЬ СПОСОБЫ ОФОРМЛЕНИЯ</button>
                        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

                    </div>

                    <div className={styles.right}>
                        <div className={styles.badge}>
                            Каждый месяц мы сопровождаем десятки клиентов при оформлении РВП и ВНЖ
                        </div>
                        <img src={passportImage} alt="Паспорта" className={styles.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
