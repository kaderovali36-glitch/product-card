const user = {
  mame: "Ali",
  age: 22,
  country: "Egypt",
  city: "Cairo",
  nationality: "Russian"
}

console.log (user);

const car = {
  name: "RB-19",
  weight: "798kg",
  power: "900hp",
  maxSpeed: "347km/h",
  engine: "V6",
  release: 2023,
  rear: "wheel drive"
}

car.owner = user

console.log (car)
function checkCar(car) {
  if (!car.maxSpeed) {
    car.maxSpeed = 347;
  }
  
}

function showProperty(object, property){
  console.log (object[property])
}

showProperty(car, 'name');
showProperty(car, 'owner');

const products = ['увлажняющий мусс', 'увлажнящая маска', 'гель для умывания']

const randomBooks = [
  {name: '1984', author: 'Джордж Оруэлл', genre: 'антиутопия', year: 1995},
  {name: 'Маленькй принц', author: 'Антуан Де Сент-Экзюпери', genre: 'сказка', year: 2007},
  {name: 'Преступление и наказание', author: 'Федор Достоевский', genre: 'роман', year: 1987},
  {name: 'Дюна', author: 'Френк Герберт', genre: 'фантастика', year: 2015} 
]

randomBooks.push({
  name:'Шерлок Холмс: Собака Баскервилей', author:'Артур Конан Дойл', genre: 'детектив', year: 2023
})

const harryPotter = [
  {name: 'Философский камень', author:'Дж. К. Роулинг', genre: 'фэнтези', year: 1997},
  {name: 'Тайная комната', author:'Дж. К. Роулинг', genre: 'фэнтези', year: 2005},
  {name: 'Узник Азкабана', author:'Дж. К. Роулинг', genre: 'фэнтези', year: 1999},
  {name: 'Кубок огня', author:'Дж. К. Роулинг', genre: 'фэнтези', year: 2016},
  {name: 'Орден Фенкса', author:'Дж. К. Роулинг', genre: 'фэнтези', year: 2007}
]

const allBooks = [...randomBooks, ...harryPotter]

console.log (allBooks);

function checkRareBooks(allBooks) {
    allBooks.forEach((book) => {
        if (book.year > 2000) {
            book.isRare = true;
        } else {
            book.isRare = false;
        }
    });
}

checkRareBooks(allBooks);
console.log (allBooks)