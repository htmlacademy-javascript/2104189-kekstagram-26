let random = function (a, b) {
  if (a < 0) {
    console.log("Минимальное значение - 0");
    a = 0;
  }

  return Math.random() * (b - a) + a;

};

let commentLength = function (string, maxLength) {

  if (string.length > maxLength) {
    console.log("Максимальная длинна коментария - 140 символов");
    string = '';
  } else {
    console.log("Ваш комментарий опубликован");
  }

}

random(0, 15);
commentLength('Второе домашнее задание успешно выполнено', 140);

