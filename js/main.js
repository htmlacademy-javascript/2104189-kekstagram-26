let getRandom = function (a, b) {
  if (a < 0 || b < a) {
    console.log("Переданы некорректные значения");
    return false;
  }

  return Math.round(Math.random() * (b - a) + a);

};

let getCommentLength = function (string, maxLength) {

  if (string.length > maxLength) {
    console.log("Максимальная длинна коментария - 140 символов");
    return false;
  } else {
    console.log("Ваш комментарий опубликован");
    return true
  }

}

getRandom(0, 15);
getCommentLength('Второе домашнее задание успешно выполнено', 140);

