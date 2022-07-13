import {getObjectList} from "./utils.js";

const photoBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photosArray = getObjectList();

const photosFragment = document.createDocumentFragment();

let i = 0;
photosArray.forEach(({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.dataset.id = i;
  photosFragment.appendChild(photoElement);
  i++
});

photoBlock.appendChild(photosFragment);

export {getObjectList};