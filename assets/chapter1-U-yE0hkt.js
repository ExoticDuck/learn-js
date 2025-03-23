import{C as o}from"./CodeDisplay-BM2OI5dk.js";import{d as ge,r as a,a as me,o as pe,b as u,e as n,w as s,n as de,f as be,_ as ke}from"./index-D6pjww6V.js";const ve=ge({__name:"chapter1",setup(xe){const c=a(`
// *Работа с переменными
// важность: 2
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin, name;
name = "John";
admin = name;
alert(admin);`);function f(){let e,t;t="John",e=t,alert(e)}const h=a(`//* Придумайте правильные имена
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
//Так как birthday - константа, то мы можем назвать ее заглавными, а age - вычисляемое значение, поэтому строчными`);function g(){}const m=a(`//* Шаблонные строки
// важность: 5
// Что выведет этот скрипт?

let name1 = "Ilya";

alert('hello 1'); // hello 1

alert('hello name1'); // hello name1

alert('hello name1'); // hello Ilya`);function p(){let e="Ilya";alert("hello 1"),alert("hello name1"),alert(`hello ${e}`)}const d=a(`//* Простая страница
// важность: 4
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let nameOfUser = prompt("Введите ваше имя");
if (nameOfUser) {
    alert("Ваше имя " + nameOfUser);
} else {
    alert("Вы не ввели имя");
}
`);function b(){let e=prompt("Введите ваше имя");alert(e?"Ваше имя "+e:"Вы не ввели имя")}const k=a(`//* Постфиксная и префиксная формы
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1,
b = 1;

let c = ++a; // 2
let d = b++; // 1`),v=a(`//* Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5`),j=a(`//* Преобразование типов
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
" 	 
" - 2; //-2
`),w=a(`//* Исправьте сложение
// важность: 5
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.

let a1 = prompt("Первое число?", '1');
let b1 = prompt("Второе число?", '2');

alert(+a1 + +b1); // 12`);function _(){let e=prompt("Первое число?","1"),t=prompt("Второе число?","2");alert(+e+ +t)}const y=a(`//* Операторы сравнения
// важность: 5
// Каким будет результат этих выражений?

console.log("5 > 4", 5 > 4); //true
console.log('"ананас" > "яблоко"', "ананас" > "яблоко"); //false
console.log('"2" > "12" ', "2" > "12"); //true
console.log("undefined == null", undefined == null); //true
console.log("undefined === null", undefined === null); //false
console.log('null == "
0
"', null == "
0
"); //false
console.log('null === +"
0
"', null === +"
0
"); //false`);function x(){console.log("5 > 4",!0),console.log('"ананас" > "яблоко"',!1),console.log('"2" > "12" ',!0),console.log("undefined == null",!0),console.log("undefined === null",!1),console.log(`null == "
0
"`,!1),console.log(`null === +"
0
"`,!1)}const E=a(`
//* if (строка с нулём)
// важность: 5
// Выведется ли alert?

if ("0") {
    alert("Привет");
}
//да, тк строка не пустая
`);function T(){alert("Привет")}const C=a(`//* Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const nameOfJS = prompt("Какое «официальное» название JavaScript?");

if (nameOfJS === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}`);function S(){const e=prompt("Какое «официальное» название JavaScript?");alert(e==="ECMAScript"?"Верно!":"Не знаете? ECMAScript!")}const O=a(`//* Покажите знак числа
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
}`);function $(){let e=+prompt("Введите число");e>0?alert(1):alert(e===0?0:-1)}const A=a(`//* Перепишите 'if' в '?'
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

result = a + b > 4 ? "Мало" : "Много";`);function J(){+prompt("Ведите а"),+prompt("Ведите b")}const M=a(`//* Перепишите 'if..else' в '?'
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
console.log(message);`);function N(){let e;e="Привет",console.log(e)}const B=a(`//* Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = +prompt("Сколько вам лет");

if (age >= 14 && age <= 90) {
  alert("Вам от 14 до 90 лет");
}`);function U(){let e=+prompt("Сколько вам лет");e>=14&&e<=90&&alert("Вам от 14 до 90 лет"),(e<14||e>90)&&alert("Вам до 14 или от 90 лет"),e>=14&&e<=90||alert("Вам до 14 или от 90 лет")}const q=a(`//* Проверка логина
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
}`);function F(){if(prompt("Введите логин")==="Админ"){let t=prompt("Введите пароль");alert(t==="Я главный"?"Здравствуйте!":t===""||t===null?"Отменено":"Неверный пароль")}else alert("Я вас не знаю")}const I=a(`//* Перепишите код используя операторы ??, ??=
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

result1 ??= num1 ?? num2;`);function V(){let e=10,t;t??(t=e),alert(t)}const Y=a(`//* Последнее значение цикла
// важность: 3
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--); //1
}`);function P(){let e=3;for(;e;)alert(e--)}const W=a(`//* Какие значения выведет цикл while?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i); //1, 2, 3, 4
// Постфиксный вариант i++

let j = 0;
while (j++ < 5) alert(j); // 1, 2, 3, 4, 5`);function D(){let e=0;for(;++e<5;)alert(e);let t=0;for(;t++<5;)alert(t)}const z=a(`//* Какие значения выведет цикл for?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
// Префиксная форма:

for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4`);function H(){for(let e=0;e<5;e++)alert(e);for(let e=0;e<5;++e)alert(e)}const R=a(`//* Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`);function G(){for(let e=2;e<=10;e++)e%2===0&&console.log(e)}const K=a(`//* Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert('number $ {i}!'');
// }
let i = 0;
while (i < 3) {
  console.log('number $ {i}!');
  i++;
}`);function L(){let e=0;for(;e<3;)console.log(`number ${e}!`),e++}const Q=a(`//* Повторять цикл, пока ввод неверен
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
}`);function X(){let e=0;for(;e<100&&(e=+prompt("ввести число, большее 100"),!(e===null||e>100)););}const Z=a(`//* Вывести простые числа
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
}`);function ee(){let e=30;e:for(let t=2;t<=e;t++){for(let l=2;l<t;l++)if(t%l==0)continue e;console.log(t)}}const ne=a(`//* Напишите "if", аналогичный "switch"
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
}`);function le(){let e=prompt("Какой вы используете браузер?");console.log(e==="Edge"?"You've got the Edge!":e==="Chrome"||e==="Firefox"||e==="Safari"||e==="Opera"?"Okay we support these browsers too":"We hope that this page looks ok!")}const te=a(`const number = +prompt("Введите число между 0 и 3", "");

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
}`);function oe(){switch(+prompt("Введите число между 0 и 3","")){case 0:console.log("Вы ввели число 0");break;case 1:console.log("Вы ввели число 1");break;case 2:console.log("Вы ввели число 2, а может и 3");break;case 3:console.log("Вы ввели число 2, а может и 3");break}}const ae=a(`//* Перепишите функцию, используя оператор '?' или '||'
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

console.log(checkAge(22));`);function se(){function e(t){return t>18}console.log(e(22))}const re=a(`//* Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}`);function ie(){function e(t,l){return t}alert(e(2))}const ue=a(`//* Функция pow(x,n)
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

console.log(pow(3, 4));`);function ce(){function e(t,l){let r=t,i=l;for(;i>1;)r*=t,i--;return r}console.log(e(3,4))}const fe=a(`//* Задачи
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
);`);function he(){((t,l,r)=>{confirm(t)?l():r()})("Вы согласны?",()=>{alert("Вы согласились.")},()=>{alert("Вы отменили выполнение.")})}return(e,t)=>{const l=be("VCodeBlock");return pe(),me("div",{class:de(e.$style.container)},[t[0]||(t[0]=u("div",{class:"about"},[u("h1",null,"Chapter 1")],-1)),n(o,{onExecute:f},{default:s(()=>[n(l,{code:c.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:g},{default:s(()=>[n(l,{code:h.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:p},{default:s(()=>[n(l,{code:m.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:b},{default:s(()=>[n(l,{code:d.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,null,{default:s(()=>[n(l,{code:k.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,null,{default:s(()=>[n(l,{code:v.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,null,{default:s(()=>[n(l,{code:j.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:_},{default:s(()=>[n(l,{code:w.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:x},{default:s(()=>[n(l,{code:y.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:T},{default:s(()=>[n(l,{code:E.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:S},{default:s(()=>[n(l,{code:C.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:$},{default:s(()=>[n(l,{code:O.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:J},{default:s(()=>[n(l,{code:A.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:N},{default:s(()=>[n(l,{code:M.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:U},{default:s(()=>[n(l,{code:B.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:F},{default:s(()=>[n(l,{code:q.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:V},{default:s(()=>[n(l,{code:I.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:P},{default:s(()=>[n(l,{code:Y.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:D},{default:s(()=>[n(l,{code:W.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:H},{default:s(()=>[n(l,{code:z.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:G},{default:s(()=>[n(l,{code:R.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:L},{default:s(()=>[n(l,{code:K.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:X},{default:s(()=>[n(l,{code:Q.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:ee},{default:s(()=>[n(l,{code:Z.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:le},{default:s(()=>[n(l,{code:ne.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:oe},{default:s(()=>[n(l,{code:te.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:se},{default:s(()=>[n(l,{code:ae.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:ie},{default:s(()=>[n(l,{code:re.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:ce},{default:s(()=>[n(l,{code:ue.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:he},{default:s(()=>[n(l,{code:fe.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1})],2)}}}),je="_container_1ill7_2",we="_about_1ill7_8",_e={container:je,about:we},ye={$style:_e},Ce=ke(ve,[["__cssModules",ye]]);export{Ce as default};
