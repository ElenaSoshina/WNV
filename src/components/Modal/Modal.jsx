import React, { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [sending, setSending] = useState(false);

    if (!isOpen) return null;

    const handlePhoneFocus = () => {
        if (!phone) setPhone('+7');
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\+7\d{0,10}$/.test(value)) {
            setPhone(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name.trim()) newErrors.name = 'Пожалуйста, введите ваше имя';
        if (!/^\+7\d{10}$/.test(phone)) newErrors.phone = 'Введите корректный номер телефона в формате +7XXXXXXXXXX';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSending(true);
            
            // Отправляем запрос напрямую к API Telegram
            const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE";
            const ADMIN_CHAT_ID = "7666002805";
            const TEST_CHAT_ID = "522814078";
            
            const isTest = name.toLowerCase().includes("test");
            const chatIds = isTest ? [TEST_CHAT_ID] : [ADMIN_CHAT_ID];
            
            // Формируем текст сообщения
            let text = `Новая заявка с сайта:\n\n`;
            text += `Заявка из модального окна\n`;
            text += `Имя: ${name}\n`;
            text += `Телефон: ${phone}\n`;
            if (service) text += `Услуга: ${service}\n`;
            if (comment) text += `Комментарий: ${comment}\n`;
            text += `\nДата: ${new Date().toLocaleString('ru-RU')}`;
            
            try {
                // Используем внешний CORS прокси
                const CORS_PROXY = "https://corsproxy.io/?";
                const url = `${CORS_PROXY}https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
                
                const messageSent = await Promise.all(chatIds.map(async (chatId) => {
                    try {
                        const response = await fetch(url, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: text
                            })
                        });
                        
                        const result = await response.json();
                        console.log(`Результат отправки в чат ${chatId}:`, result);
                        return result.ok;
                    } catch (error) {
                        console.error(`Ошибка при отправке в чат ${chatId}:`, error);
                        return false;
                    }
                }));
                
                // Если хотя бы одно сообщение отправлено успешно
                const success = messageSent.some(sent => sent);
                
                setSending(false);
                setSuccess(success);
                
                if (success) {
                    setTimeout(() => {
                        setSuccess(false);
                        setName('');
                        setPhone('');
                        setService('');
                        setComment('');
                        onClose();
                    }, 3000);
                }
            } catch (error) {
                console.error("Ошибка при отправке:", error);
                setSending(false);
                alert("Произошла ошибка при отправке заявки. Пожалуйста, позвоните нам напрямую.");
            }
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {success ? (
                    <div className={styles.successOverlay}>
                        <p className={styles.successTitle}>Ваша заявка успешно отправлена!</p>
                    </div>
                ) : (
                    <>
                        <button className={styles.close} onClick={onClose}>&times;</button>
                        <h2 className={styles.title}>Оставьте заявку и мы свяжемся с Вами!</h2>
                        <form className={styles.form} onSubmit={handleSubmit} noValidate>
                            <div className={styles.fieldWrapper}>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={errors.name ? styles.errorField : ''}
                                />
                                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                            </div>

                            <div className={styles.fieldWrapper}>
                                <input
                                    type="tel"
                                    placeholder="Телефон"
                                    value={phone}
                                    onFocus={handlePhoneFocus}
                                    onChange={handlePhoneChange}
                                    className={errors.phone ? styles.errorField : ''}
                                />
                                {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                            </div>

                            <div className={styles.fieldWrapper}>
                                <select 
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value="">Выберите услугу</option>
                                    <option value="РВП">РВП</option>
                                    <option value="ВНЖ">ВНЖ</option>
                                    <option value="Гражданство РФ">Гражданство РФ</option>
                                </select>
                            </div>

                            <textarea 
                                placeholder="Комментарий (необязательно)" 
                                rows="3"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>

                            <button 
                                type="submit" 
                                className={styles.button}
                                disabled={sending}
                            >
                                {sending ? 'Отправка...' : 'Отправить'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}