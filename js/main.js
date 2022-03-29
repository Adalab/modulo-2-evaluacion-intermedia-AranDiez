'use strict';

const button = document.querySelector('.js_button');
const select = document.querySelector('.js_guess');
const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');
const balance = document.querySelector('.js_balance');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  const numAleat = getRandomNumber(6);
  const selectValue = parseInt(select.value);
  if (numAleat === selectValue) {
    // ganas
    text.innerHTML = `Has ganado el doble de lo apostado.`;
  } else {
    // pierdes
    text.innerHTML = `Ha perdido lo apostado.`;
  }

  const inputValue = input.value;
  balance.innerHTML += input.value;
});

// console.log(input.value);
