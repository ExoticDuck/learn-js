<template>
  <div :class="$style.container">
    <div class="about">
      <h1>Chapter 1</h1>
    </div>

    <select v-model="selectedTask">
      <option v-for="(task, i) in tasks" :key="i" :value="task.value">
        {{ `Задача ${i + 1}` }}
      </option>
    </select>

    <CodeRunner :defaultCode="selectedTask" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CodeRunner from "@/components/CodeRunner.vue";

// alert("Я JavaScript!");
const task0 = ref(`
// *Работа с переменными
// важность: 2
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin, name;
name = "John";
admin = name;
alert(admin);`);
// *Работа с переменными
// важность: 2
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
function runTask0() {
  let admin, name;
  name = "John";
  admin = name;
  alert(admin);
}

const task1 = ref(`//* Придумайте правильные имена
// важность: 3
// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

let planetName = "Earth";
let currentUserName = "Alex";

// Какие буквы (заглавные или строчные) использовать для имён констант?
// важность: 4
// Рассмотрим следующий код:

const BIRTHDAY = "18.04.1982";

// const age = someCode(birthday);
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?
//Так как birthday - константа, то мы можем назвать ее заглавными, а age - вычисляемое значение, поэтому строчными`);

function runTask1() {
  //* Придумайте правильные имена
  // важность: 3
  // Создайте переменную для названия нашей планеты. Как бы вы её назвали?
  // Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

  let planetName = "Earth";
  let currentUserName = "Alex";

  // Какие буквы (заглавные или строчные) использовать для имён констант?
  // важность: 4
  // Рассмотрим следующий код:

  const BIRTHDAY = "18.04.1982";

  // const age = someCode(birthday);
  // Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?
  //Так как birthday - константа, то мы можем назвать ее заглавными, а age - вычисляемое значение, поэтому строчными
}
const task2 = ref(`//* Шаблонные строки
// важность: 5
// Что выведет этот скрипт?

let name1 = "Ilya";

alert('hello ${1}'); // hello 1

alert('hello ${"name1"}'); // hello name1

alert('hello ${"name1"}'); // hello Ilya`);
//* Шаблонные строки
// важность: 5
// Что выведет этот скрипт?
function runTask2() {
  let name1 = "Ilya";

  alert(`hello ${1}`); // hello 1

  alert(`hello ${"name1"}`); // hello name1

  alert(`hello ${name1}`); // hello Ilya
}

const task3 = ref(`//* Простая страница
// важность: 4
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let nameOfUser = prompt("Введите ваше имя");
if (nameOfUser) {
    alert("Ваше имя " + nameOfUser);
} else {
    alert("Вы не ввели имя");
}
`);
//* Простая страница
// важность: 4
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

function runTask3() {
  let nameOfUser = prompt("Введите ваше имя");
  if (nameOfUser) {
    alert("Ваше имя " + nameOfUser);
  } else {
    alert("Вы не ввели имя");
  }
}

const task4 = ref(`//* Постфиксная и префиксная формы
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1,
b = 1;

let c = ++a; // 2
let d = b++; // 1`);
//* Постфиксная и префиксная формы
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1

const task5 = ref(`//* Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5`);
//* Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

// let a = 2;

// let x = 1 + (a *= 2); // a = 4, x = 5

const task6 = ref(`//* Преобразование типов
// важность: 5
// Какой результат будет у выражений ниже?

"" + 1 + 0; // "10"
"" - 1 + 0; //-1
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //'9px'
"$" + 4 + 5; //'$45'
"4" - 2; //2
"4px" - 2; //NaN
"  -9  " + 5; // -9  5
"  -9  " - 5; // -14
null + 1; //1
undefined + 1; // NaN
" \t \n" - 2; //-2
`);
//* Преобразование типов
// важность: 5
// Какой результат будет у выражений ниже?

// "" + 1 + 0; // "10"
// "" - 1 + 0; //-1
// true + false; //1
// 6 / "3"; //2
// "2" * "3"; //6
// 4 + 5 + "px"; //'9px'
// "$" + 4 + 5; //'$45'
// "4" - 2; //2
// "4px" - 2; //NaN
// "  -9  " + 5; // -9  5
// "  -9  " - 5; // -14
// null + 1; //1
// undefined + 1; // NaN
// " \t \n" - 2; //-2

