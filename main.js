const productCard = document.querySelector('.product-card');
const changeColorButton = document.querySelector('#color-change-button');
const productCardList = document.querySelectorAll('.product-card');
const changeEachColorButton = document.querySelector('#each-color-change-button');

changeColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = 'blue';
})

changeEachColorButton.addEventListener('click', () => {
  productCardList.forEach((card) => {
    card.style.backgroundColor = 'red';
  });
});

const openGoogleBotton = document.querySelector('#open-google');
openGoogleBotton.addEventListener('click', openGoogle)
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть google?');
  if (answer === true) {
    window.open('hhtps://google.com')
  } else { return }
}


const title = document.querySelector('.title');
title.addEventListener('mouseenter', () => {
  console.log(title.textContent);
});

const multicolorButton = document.querySelector('.multicolor-button');
multicolorButton.addEventListener('click', () => {
  multicolorButton.classList.toggle('multicolor-button--blue');
});