import {getObjectList} from "./images.js";

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsCounter = document.querySelector('.social__comment-count');
const loaderMoreComments = document.querySelector('.comments-loader');
const buttonCansel = document.querySelector('.big-picture__cancel');
const commentBlock = document.querySelector('.social__comments');
const commentTemplate = commentBlock.querySelector('.social__comment');


pictures.forEach((picture) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();


    buttonCansel.addEventListener('click', () => {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });

    bigPicture.classList.remove('hidden');
    commentsCounter.classList.add('hidden');
    loaderMoreComments.classList.add('hidden');
    body.classList.add('modal-open')

    const likes = document.querySelector('.likes-count');

    likes.addEventListener('click', function () {

      if (likes.classList.contains('added')) {
        likes.textContent--;
      } else {
        likes.textContent++;
      }
      likes.classList.toggle('added');
    })


    bigPicture.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('.picture__img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__caption').textContent = picture.querySelector('.picture__comments').textContent;


    const id = picture.dataset.id;
    const commentsFragment = document.createDocumentFragment();
    for (const comment of getObjectList[id].comments) {
      const commentElement = commentTemplate.cloneNode(true);

      commentElement.querySelector('.social__picture').src = comment.avatar;
      commentElement.querySelector('.social__picture').alt = comment.name;
      commentElement.querySelector('.social__text').textContent = comment.message;

      commentsFragment.appendChild(commentElement);
    }

    commentBlock.appendChild(commentsFragment);
  });
});
