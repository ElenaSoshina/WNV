import React, {useEffect, useRef, useState} from 'react';
import styles from './ContactAndReviews.module.css';
import '../../App.css'

export default function ContactAndReviews() {

    const [widgetReady, setWidgetReady] = useState(false);   // ← флаг «скрипт загружен»
    const widgetRef = useRef(null);

    /* ── 1. Одноразовая загрузка init.js ── */
    useEffect(() => {
        // если скрипт уже был вставлен раньше (другая страница) — ничего не грузим
        if (window.dgReviewsWidget) {
            setWidgetReady(true);
            return;
        }

        // создаём <script>, ждём onload
        const s = document.createElement('script');
        s.src = 'https://app.daily-grow.com/reviews-widget/init.js';
        s.onload = () => setWidgetReady(true);        // ← флаг «готово»
        document.body.appendChild(s);

        // чистка не нужна: скрипт остаётся в <head>/<body>
    }, []);

    /* ── 2. Когда флаг true — рендерим плейсхолдер и инициализируем ── */
    useEffect(() => {
        if (!widgetReady) return;

        // вставляем плейсхолдер (один раз)
        if (widgetRef.current && !widgetRef.current.querySelector('.dg__widget-start')) {
            const div = document.createElement('div');
            div.className            = 'dg__widget-start';
            div.dataset.widgetId     = '5fec0a96-88cf-4c6c-8819-e4ce288750fb';
            div.dataset.slidesToShow = window.innerWidth <= 768 ? '1' : '3';
            widgetRef.current.appendChild(div);
        }

        // запускаем init() только после того, как плейсхолдер есть
        if (window.dgReviewsWidget?.init) {
            window.dgReviewsWidget.init();
            window.dgReviewsWidget.update?.({
                slidesToShow: window.innerWidth <= 768 ? 1 : 3,
            });
        }

        // resize-listener
        const handleResize = () =>
            window.dgReviewsWidget?.update?.({
                slidesToShow: window.innerWidth <= 768 ? 1 : 3,
            });

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [widgetReady]);

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Блок: Как нас найти */}
                <div className={styles.mapSection}>
                    <h3 className={styles.title}>Как нас найти</h3>

                    <div className={styles.contactInfo}>
                        <p><strong>📍 Адрес:</strong> г. Москва, ул. Тверская, д. 20 стр. 1, 4 этаж, офис 401А</p>
                        <p><strong>📞 Телефон:</strong> <a href="tel:+74991363808">+7 (499) 136-38-08</a></p>
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
                    {/* <h3 className={styles.title}>Отзывы наших клиентов</h3>
                    <p className={styles.description}>
                        Узнайте, что говорят о нас клиенты, которым мы уже помогли с оформлением документов
                    </p> */}

                    {widgetReady ? (
                        <div className={styles.widgetContainer} ref={widgetRef} />
                    ) : (
                        <div className={styles.widgetPlaceholder}>Загружаем отзывы…</div>
                    )}
                </div>

            </div>
        </section>
    );
}
