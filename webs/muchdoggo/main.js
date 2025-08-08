// Frases de Doge
const phrases = [
  "such wow",
  "very meme",
  "so javascript",
  "much click",
  "very responsive",
  "such layout",
  "so doge",
  "much design",
  "very code",
  "so stylish"
];

function generatePhrase() {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("doge-phrase").textContent = random;
}


// Frases de Cheems
const cheemsPhrases = [
  "i liek cheemsburbger",
  "so smol. much chonk.",
  "pls no bully",
  "me brain have 2 thoughts… both wrong",
  "me write code… it broked… me cry… then me fix… then it broked again",
  "i am doin a sit",
  "me go gym once… now me nap forever",
  "me is introvert but also want attenshun plz",
  "me is not lazy… me is energy efficient",
  "me no sad… just dramatic for flavor"
];

function generateCheems() {
  const random = Math.floor(Math.random() * cheemsPhrases.length);
  document.getElementById("cheems-phrase").textContent = cheemsPhrases[random];
}