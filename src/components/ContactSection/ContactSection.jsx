import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });
    
    const [errors, setErrors] = useState({
        name: '',
        phone: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Очищаем ошибку при вводе
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
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
        } else if (!/^(\+7|8)[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(formData.phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
            isValid = false;
        }
        
        setErrors(newErrors);
        return isValid;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Отправка формы
            console.log('Форма отправлена:', formData);
            // Сбрасываем форму после отправки
            setFormData({ name: '', phone: '' });
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
                    onChange={handleChange}
                    placeholder="Введите номер телефона"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}

                <button type="submit" className={styles.submitButton}>
                    ОСТАВИТЬ ЗАЯВКУ НА ОБРАТНЫЙ ЗВОНОК
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
