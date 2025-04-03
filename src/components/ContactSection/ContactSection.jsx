import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import { sendMessageToTelegram } from '../../utils/telegramAPI.js'; // путь проверь

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: ''
    });

    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Проверка: если поле телефон — разрешаем только +7 и цифры
        if (name === 'phone') {
            if (!/^\+?\d{0,12}$/.test(value)) return;
        }

        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handlePhoneFocus = () => {
        if (!formData.phone.trim()) {
            setFormData((prev) => ({
                ...prev,
                phone: '+7'
            }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', phone: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, введите ваше имя';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите номер телефона';
            isValid = false;
        } else if (!/^\+7\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSending(true);

            try {
                await sendMessageToTelegram({
                    name: formData.name,
                    phone: formData.phone,
                });

                setSending(false);
                setSuccess(true);

                setTimeout(() => {
                    setSuccess(false);
                }, 3000);

                setFormData({ name: '', phone: '' });
            } catch (error) {
                console.error("Ошибка при отправке:", error);
                setSending(false);
                alert("Произошла ошибка при отправке заявки. Пожалуйста, позвоните нам напрямую.");
            }
        }
    };

    return (
        <section className={styles.contactSection}>
            <h2 className={styles.contactTitle}>У вас остались вопросы?</h2>
            <p className={styles.contactSubtitle}>Свяжитесь с нами:</p>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor="name" className={styles.label}>Имя *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

                <label htmlFor="phone" className={styles.label}>Ваш номер телефона *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onFocus={handlePhoneFocus}
                    onChange={handleChange}
                    placeholder="Введите номер телефона"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}

                {success && <p className={styles.successMessage}>Спасибо! Ваша заявка отправлена.</p>}

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={sending}
                >
                    {sending ? 'ОТПРАВКА...' : 'ОСТАВИТЬ ЗАЯВКУ НА ОБРАТНЫЙ ЗВОНОК'}
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
