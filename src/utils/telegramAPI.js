/**
 * Отправка сообщения в Telegram
 * @param {Object} formData - Данные формы
 * @param {string} formType - Тип формы (modal, contact)
 * @returns {Promise<boolean>} - Результат отправки
 */
export const sendToTelegram = async (formData, formType) => {
    try {
        const BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Замените на токен вашего бота
        const CHAT_ID = 'YOUR_CHAT_ID'; // Замените на ID вашего чата
        const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        // Формируем текст сообщения в зависимости от типа формы
        let messageText = `🔔 Новая заявка с сайта!\n\n`;
        messageText += `👤 Имя: ${formData.name}\n`;
        messageText += `📱 Телефон: ${formData.phone}\n`;
        
        if (formType === 'modal' && formData.service) {
            messageText += `🛎️ Услуга: ${formData.service}\n`;
        }
        
        if (formType === 'modal' && formData.comment) {
            messageText += `💬 Комментарий: ${formData.comment}\n`;
        }
        
        messageText += `\n📆 Дата: ${new Date().toLocaleString('ru-RU')}`;
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: messageText,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        return data.ok;
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        return false;
    }
};
