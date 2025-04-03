import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <h2 className={styles.contactTitle}>У вас остались вопросы?</h2>
            <p className={styles.contactSubtitle}>Свяжитесь с нами:</p>
            <form className={styles.contactForm}>
                <label htmlFor="name" className={styles.label}>Имя *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите ваше имя"
                    required
                    className={styles.input}
                />

                <label htmlFor="phone" className={styles.label}>Ваш номер телефона *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Введите номер телефона"
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.submitButton}>
                    ОСТАВИТЬ ЗАЯВКУ НА ОБРАТНЫЙ ЗВОНОК
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
