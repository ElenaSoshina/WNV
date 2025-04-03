const ADMIN_CHAT_ID = "522814078"; // ID администратора
const TEST_CHAT_ID = "522814078";
const SECOND_ADMIN_CHAT_ID = "522814078";

export async function sendMessageToTelegram(formData) {
    const isTest = formData.name.toLowerCase().includes("test");
    const chatIds = isTest ? [TEST_CHAT_ID] : [ADMIN_CHAT_ID, SECOND_ADMIN_CHAT_ID];

    let text = `📌 **Новая заявка с сайта**:\n`;

    // Если указаны только имя и телефон — это заявка на консультацию
    const hasOnlyNameAndPhone = formData.name && formData.phone &&
        !formData.service && !formData.passportType && !formData.duration && !formData.residence &&
        formData.totalPrice === undefined;

    if (hasOnlyNameAndPhone) {
        text += `📞 *Заявка на консультацию*\n`;
    }

    if (formData.service) text += `🛠 *Услуга*: ${formData.service}\n`;
    if (formData.name) text += `👤 *Имя*: ${formData.name}\n`;
    if (formData.phone) text += `📞 *Телефон*: ${formData.phone}\n`;
    if (formData.age) {
        const ageIcon = formData.age.includes("Дети") ? "👶" : "🧑‍💼"; // 👶 для детей, 🧑‍💼 для взрослых
        text += `${ageIcon} *Возраст*: ${formData.age}\n`;
    }
    if (formData.passportType) text += `🛂 *Тип паспорта*: ${formData.passportType}\n`;
    if (formData.duration) text += `⏳ *Срок выполнения*: ${formData.duration}\n`;
    if (formData.residence) text += `📍 *Регистрация*: ${formData.residence}\n`;
    if (formData.totalPrice !== undefined && formData.totalPrice !== 0) text += `💰 *Стоимость*: ${formData.totalPrice} ₽\n`;

    // Изменяем URL запроса на адрес вашего серверного endpoint
    const url = `https://your-server.com/telegram-send`; // Замените на фактический URL вашего сервера

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
        console.error("Ошибка при отправке сообщения:", error);
        return false;
    }
}
