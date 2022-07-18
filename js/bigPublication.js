import {publicationsArray} from './publications.js';
import {isEscape} from './util.js';

const pictures = document.querySelector('.pictures');
const bigPublication = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsCounter = document.querySelector('.social__comment-count');
const loaderMoreComments = document.querySelector('.comments-loader');
const buttonCansel = document.querySelector('.big-picture__cancel');
const commentBlock = document.querySelector('.social__comments');
const commentTemplate = commentBlock.querySelector('.social__comment');


// Function for close button
const onCloseButton = () => {
  bigPublication.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonCansel.removeEventListener('click', onCloseButton);
};
const onCloseEscape = (evt) => {
  if(isEscape(evt)) {
    bigPublication.classList.add('hidden');
    body.classList.remove('modal-open');
    window.removeEventListener('keydown', onCloseEscape);
  }
};


const openBigPublication = (evt) => {
  const picture = evt.target.parentNode;

  if(picture.className !== 'picture') {
    return;
  }

  evt.preventDefault();

  // Cansel button
  buttonCansel.addEventListener('click', onCloseButton);
  window.addEventListener('keydown', onCloseEscape);

  // Drawing of bigPublication
  bigPublication.classList.remove('hidden');
  commentsCounter.classList.add('hidden');
  loaderMoreComments.classList.add('hidden');
  body.classList.add('modal-open');
  commentBlock.innerHTML = '';


  bigPublication.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('.picture__img').src;
  bigPublication.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
  bigPublication.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
  bigPublication.querySelector('.social__caption').textContent = picture.querySelector('.picture__comments').textContent;

  // Drawing comments
  const id = picture.dataset.id;
  const commentsFragment = document.createDocumentFragment();
  for(const comment of publicationsArray[id].comments) {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentsFragment.appendChild(commentElement);
  }

  commentBlock.appendChild(commentsFragment);
};

pictures.addEventListener('click', openBigPublication);