const task7 = ref(`//* Исправьте сложение
// важность: 5
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.

let a1 = prompt("Первое число?", '1');
let b1 = prompt("Второе число?", '2');

alert(+a1 + +b1); // 12`);
//* Исправьте сложение
// важность: 5
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.
function runTask7() {
  let a1 = +(prompt("Первое число?", "1") || 0);
  let b1 = +(prompt("Второе число?", "2") || 0);

  alert(+a1 + +b1); // 12
}

const task8 = ref(`//* Операторы сравнения
// важность: 5
// Каким будет результат этих выражений?

console.log("5 > 4", 5 > 4); //true
console.log('"ананас" > "яблоко"', "ананас" > "яблоко"); //false
console.log('"2" > "12" ', "2" > "12"); //true
console.log("undefined == null", undefined == null); //true
console.log("undefined === null", undefined === null); //false
console.log('null == "\n0\n"', null == "\n0\n"); //false
console.log('null === +"\n0\n"', null === +"\n0\n"); //false`);
//* Операторы сравнения
// важность: 5
// Каким будет результат этих выражений?
function runTask8() {
  console.log("5 > 4", 5 > 4); //true
  console.log('"ананас" > "яблоко"', "ананас" > "яблоко"); //false
  console.log('"2" > "12" ', "2" > "12"); //true
  console.log("undefined == null", undefined == null); //true
  console.log("undefined === null", undefined === null); //false
  console.log('null == "\n0\n"', null == "\n0\n"); //false
  console.log('null === +"\n0\n"', null === +"\n0\n"); //false
}
const task9 = ref(`
//* if (строка с нулём)
// важность: 5
// Выведется ли alert?

if ("0") {
    alert("Привет");
}
//да, тк строка не пустая
`);
//* if (строка с нулём)
// важность: 5
// Выведется ли alert?
function runTask9() {
  //@ts-ignore
  if ("0") {
    alert("Привет");
  }
  //да, тк строка не пустая
}

