export async function sendMessageToTelegram(formData) {
    const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE";
    const ADMIN_CHAT_ID = "7522814078";
    const TEST_CHAT_ID = "522814078";
    const SECOND_ADMIN_CHAT_ID = "522814078";
  
    const isTest = formData.name.toLowerCase().includes("test");
    const chatIds = isTest ? [TEST_CHAT_ID] : [ADMIN_CHAT_ID, SECOND_ADMIN_CHAT_ID];
  
    let text = `📌 <b>Новая заявка с сайта</b>:\n`;
  
    const hasOnlyNameAndPhone = formData.name && formData.phone &&
      !formData.service && !formData.passportType && !formData.duration && !formData.residence &&
      formData.totalPrice === undefined;
  
    if (hasOnlyNameAndPhone) text += `📞 <i>Заявка на консультацию</i>\n`;
  
    if (formData.service) text += `🛠 <b>Услуга:</b> ${formData.service}\n`;
    if (formData.name) text += `👤 <b>Имя:</b> ${formData.name}\n`;
    if (formData.phone) text += `📞 <b>Телефон:</b> ${formData.phone}\n`;
    if (formData.age) {
      const ageIcon = formData.age.includes("Дети") ? "👶" : "🧑‍💼";
      text += `${ageIcon} <b>Возраст:</b> ${formData.age}\n`;
    }
    if (formData.passportType) text += `🛂 <b>Тип паспорта:</b> ${formData.passportType}\n`;
    if (formData.duration) text += `⏳ <b>Срок выполнения:</b> ${formData.duration}\n`;
    if (formData.residence) text += `📍 <b>Регистрация:</b> ${formData.residence}\n`;
    if (formData.totalPrice !== undefined && formData.totalPrice !== 0) {
      text += `💰 <b>Стоимость:</b> ${formData.totalPrice} ₽\n`;
    }
    if (formData.comment) {
      text += `📝 <b>Комментарий:</b> ${formData.comment}\n`;
    }
  
    for (const chatId of chatIds) {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=HTML`;
  
      try {
        const res = await fetch(url);
        console.log("Telegram response:", res);
      } catch (error) {
        console.error("Ошибка при отправке в Telegram:", error);
      }
    }
  }
  