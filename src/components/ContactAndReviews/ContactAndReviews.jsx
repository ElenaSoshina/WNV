import React from 'react';
import styles from './ContactAndReviews.module.css';
import '../../App.css'

export default function ContactAndReviews() {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Блок: Как нас найти */}
                <div className={styles.mapSection}>
                    <h3 className={styles.title}>Как нас найти</h3>

                    <div className={styles.contactInfo}>
                        <p><strong>📍 Адрес:</strong> г. Москва, ул. Тверская, д. 20 стр. 1, 4 этаж, офис 401А</p>
                        <p><strong>📞 Телефон:</strong> <a href="tel:+74955171080">+7 (495) 517-10-80</a></p>
                        <p><strong>✉️ Email:</strong> <a href="mailto:visaland@mail.ru">visaland@mail.ru</a></p>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee0b096fe0e11ae88bb0e3110109b955e1fd47ce82867962d81885d5a9a5edbe&amp;source=constructor"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            allowFullScreen
                            title="Офис VisaLand"
                            style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>

                {/* Блок: Отзывы клиентов */}
                <div className={styles.reviewsSection}>
                    <h3 className={styles.title}>Отзывы клиентов</h3>
                    <p className={styles.description}>Наши клиенты довольны сервисом и рекомендуют нас!</p>

                    <div className={styles.reviewsWidget}>
                    <iframe src="https://swdgts.ru/8e3ca1270588805197678ab595a27a69" width="100%" height="700" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
