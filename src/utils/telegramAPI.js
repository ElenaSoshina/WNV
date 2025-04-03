const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE"; // Токен бота
const ADMIN_CHAT_ID = "7228140785"; // ID администратора
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
        const ageIcon = formData.age.includes("Дети") ? "👶" : "🧑‍💼";
        text += `${ageIcon} *Возраст*: ${formData.age}\n`;
    }
    if (formData.passportType) text += `🛂 *Тип паспорта*: ${formData.passportType}\n`;
    if (formData.duration) text += `⏳ *Срок выполнения*: ${formData.duration}\n`;
    if (formData.residence) text += `📍 *Регистрация*: ${formData.residence}\n`;
    if (formData.totalPrice !== undefined && formData.totalPrice !== 0) text += `💰 *Стоимость*: ${formData.totalPrice} ₽\n`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        for (const chatId of chatIds) {
            await fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" }),
              });
            // В режиме no-cors ответ является opaque – его нельзя разобрать как JSON.
            console.log("Запрос отправлен (ответ opaque, нельзя проверить результат).");
        }
        return true;
    } catch (error) {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        return false;
    }
}
