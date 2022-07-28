const getIsStringSizeAvailable = (string, availableLength) => string.length <= availableLength;
const debounceDelay = 500;
const isEscape = (evt) => evt.key === 'Escape';

const buttonDisabled = (button, message = button.textContent) => {
  button.disabled = true;
  button.textContent = message;
};

const buttonActive = (button, message = button.textContent) => {
  button.disabled = false;
  button.textContent = message;
};

const debounce = (callback, timeoutDelay = debounceDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getIsStringSizeAvailable, isEscape, buttonDisabled, buttonActive, debounce};
