import React, { useState } from "react";
import styles from "./Reasons.module.css";
import { CheckCircle } from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import CardSlider from "../CardSlider/CardSlider.jsx";


const reasons = [
    "Работаем по договору, поэтому вы уверены в нашей надежности и качестве услуг",
    "Всегда укладываемся в срок, потому что знаем насколько вам важно получить загранпаспорт и другие необходимые бумаги",
    "Нас поддерживают государственные органы и наши схемы работы полностью соответствуют действующему законодательству",
    "Помогаем заполнить документы с первого раза, поэтому процесс подготовки проходит намного быстрее, чем когда вы это делаете сами",
    "Наши документы всегда принимаются в государственных органах без очередей и задержек",
    "Оказываем поддержку и сопровождение на всех этапах, чтобы вы были спокойны за заказанные документы",
    "Решаем даже сложные вопросы, ведь у нас более 10 лет опыта оформления загранпаспортов и других бумаг",
    "Всегда прозрачные цены - подробно расписаны на каждой странице услуги",
    "Помогаем получить документы даже тем, у кого нет постоянной прописки в Москве",
    "Оформляем все документы, которые нужны для работы, жизни и путешествий, поэтому с нами очень удобно!"
];

function Reasons() {
    const [showAll, setShowAll] = useState(false);
    const visibleCount = showAll ? reasons.length : 4;
    const visibleReasons = reasons.slice(0, visibleCount);
    const isOdd = visibleReasons.length % 2 !== 0;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>10 причин, почему Вам понравится с нами работать:</h2>

            {/* Desktop grid */}
            <div className={styles.gridWrapper}>
                <div className={styles.grid}>
                    {visibleReasons.map((reason, index) => {
                        const shouldAnimate = showAll && index >= 4;
                        return (
                            <div
                                key={index}
                                className={`${styles.card} ${shouldAnimate ? styles.cardAnimated : ''}`}
                            >
                                <CheckCircle size={34} className={styles.icon}/>
                                <p>{reason}</p>
                            </div>
                        );
                    })}

                    {/* пустая заглушка для чёткой сетки */}
                    {isOdd && <div className={styles.card} style={{ visibility: "hidden" }} />}
                </div>

                {reasons.length > 4 && (
                    <button
                        className={styles.toggleButton}
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll ? "Скрыть" : "Показать ещё"}
                    </button>
                )}
            </div>

            {/* Мобильный слайдер */}
            <div className={styles.mobileOnly}>
                <CardSlider />
            </div>
        </section>
    );
}


export default Reasons;
