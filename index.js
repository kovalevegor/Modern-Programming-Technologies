const now = new Date();
const nextYear = now.getFullYear() + 1;
const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
const timeDiff = newYear - now;

const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

console.log(`Осталось ${days} дней, ${hours} часов, ${minutes} минут и ${seconds} секунд до Нового года.`);
