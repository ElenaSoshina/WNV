import React, { useState } from 'react';
import styles from './LegalizationPage.module.css';
import '../../App.css'
import { FaUserCog, FaClipboardCheck, FaShieldAlt, FaBolt, FaChartLine, FaUserCheck, FaHandsHelping, FaBalanceScale, FaRocket, FaComments } from 'react-icons/fa';
import Modal from '../../components/Modal/Modal';

export default function LegalizationPage() {
    const [openItem, setOpenItem] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleItem = (index) => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };

    const guaranteeItems = [
        {
            title: 'Индивидуальный подход',
            content: 'Ваша ситуация уникальна, и мы разработаем оптимальную стратегию легализации именно для вас, учитывая все нюансы и особенности вашего случая.'
        },
        {
            title: 'Полное сопровождение',
            content: 'Мы возьмем на себя все этапы процесса: от сбора и подготовки документов до представления ваших интересов в миграционных органах. Вам не придется тратить время и силы на бюрократические процедуры.'
        },
        {
            title: 'Надежность и законность',
            content: 'Мы работаем строго в рамках законодательства РФ, гарантируя безопасность и законность всех проводимых действий. Наш опыт и безупречная репутация — ваше спокойствие.'
        },
        {
            title: 'Оперативность',
            content: 'Мы стремимся к максимально быстрому и эффективному решению вопроса вашей легализации, чтобы вы могли сосредоточиться на важных для вас делах.'
        },
        {
            title: 'Прозрачность',
            content: 'Вы всегда будете в курсе всех этапов процесса и сможете задать любые интересующие вас вопросы нашим специалистам.'
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.intro}>
                    <h1 className={styles.introTitle}>Безопасная легализация в России до 30 апреля!</h1>
                    <p className={styles.introText}>
                        Миграционное законодательство — сложная и постоянно меняющаяся система. Самостоятельное оформление документов может привести к задержкам, отказам и, как следствие, к серьезным проблемам. Не рискуйте своим будущим! Доверьте легализацию в России профессионалам с многолетним опытом работы в сфере миграционного права.
                    </p>
                    <button 
                        className={styles.consultButton}
                        onClick={() => setModalOpen(true)}
                    >
                        Получить консультацию
                    </button>
                </div>

                <div className={styles.instructions}>
                    <h2 className={styles.title}>
                        Урегулирование правового статуса и получение патента для иностранных граждан из безвизовых стран
                    </h2>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <div className={styles.stepIcons}>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>₽</div>
                                        <p>Оплатить задолженность</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>📋</div>
                                        <p>Получить дубликат патента и продлить срок пребывания</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.arrow}></div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Посетить Миграционный центр</h3>
                                <div className={styles.stepList}>
                                    <ul>
                                        <li>При себе иметь документы</li>
                                        <li>Оформить полис ДМС</li>
                                        <li>Пройти медицинское освидетельствование</li>
                                        <li>Пройти тестирование</li>
                                    </ul>
                                    <ul>
                                        <li>Фото 3х4 см (4 шт.)</li>
                                        <li>Пройти дактилоскопическую регистрацию</li>
                                        <li>Заполнить заявление</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.arrow}></div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <div className={styles.stepIcons}>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>👨‍💼</div>
                                        <p>Предоставить в течение 2-х месяцев уведомление о заключении трудового договора</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>⏰</div>
                                        <p>Предъявить квитанцию об оплате НДФЛ</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.arrow}></div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <div className={styles.iconBlock}>
                                    <div className={styles.icon}>📱</div>
                                    <p>Получить СМС-оповещение о готовности документов</p>
                                </div>
                            </div>
                            <div className={styles.arrow}></div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <h3>Посетить Миграционный центр для получения документов</h3>
                                <div className={styles.stepIcons}>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>📄</div>
                                        <p>Получить новый патент</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>P</div>
                                        <p>Оплатить НДФЛ (5 942 руб.)</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>📋</div>
                                        <p>Получить талон на продление миграционного учета</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.arrow}></div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepContent}>
                                <h3>После получения патента</h3>
                                <div className={styles.stepIcons}>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>📅</div>
                                        <p>В течение 2 месяцев с даты получения патента предоставить трудовой договор</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>P</div>
                                        <p>Ежемесячно оплачивать авансовый платеж (5 942 руб. в месяц)</p>
                                    </div>
                                    <div className={styles.iconBlock}>
                                        <div className={styles.icon}>⏰</div>
                                        <p>Продлевать миграционный учет</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.guarantees}>
                        <h2>Мы гарантируем:</h2>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <FaUserCheck />
                                </div>
                                <div className={styles.content}>
                                    <h3>Индивидуальный подход</h3>
                                    <p>Ваша ситуация уникальна, и мы разработаем оптимальную стратегию легализации именно для вас, учитывая все нюансы и особенности вашего случая.</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <FaHandsHelping />
                                </div>
                                <div className={styles.content}>
                                    <h3>Полное сопровождение</h3>
                                    <p>Мы возьмем на себя все этапы процесса: от сбора и подготовки документов до представления ваших интересов в миграционных органах. Вам не придется тратить время и силы на бюрократические процедуры.</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <FaBalanceScale />
                                </div>
                                <div className={styles.content}>
                                    <h3>Надежность и законность</h3>
                                    <p>Мы работаем строго в рамках законодательства РФ, гарантируя безопасность и законность всех проводимых действий. Наш опыт и безупречная репутация — ваше спокойствие.</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <FaRocket />
                                </div>
                                <div className={styles.content}>
                                    <h3>Оперативность</h3>
                                    <p>Мы стремимся к максимально быстрому и эффективному решению вопроса вашей легализации, чтобы вы могли сосредоточиться на важных для вас делах.</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <FaComments />
                                </div>
                                <div className={styles.content}>
                                    <h3>Прозрачность</h3>
                                    <p>Вы всегда будете в курсе всех этапов процесса и сможете задать любые интересующие вас вопросы нашим специалистам.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.questions}>
                    <h2>Остались вопросы?</h2>
                    <div className={styles.buttons}>
                        <button 
                            className={`${styles.button} ${styles.primary}`}
                            onClick={() => setModalOpen(true)}
                        >
                            Оставить заявку
                        </button>
                        <a 
                            href="tel:+74955171080" 
                            className={`${styles.button} ${styles.secondary}`}
                        >
                            +7 (495) 517-10-80
                        </a>
                    </div>
                </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
            />
        </section>
    );
} 