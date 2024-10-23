// Импортируем необходимые модули
import readline from 'readline';

// Создаем интерфейс для чтения данных с консоли
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для рассчета возраста
const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear(); // Получаем текущий год
  return currentYear - birthYear; // Рассчитываем возраст
};

// Запрашиваем год рождения
rl.question('Введите ваш год рождения: ', (answer) => {
  const birthYear = parseInt(answer); // Преобразуем строку в число

  if (isNaN(birthYear) || birthYear <= 0) {
    console.log('Пожалуйста, введите корректный год рождения.');
  } else {
    const age = calculateAge(birthYear); // Рассчитываем возраст
    console.log(`Ваш возраст: ${age} лет.`);
  }

  rl.close(); // Закрываем интерфейс
});