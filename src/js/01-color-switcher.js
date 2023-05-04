const COLOR_CHANGE_TIME = 1000;
let idTimer = null;

const refs = {
  bodyRef: document.querySelector('body'),
  buttonStartRef: document.querySelector('[data-start]'),
  buttonStopRef: document.querySelector('[data-stop]'),
};

refs.buttonStopRef.disabled = true;
refs.buttonStartRef.addEventListener('click', onClickStart);
refs.buttonStopRef.addEventListener('click', onClickStop);

function onClickStart() {
  idTimer = setInterval(getBgrColor, COLOR_CHANGE_TIME);
  refs.buttonStartRef.toggleAttribute('disabled');
  refs.buttonStopRef.removeAttribute('disabled');
}

function onClickStop() {
  clearInterval(idTimer);
  refs.buttonStopRef.toggleAttribute('disabled');
  refs.buttonStartRef.toggleAttribute('disabled');
}

function getBgrColor() {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
