function showWeather(city, temp) {
  console.log(`Сейчас в городе ${city} - ${temp} градусов по Цельсию`)
}
showWeather('Каир', '18')

const LIGHT_SPEED = 300000;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(30000);

const product1 = 'Увлжняющий мусс';
const price1 = 2750;

buyProduct1(3000);

function buyProduct1(budget1) {
  if (budget1 > price1) {
    console.log(`${product1} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price1 - budget}$, пополните баланс`);
  }
}

const product2 = 'Увлжняющая маска';
const price2 = 3500;

buyProduct2(1000);

function buyProduct2(budget2) {
  if (budget2 > price2) {
    console.log(`${product2} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price2 - budget2}$, пополните баланс`);
  }
}

const product3 = 'Гель для умывания';
const price3 = 1650;

buyProduct3(1000);

function buyProduct3(budget3) {
  if (budget3 > price3) {
    console.log(`${product3} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price3 - budget3}$, пополните баланс`);
  }
}

function greetUser(name) {
  console.log(`Привет, ${name}`)
}
greetUser('Али')

const date = '9.11.26';
let day = 'Понедельник';
var time = '10:52';

console.log(date);
console.log(day);
console.log(time);
