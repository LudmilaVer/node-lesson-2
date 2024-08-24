// Импортируем модуль events
const events = require('events');

// Создаем экземпляр EventEmitter
const EventEmitter = new events.EventEmitter();

// Функция для отправки сообщений
function sendMessage(username, message, eventEmitter) {
  // Генерация события 'message'
  eventEmitter.emit('message', username, message);
}

// Обработчик события 'message'
EventEmitter.on('message', (username, message) => {
  console.log(`${username}: ${message}`); // Вывод сообщения в консоль
});

// Вызов функции sendMessage с различными пользователями и сообщениями
sendMessage('Alice', 'Hello, everyone!', EventEmitter);
sendMessage('Bob', 'Hi, Alice!', EventEmitter);
sendMessage('Charlie', 'Good morning!', EventEmitter);
