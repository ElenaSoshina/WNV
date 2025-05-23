import React from 'react';
import styles from './ServicesSection.module.css';
import {Link} from "react-router-dom";
import '../../App.css'

export default function ServicesSection() {
    const services = [
        {
            title: 'Сопровождение при оформлении РВП и получении квоты на РВП',
            deadline: 'Что входит в услугу:',
            list: [
                'сбор и оформление документов — от 1 до 2 недель',
                'подача без задержек (ММЦ Одинцово, Подольск) — 1 день',
                'результат от госорганов — в среднем 60 дней',
            ],
            price: 'от 100 000 ₽',
        },
        {
            title: 'Оформление ВНЖ под ключ: от документов до подачи',
            deadline: 'Что входит в услугу:',
            list: [
                'подготовка пакета документов — от 1 до 2 недель',
                'подача без задержек (ММЦ Одинцово, Подольск) — 1 день',
                'результат — от 2 до 4 месяцев',
            ],
            price: 'от 100 000 ₽',
        },
        {
            title: 'Пошаговая помощь в получении гражданства РФ',
            deadline: 'Что входит в услугу:',
            list: [
                'оформление документов — от 1 до 2 недель',
                'подача без задержек (ММЦ Одинцово, Подольск) — 1 день',
                'решение — примерно 3 месяца',
            ],
            price: 'от 100 000 ₽',
        },
        {
            title: 'Легализация в России до 30 апреля!',
            deadline: 'Сложное миграционное законодательство? Доверьтесь профессионалам!',
            list: [
                'Мы гарантируем индивидуальный подход, полное сопровождение и безупречную законность всех действий',
                'Забудьте о бюрократии — мы сделаем все за вас',
                'Оперативность и прозрачность гарантированы',
                'Получите бесплатную консультацию и обеспечьте себе спокойное будущее в России!',
            ],
            price: 'от 100 000 ₽',
            isWide: true,
        },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Чем мы можем Вам помочь</h2>
                <div className={styles.cards}>
                    {services.map((service, index) => (
                        <div key={index} className={`${styles.card} ${service.isWide ? styles.wide : ''}`}>
                            <p className={styles.title}>{service.title}</p>
                            <p className={styles.subtitle}>{service.deadline}</p>
                            <ul className={styles.list}>
                                {service.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className={styles.priceBlock}>
                                <div className={styles.price}>Цена <span>{service.price}</span></div>
                                {service.isWide && (
                                    <Link to="/legalization" className={styles.moreButton}>
                                        Подробнее
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