const task10 = ref(`//* Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const nameOfJS = prompt("Какое «официальное» название JavaScript?");

if (nameOfJS === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}`);
//* Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
function runTask10() {
  const nameOfJS = prompt("Какое «официальное» название JavaScript?");

  if (nameOfJS === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
}

const task11 = ref(`//* Покажите знак числа
// важность: 2
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

let number = +prompt("Введите число");

if (number > 0) {
  alert(1);
} else if (number === 0) {
  alert(0);
} else {
  alert(-1);
}`);
//* Покажите знак числа
// важность: 2
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
function runTask11() {
  let number = +(prompt("Введите число") || 0);

  if (number > 0) {
    alert(1);
  } else if (number === 0) {
    alert(0);
  } else {
    alert(-1);
  }
}

const task12 = ref(`//* Перепишите 'if' в '?'
// важность: 5
// Перепишите конструкцию if с использованием условного оператора '?':

let result;
  let a = +prompt("Ведите а");
  let b = +prompt("Ведите b");
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

result = a + b > 4 ? "Мало" : "Много";`);
//* Перепишите 'if' в '?'
// важность: 5
// Перепишите конструкцию if с использованием условного оператора '?':
function runTask12() {
  let result;
  let a = prompt("Ведите а");
  let b = prompt("Ведите b");
  const numberValue1 = a !== null ? +a : NaN;
  const numberValue2 = b !== null ? +b : NaN;

  if (numberValue1 + numberValue2 < 4) {
    result = "Мало";
  } else {
    result = "Много";
  }

  result = numberValue1 + numberValue2 > 4 ? "Мало" : "Много";
}
const task13 = ref(`//* Перепишите 'if..else' в '?'
// важность: 5
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }
const login = "Сотрудник";
message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
console.log(message);`);
//* Перепишите 'if..else' в '?'
// важность: 5
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.
function runTask13() {
  let message;

  // if (login == "Сотрудник") {
  //   message = "Привет";
  // } else if (login == "Директор") {
  //   message = "Здравствуйте";
  // } else if (login == "") {
  //   message = "Нет логина";
  // } else {
  //   message = "";
  // }

  const login = "Сотрудник";
  message =
    login == "Сотрудник"
      ? "Привет"
      : login == "Директор"
        ? "Здравствуйте"
        : login == ""
          ? "Нет логина"
          : "";
  console.log(message);
}

//* Что выведет alert (ИЛИ)?
// важность: 5
// Что выведет код ниже?

// alert(null || 2 || undefined); //2

//* Что выведет alert (ИЛИ)?
// важность: 3
// Что выведет код ниже?

// alert(alert(1) || 2 || alert(3)); //2

//* Что выведет alert (И)?
// важность: 5
// Что выведет код ниже?

// alert(1 && null && 2); //null

//* Что выведет alert (И)?
// важность: 3
// Что выведет код ниже?

// alert(alert(1) && alert(2)); //null

//* Что выведет этот код?
// важность: 5
// Что выведет код ниже?

// alert(null || (2 && 3) || 4); //3

//* Что выведет этот код (||=, &&=)?
// важность: 2
// Что выведет код ниже?

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

// alert(value); //30

const task14 = ref(`//* Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = +prompt("Сколько вам лет");

if (age >= 14 && age <= 90) {
  alert("Вам от 14 до 90 лет");
}`);
//* Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
function runTask14() {
  let age = prompt("Сколько вам лет");
  const numberValue = age !== null ? +age : NaN;

  if (numberValue >= 14 && numberValue <= 90) {
    alert("Вам от 14 до 90 лет");
  }

  if (numberValue < 14 || numberValue > 90) {
    alert("Вам до 14 или от 90 лет");
  }

  if (!(numberValue >= 14 && numberValue <= 90)) {
    alert("Вам до 14 или от 90 лет");
  }
}
//* Проверка значения вне диапазона
// важность: 3

//* Вопрос об "if"
// важность: 5
// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert("first"); // first
// if (-1 && 0) alert("second"); // -
// if (null || (-1 && 1)) alert("third"); // third

const task15 = ref(`//* Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

let login = prompt("Введите логин");
if (login === "Админ") {
  let password = prompt("Введите пароль");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}`);
//* Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».
function runTask15() {
  let login = prompt("Введите логин");
  if (login === "Админ") {
    let password = prompt("Введите пароль");
    if (password === "Я главный") {
      alert("Здравствуйте!");
    } else if (password === "" || password === null) {
      alert("Отменено");
    } else {
      alert("Неверный пароль");
    }
  } else {
    alert("Я вас не знаю");
  }
}

//* Что выведет этот код?
// важность: 3
// Что выведет код ниже?

// alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

//* Какой будет результат выполнения этого кода?
// важность: 3
// Что будет выведено в итоге?

let city = null;

city ??= "Берлин"; // city = Берлин
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

// alert(city); // Берлин

const task16 = ref(`//* Перепишите код используя операторы ??, ??=
// важность: 3
// Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10,
  num2 = 20,
  result1;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

result1 ??= num1 ?? num2;`);
//* Перепишите код используя операторы ??, ??=
// важность: 3
// Перепишите этот код используя операторы нулевого слияния и присваивания.

function runTask16() {
  let num1 = 10,
    num2 = 20,
    result1;

  // if (result === null || result === undefined) {
  //   if (num1 !== null && num1 !== undefined) {
  //     result = num1;
  //   } else {
  //     result = num2;
  //   }
  // }

  result1 ??= num1 ?? num2;
  alert(result1);
}
//* Циклы

const task17 = ref(`//* Последнее значение цикла
// важность: 3
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--); //1
}`);
//* Последнее значение цикла
// важность: 3
// Какое последнее значение выведет этот код? Почему?
function runTask17() {
  let i = 3;

  while (i) {
    alert(i--); //1
  }
}

const task18 = ref(`//* Какие значения выведет цикл while?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i); //1, 2, 3, 4
// Постфиксный вариант i++

let j = 0;
while (j++ < 5) alert(j); // 1, 2, 3, 4, 5`);
//* Какие значения выведет цикл while?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

function runTask18() {
  let i = 0;
  while (++i < 5) alert(i); //1, 2, 3, 4
  // Постфиксный вариант i++

  let j = 0;
  while (j++ < 5) alert(j); // 1, 2, 3, 4, 5
}

const task19 = ref(`//* Какие значения выведет цикл for?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
// Префиксная форма:

for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4`);
//* Какие значения выведет цикл for?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:
function runTask19() {
  for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
  // Префиксная форма:

  for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4
}

const task20 = ref(`//* Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`);
//* Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

function runTask20() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

const task21 = ref(`//* Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert('number $ {i}!'');
// }
let i = 0;
while (i < 3) {
  console.log('number $ {i}!');
  i++;
}`);
//* Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
function runTask21() {
  // for (let i = 0; i < 3; i++) {
  //   alert(`number ${i}!`);
  // }
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i++;
  }
}

