import {getIsStringSizeAvailable} from './util.js';

const HASHTAG_MAX_ITEMS = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;

const validateHashTagCount = (value) => {
  const hashTags = value.split(' ');
  if (hashTags.length > HASHTAG_MAX_ITEMS) {
    return false;
  }
  return true;
};

const validateHashTagText = (value) => {
  const hashTagTerms = /^#[A-Za-zA-Яа-яЁё0-9]{1,}$/;
  const hashTags = value.split(' ');

  if (hashTags[0] !== '') {
    let notValidCounter = 0;
    hashTags.forEach((hashTag) => {
      if (!hashTagTerms.test(hashTag)) {
        notValidCounter++;
      }
    });
    if (notValidCounter > 0) {
      return false;
    }
  }
  return true;
};

const validateHashTagSize = (value) => {
  const hashTags = value.split(' ');

  if (hashTags[0] !== '') {
    let notValidCounter = 0;
    hashTags.forEach((hashTag) => {
      if (hashTag.length > HASHTAG_MAX_LENGTH) {
        notValidCounter++;
      }
    });
    if (notValidCounter > 0) {
      return false;
    }
  }
  return true;
};

const validateHashTagRepeat = (value) => {
  const hashTags = value.split(' ');
  hashTags.forEach((hashTag, i) => {
    hashTags[i] = hashTag.toLowerCase();
  });
  const hahTagsSet = new Set(hashTags);
  if (hahTagsSet.size !== hashTags.length) {
    return false;
  }

  return true;
};

const validateComment = (value) => getIsStringSizeAvailable(value, COMMENT_MAX_LENGTH);

export {validateHashTagCount, validateHashTagText, validateHashTagRepeat, validateComment, validateHashTagSize};
