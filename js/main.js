'use strict';

const button = document.querySelector('.js_button');
const select = document.querySelector('.js_guess');
const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');
const balance = document.querySelector('.js_balance');
const balanceResult = document.querySelector('.js_balanceResult');
const reset = document.querySelector('.js_reset');
let wallet = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function win() {
  const inputValue = input.value;
  balanceResult.innerHTML = wallet * 2;
}
function loose() {
  const inputValue = input.value;
  balanceResult.innerHTML = wallet / 2;
}

function winLoose() {
  event.preventDefault();
  const numAleat = getRandomNumber(6);
  const selectValue = parseInt(select.value);
  const inputValue = input.value;

  if (numAleat === selectValue) {
    // ganas
    text.innerHTML = `Has ganado el doble de lo apostado.`;
    win();
  } else {
    loose();
    // pierdes
    text.innerHTML = `Ha perdido lo apostado.`;
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  winLoose();
}

button.addEventListener('click', handleClickBtn);

function handleClickReset(event) {
  event.preventDefault();
  text.innerHTML = `Vamos a jugar!`;
  wallet = 50;
  balanceResult.innerHTML = 50;
}

reset.addEventListener('click', handleClickReset);
