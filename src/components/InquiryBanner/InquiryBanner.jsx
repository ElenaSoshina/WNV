import React from 'react';
import styles from './InquiryBanner.module.css';
import image from '../../assets/migcenter.jpg'; // изображение справа
import '../../App.css'
export default function InquiryBanner({ onOpenModal }) {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.right}>
                        <img src={image} alt="Консультант" />
                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.title}>
                            Не уверены, с чего начать оформление РВП, ВНЖ или Гражданство РФ?
                        </h2>
                        <p className={styles.subtext}>
                            Оставьте заявку — наш юрист бесплатно проконсультирует вас и подберёт оптимальное решение.
                        </p>

                        <button className={styles.button} onClick={onOpenModal}>ОСТАВИТЬ ЗАЯВКУ</button>
                    </div>

                </div>
            </div>
        </section>
    );
}
