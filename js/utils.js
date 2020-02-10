'use strict';

const hideSection = (section) => {
  section.classList.remove('visible');
};

const showSection = (section) => {
  section.classList.add('visible');
};

const getRandomNumber = (max) => Math.floor(Math.random() * max + 2);
const getRandomElementFromArray = (array) => array[Math.floor(Math.random()*array.length)];


const renderElement = (tag, className, text) => {
  let element = document.createElement(tag);
  element.setAttribute('class', className);
  element.textContent = text;

  return element
};


