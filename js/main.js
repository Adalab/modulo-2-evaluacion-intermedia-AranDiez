'use strict';

const button = document.querySelector('.js_button');
const select = document.querySelector('.js_guess');
const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');
const balance = document.querySelector('.js_balance');
const balanceResult = document.querySelector('.js_balanceResult');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function win() {
  const inputValue = input.value;
  balanceResult.innerHTML = parseInt(input.value) * 2;
}
function loose() {
  const inputValue = input.value;
  balanceResult.innerHTML = parseInt(input.value) / 2;
}

function winLoose() {
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
}

function handleClickBtn(event) {
  event.preventDefault();
  winLoose();
}

button.addEventListener('click', handleClickBtn);
