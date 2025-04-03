import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CheckCircle } from "lucide-react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./CardSlider.module.css";

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

const CardSlider = () => {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                modules={[Pagination]} // ← подключаем модуль
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {reasons.map((text, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card}>
                            <CheckCircle size={34} className={styles.icon} />
                            <p>{text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;
