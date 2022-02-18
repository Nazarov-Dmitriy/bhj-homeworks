const input = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');
const arr = ['Где ваща совесеть', 'Все операторы заняты', 'Вы ни чего у нас не покупали чтобы с нами так разговарить', 'Все работники в отпуске', 'Мы не благотворительная организация'];
let messageArr = document.querySelectorAll('.message');
let newTime = new Date();

//Фунцкия Рандом
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//Функция добавления 0
function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

//Активация чата
document.querySelector('.chat-widget').addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
});

//Отправка Сообщения
input.addEventListener('keypress', (e) => {
    let date = new Date();
    if (e.key == 'Enter' && input.value !== '') {
        messages.innerHTML += `
          <div class="message message_client"">
            <div class="message__time">${addZero(date.getHours())}: ${addZero(date.getMinutes())} </div>
            <div class="message__text">
             ${input.value}
            </div>
          </div>
        `;
        input.value = '';
        messages.scrollIntoView(false);
    }
});

//Бот
function messageBot() {
    messageArr = document.querySelectorAll('.message');
    let date = new Date();
    if (messageArr[messageArr.length - 1].classList.contains('message_client')) {
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${addZero(date.getHours())}: ${addZero(date.getMinutes())} </div>
            <div class="message__text">${arr[randomInteger(0,arr.length-1)]}</div>
       </div>
      `;
    }

    if (document.querySelector('.chat-widget').classList.contains('chat-widget_active') && Math.round((date - newTime) / 1000) >= 30) {
        newTime = new Date();
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${addZero(date.getHours())}: ${addZero(date.getMinutes())} </div>
            <div class="message__text">${arr[randomInteger(0,arr.length-1)]}</div>
       </div>
      `;
    }
    messages.scrollIntoView(false);
}


setInterval(messageBot, 1000);