const task22 = ref(`//* Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let num = 0;

while (num < 100) {
  num = +prompt("ввести число, большее 100");
  if (num === null) {
    break;
  }
  if (num > 100) {
    break;
  }
}`);
//* Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

function runTask22() {
  let num = 0;

  while (num < 100) {
    let promptValue = prompt("ввести число, большее 100");
    const num = promptValue !== null ? +promptValue : NaN;

    if (num === null) {
      break;
    }
    if (num > 100) {
      break;
    }
  }
}
const task23 = ref(`//* Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 30;

nextPrime: for (let i = 2; i <= n; i++) {
  //копипаст, не знал что можно метки использовать
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}`);
//* Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.
function runTask23() {
  let n = 30;

  nextPrime: for (let i = 2; i <= n; i++) {
    //копипаст, не знал что можно метки использовать
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}

const task24 = ref(`//* Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

let browser = prompt("Какой вы используете браузер?");

if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}`);
//* Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }
function runTask24() {
  let browser = prompt("Какой вы используете браузер?");

  if (browser === "Edge") {
    console.log("You've got the Edge!");
  } else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
  ) {
    console.log("Okay we support these browsers too");
  } else {
    console.log("We hope that this page looks ok!");
  }
}

const task25 = ref(`const number = +prompt("Введите число между 0 и 3", "");

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
    console.log("Вы ввели число 2, а может и 3");
    break;
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
  default:
    break;
}`);
//* Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
function runTask25() {
  const number = prompt("Введите число между 0 и 3", "");
  const numberValue = number !== null ? +number : NaN;
  // if (number === 0) {
  //   alert('Вы ввели число 0');
  // }

  // if (number === 1) {
  //   alert('Вы ввели число 1');
  // }

  // if (number === 2 || number === 3) {
  //   alert('Вы ввели число 2, а может и 3');
  // }

  switch (numberValue) {
    case 0:
      console.log("Вы ввели число 0");
      break;
    case 1:
      console.log("Вы ввели число 1");
      break;
    case 2:
      console.log("Вы ввели число 2, а может и 3");
      break;
    case 3:
      console.log("Вы ввели число 2, а может и 3");
      break;
    default:
      break;
  }
}

const task26 = ref(`//* Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

console.log(checkAge(22));`);
//* Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

function runTask26() {
  function checkAge(age: number) {
    return age > 18 || confirm("Родители разрешили?");
  }

  console.log(checkAge(22));
}

const task27 = ref(`//* Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}`);

//* Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
function runTask27() {
  function min(a: number, b: number) {
    return a < b ? a : b;
  }

  alert(min(2, 5));
}

const task28 = ref(`//* Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(a, b) {
  let res = a;
  let base = b;
  while (base > 1) {
    res *= a;
    base--;
  }
  return res;
}

console.log(pow(3, 4));`);
//* Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function runTask28() {
  function pow(a: number, b: number) {
    let res = a;
    let base = b;
    while (base > 1) {
      res *= a;
      base--;
    }
    return res;
  }

  console.log(pow(3, 4));
}

const task29 = ref(`//* Задачи
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);`);
//* Задачи
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
function runTask29() {
  const ask = (question: string, yes: () => void, no: () => void) => {
    if (confirm(question)) yes();
    else no();
  };

  ask(
    "Вы согласны?",
    () => {
      alert("Вы согласились.");
    },
    () => {
      alert("Вы отменили выполнение.");
    }
  );
}

const tasks = [
  task0,
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
  task10,
  task11,
  task12,
  task13,
  task14,
  task15,
  task16,
  task17,
  task18,
  task19,
  task20,
  task21,
  task22,
  task23,
  task24,
  task25,
  task26,
  task27,
  task28,
  task29,
];

const selectedTask = ref(task0);
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
