import {MESSAGES, NAMES, DESCRIPTIONS} from './data.js';

let random = function (a, b) {
  if (a < 0) {
    a = 0;
  }

  return Math.random() * (b - a) + a;

};

let commentLength = function (string, maxLength) {

  if (string.length > maxLength) {
    string = '';
  } else {
  }

}

random(0, 15);
commentLength('Второе домашнее задание успешно выполнено', 140);


function getRandomPositiveInt(min, max) {
  let lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  let upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  let result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  let previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInt(0, elements.length - 1)];
};

const createMessage = () => {

  let uniqueIdComment = createRandomIdFromRangeGenerator(1, 1000);

  return {
    id: uniqueIdComment(),
    avatar: 'img/avatar-' + getRandomPositiveInt(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }

}

const messageList = Array.from({length: 5}, createMessage);

const objectList = [];
const getObjectList = () => {
  let idNumber = 1;
  for (let i = 0; i < 25; i++, idNumber++) {
    const object = {
      id: idNumber,
      url: `photos/${idNumber}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInt(15, 200),
      comments: getRandomArrayElement(messageList),
    };
    objectList[i] = object;
  }

  return objectList;
};

export { objectList ,getObjectList};
