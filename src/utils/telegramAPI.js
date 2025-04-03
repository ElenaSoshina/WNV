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
    const isTest = formData.name.toLowerCase().includes("test");
    const chatIds = isTest ? [TEST_CHAT_ID] : [ADMIN_CHAT_ID, SECOND_ADMIN_CHAT_ID];

    let text = `📌 **Новая заявка с сайта**:\n`;
    


    // Добавляем общие поля
    if (formData.name) text += `👤 *Имя*: ${formData.name}\n`;
    if (formData.phone) text += `📞 *Телефон*: ${formData.phone}\n`;
    
    // Поля, которые есть только в модальном окне
    if (formType === 'modal') {
        if (formData.service) text += `🛠 *Услуга*: ${formData.service}\n`;
        if (formData.comment) text += `💬 *Комментарий*: ${formData.comment}\n`;
    }
    
    // Добавляем дату и время заявки
    text += `\n📅 *Дата*: ${new Date().toLocaleString('ru-RU')}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        for (const chatId of chatIds) {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" }),
            });

            const result = await response.json();
            if (!result.ok) {
                console.error(`Ошибка при отправке в чат ${chatId}:`, result);
            }
        }
        return true;
    } catch (error) {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        return false;
    }
}
