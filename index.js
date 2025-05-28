// Данные: три массива
const beginnings = [
  "Today your spirit will",
  "Be ready to",
  "It's time to finally",
  "Beware, you might accidentally",
  "You were born to"
];

const middles = [
  "hug the chaos",
  "decode an ancient mystery",
  "start a quiet revolution",
  "whisper to the void",
  "dance like a forgotten god"
];

const endings = [
  "under a blood-orange moon.",
  "with zero sleep and great hair.",
  "while everyone else scrolls Instagram.",
  "as if your soul's on fire.",
  "because destiny is bored today."
];

// Функция для случайного выбора
function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Генерация и вывод
const message = `${getRandom(beginnings)} ${getRandom(middles)} ${getRandom(endings)}`;
console.log(message);
