import React, {useEffect, useRef} from 'react';
import styles from './ContactAndReviews.module.css';
import '../../App.css'

export default function ContactAndReviews() {
    const widgetRef = useRef(null);

    useEffect(() => {
        /* ─── 1. плейсхолдер виджета ─── */
        if (widgetRef.current && !widgetRef.current.querySelector('.dg__widget-start')) {
            const div = document.createElement('div');
            div.className           = 'dg__widget-start';
            div.dataset.widgetId    = '5fec0a96-88cf-4c6c-8819-e4ce288750fb';
            div.dataset.slidesToShow = window.innerWidth <= 768 ? '1' : '3';
            widgetRef.current.appendChild(div);
        }

        /* ─── 2. CSS-фиксы (добавляем один раз) ─── */
        if (!document.getElementById('dg-extra-styles')) {
            const style = document.createElement('style');
            style.id = 'dg-extra-styles';
            style.textContent = `
        /* убираем заголовок «Отзывы клиентов» у самого виджета */
        .dg__widget-start .header-text { display:none !important; }
  
        /* фикс: контейнер swiper не должен растягивать страницу */
        .dg__widget-start .swiper {
          width:100% !important;
          max-width:100% !important;
          overflow:hidden !important;
        }
  
        /* меняем tailwind-класс pl-10 (2.5rem → 10px) ровно в этом блоке */
        section.reviews-widget.pl-10 { padding-left:10px !important; }
  
        /* мобильные: по одной карточке и неширокие элементы */
        @media (max-width:768px){
          .dg__review-item{flex:0 0 100% !important;max-width:100% !important;}
        }
      `;
            document.head.appendChild(style);
        }

        /* ─── 3. динамически меняем число карточек ─── */
        const updateSlides = () => {
            if (window.dgReviewsWidget?.update) {
                window.dgReviewsWidget.update({
                    slidesToShow: window.innerWidth <= 768 ? 1 : 3,
                });
            }
        };
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

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

                    <div className={styles.reviewsWidget}>
                        <div className={styles.widgetContainer} ref={widgetRef}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
