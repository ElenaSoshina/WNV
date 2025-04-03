/**
 * Отправка сообщения в Telegram
 * @param {Object} formData - Данные формы
 * @param {string} formType - Тип формы (modal, contact)
 * @returns {Promise<boolean>} - Результат отправки
 */
const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE"; // Токен бота
const ADMIN_CHAT_ID = "522814078"; // ID администратора
const TEST_CHAT_ID = "522814078";
const SECOND_ADMIN_CHAT_ID = "522814078";

export async function sendMessageToTelegram(formData, formType) {
    console.log("Отправка сообщения в Telegram:", formData, formType);
    
    const isTest = formData.name.toLowerCase().includes("test");
    const chatIds = isTest ? [TEST_CHAT_ID] : [ADMIN_CHAT_ID, SECOND_ADMIN_CHAT_ID];
    console.log("Отправка в чаты:", chatIds);

    // Простой текст без Markdown форматирования
    let text = `Новая заявка с сайта:\n\n`;
    
    if (formType === 'contact') {
        text += `Заявка на консультацию\n`;
    } else if (formType === 'modal') {
        text += `Заявка из модального окна\n`;
    }

    if (formData.name) text += `Имя: ${formData.name}\n`;
    if (formData.phone) text += `Телефон: ${formData.phone}\n`;
    
    if (formType === 'modal') {
        if (formData.service) text += `Услуга: ${formData.service}\n`;
        if (formData.comment) text += `Комментарий: ${formData.comment}\n`;
    }
    
    text += `\nДата: ${new Date().toLocaleString('ru-RU')}`;
    console.log("Текст сообщения:", text);

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        for (const chatId of chatIds) {
            console.log(`Отправка в чат ${chatId}...`);
            
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    chat_id: chatId, 
                    text: text
                    // Убираем parse_mode
                })
            });

            const result = await response.json();
            console.log(`Ответ от API для чата ${chatId}:`, result);
            
            if (!result.ok) {
                console.error(`Ошибка при отправке в чат ${chatId}:`, result.description);
            }
        }
        return true;
    } catch (error) {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        return false;
    }
}
