let age = prompt("Ваш возраст?");
if (isNaN(age)) {
  alert("Неправильно указан возраст");
}

if (age >= 0 && age < 12) {
  console.log("ребенок");
} else if (age < 18) {
  console.log("подросток");
} else if (age < 60) {
  console.log("взрослый");
} else {
  console.log("пенсионер");
}

let number = prompt("введите число от 0 до 9");
if (number == 1) {
  alert("!");
} else if (number == 2) {
  alert("@");
} else if (number == 3) {
  alert("#");
} else if (number == 4) {
  alert("$");
} else if (number == 5) {
  alert("%");
} else if (number == 6) {
  alert("^");
} else if (number == 7) {
  alert("&");
} else if (number == 8) {
  alert("*");
} else if (number == 9) {
  alert("(");
} else if (number == 0) {
  alert(")");
} else {
  alert("неправильный формат данных!");
}

let number_123 = prompt("введите трехзначное число");
let number_3 = number_123 % 10;
let number_2 = ((number_123 - number_3) % 100) / 10;
let number_1 = (number_123 - number_3 - ((number_123 - number_3) % 100)) / 100;
if (isNaN(number_123)) {
  alert("неправильный формат данных!");
}
if (number_123 < 100 || number_123 > 999) {
  {
    alert("необходимо ввести ТРЕХзначное число");
  }
}
if (number_1 == number_2 && number_1 == number_3) {
  console.log(`${number_1},${number_2},${number_3}`);
} else if (number_1 == number_2) {
  console.log(`${number_1},${number_2}`);
} else if (number_1 == number_3) {
  console.log(`${number_1},${number_3}`);
} else if (number_2 == number_3) {
  console.log(`${number_2},${number_3}`);
} else {
  console.log("совпадений нет");
}

let year = prompt("год?");
if (isNaN(year)) {
  alert("неверный формат");
}
if (year % 400 == 0 || (year % 4 == 0 && year % 100 > 0)) {
  console.log("високосный");
} else {
  console.log("не високосный");
}

let palindrom = prompt("Введите пятизначное число");
if (isNaN(palindrom)) {
  alert("неверный формат данных");
} else if (palindrom <= 9999 || palindrom > 99999) {
  alert("введите  ПЯТИзначное число");
}
function reverse(str) {
  //задаем название ф-ии и параметр, к кот.она применится
  let user_numbers = str.split(""); //задается локальная переменная, кот.присавивается массив из разбитой побуквенно строки, кот.ввел пользователь
  user_numbers.reverse(); // массив переворачивается
  return user_numbers.join(""); //массив снова объединяется в строку
}
console.log(reverse(`${palindrom}`)); //вызов ф-ции по параметру,кот.ввел пользователь

if (palindrom == reverse(`${palindrom}`)) {
  // для ф-ции задала переменную. Это неправильно?
  console.log("Это палиндром");
} else {
  console.log("Это не палиндром");
}

let dol = prompt("введите сумму, дол");
let currency = prompt("выберите валюту для пересчета: EUR, UAH или AZN");
if (currency == "EUR") {
  alert(`${dol * 0.9} EUR`);
} else if (currency == "UAH") {
  alert(`${dol * 26} UAH`);
} else if (currency == "AZN") {
  alert(`${dol * 1.7} AZN`);
} else alert("валюта указана неверно");

let invoice = prompt("На какую сумму ваш счет?");
if (isNaN(invoice)) {
  alert("неверный формат");
}
if (invoice < 200) {
  alert(`К оплате ${invoice} грн`);
} else if (invoice <= 300) {
  alert(`К оплате ${invoice * 0.97} грн`);
} else if (invoice > 300 && invoice <= 500) {
  alert(`К оплате ${invoice * 0.95} грн`);
} else if (invoice > 500) {
  alert(`К оплате ${invoice * 0.93} грн`);
}

let l = prompt("длина окружности, см");
let P = prompt("периметр квадрата, см");
if (isNaN(l) || isNaN(P)) {
  alert("неверный формат данных");
} else if (l / Math.PI <= P / 4) {
  console.log("Поместится");
} else {
  console.log("не поместится");
}

let question_1 = prompt(
  "дважды два (выберете один из вариантов а, б или в): а)1   б)3   в)4"
);
let question_2 = prompt(
  "дважды два (выберете один из вариантов а, б или в): а)1   б)4   в)8"
);
let question_3 = prompt(
  "дважды два (выберете один из вариантов а, б или в): а)4   б)3   в)2"
);

if (question_1 == "в") {
  a = 2; //почему тут не нужно объявлять переменную а? убрала let и заработало
} else {
  a = 0;
}

if (question_2 == "б") {
  b = 2;
} else {
  b = 0;
}

if (question_3 == "а") {
  c = 2;
} else {
  c = 0;
}

let answer = a + b + c;
alert(`Вы набрали ${answer} баллов из 6 возможных!`);
