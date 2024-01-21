import React, { useState } from 'react';
import './style.css';

const Chat = () => {
  const [formData, setFormDate] = useState({
    number: '',
    fullname: '',
    savol: ''
  });

  const sendMsgToBot = async (e) => {
    e.preventDefault();

    // Проверка на пустые поля
    if (!formData.fullname || !formData.number || !formData.savol) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    let msg = `
    <b>Имя:</b> ${formData.fullname} 
    <b>Номер:</b> ${formData.number}
    <b>Вопрос:</b>${formData.savol}
  `;

    let tokenBot = "6565510114:AAFV17dl2M28tOg2EaW5BlQoiPnvfGqlevo";

    const chatID = 1515609034;

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatID}&text=${msg}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  };

  return (
    <div className="Contact Menu">
      <br />
      <div className="ContactForm">
        <input
          type="text"
          onChange={(e) => setFormDate({ ...formData, fullname: e.target.value })}
          value={formData.fullname}
          placeholder="ФИО"
        />
        <input
          type="text"
          onChange={(e) => setFormDate({ ...formData, number: e.target.value })}
          value={formData.number}
          placeholder="Номер"
        />
        <input
          type="text"
          onChange={(e) => setFormDate({ ...formData, savol: e.target.value })}
          value={formData.savol}
          placeholder="Вопрос"
        />

        <div className='contactButton' onClick={sendMsgToBot}><span className='pulse-button'>Отправить</span></div>
      </div>
      <p>Оставьте пожалуйста свой отзыв о нас, Ваше мнение для нас очень важно. Это поможет улучшить нам качество сервиса.</p>
    </div>
  );
};

export default Chat;
