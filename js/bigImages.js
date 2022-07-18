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

    const picture_img = picture.querySelector('.picture__img').src;
    const pict_likes = picture.querySelector('.picture__likes').textContent;
    const pict_comments = picture.querySelector('.picture__comments').textContent;

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = picture_img
    bigPicture.querySelector('.likes-count').textContent = pict_likes
    bigPicture.querySelector('.comments-count').textContent = pict_comments
    bigPicture.querySelector('.social__caption').textContent = pict_comments


    const id = picture.dataset.id;
    const commentsFragment = document.createDocumentFragment();




    getObjectList[id].comments.forEach((comment) => {
      const commentElement = commentTemplate.cloneNode(true);

      commentElement.querySelector('.social__picture').src = comment.avatar;
      commentElement.querySelector('.social__picture').alt = comment.name;
      commentElement.querySelector('.social__text').textContent = comment.message;

      commentsFragment.appendChild(commentElement);
    });

    commentBlock.appendChild(commentsFragment);
  });
});