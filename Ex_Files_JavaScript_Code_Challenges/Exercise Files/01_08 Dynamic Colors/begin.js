/*
  WRITE YOUR SOLUTION HERE
*/
const changeColor = (color) => {
  return () => {
    document.body.style.background = color;
  }
};

const bgColorBlue = changeColor('#0f62fe');
const bgColorPink = changeColor('#ff7eb6');
const bgColorGreen = changeColor('#006838');


document.querySelector('#blue').addEventListener('click', bgColorBlue);
document.querySelector('#pink').addEventListener('click', bgColorPink);
document.querySelector('#green').addEventListener('click', bgColorGreen);
