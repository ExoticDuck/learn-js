export type TaskType = {
  id: string
  task: string
}

export const firstChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
// *Работа с переменными
// важность: 2
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin, name;
name = "John";
admin = name;
alert(admin);`
  },
  {
    id: '2',
    task: `//* Придумайте правильные имена
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
//Так как birthday - константа, то мы можем назвать ее заглавными, а age - вычисляемое значение, поэтому строчными`
  },
  {
    id: '3',
    task: `//* Шаблонные строки
// важность: 5
// Что выведет этот скрипт?

let name1 = "Ilya";

alert('hello ${1}'); // hello 1

alert('hello ${'name1'}'); // hello name1

alert('hello ${'name1'}'); // hello Ilya`
  },
  {
    id: '4',
    task: `//* Простая страница
// важность: 4
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let nameOfUser = prompt("Введите ваше имя");
if (nameOfUser) {
    alert("Ваше имя " + nameOfUser);
} else {
    alert("Вы не ввели имя");
}
`
  },
  {
    id: '5',
    task: `//* Постфиксная и префиксная формы
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1,
b = 1;

let c = ++a; // 2
let d = b++; // 1`
  },
  {
    id: '6',
    task: `//* Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5`
  },
  {
    id: '7',
    task: `//* Преобразование типов
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
`
  },
  {
    id: '8',
    task: `//* Исправьте сложение
// важность: 5
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.

let a1 = prompt("Первое число?", '1');
let b1 = prompt("Второе число?", '2');

alert(+a1 + +b1); // 12`
  },
  {
    id: '9',
    task: `//* Операторы сравнения
// важность: 5
// Каким будет результат этих выражений?

console.log("5 > 4", 5 > 4); //true
console.log('"ананас" > "яблоко"', "ананас" > "яблоко"); //false
console.log('"2" > "12" ', "2" > "12"); //true
console.log("undefined == null", undefined == null); //true
console.log("undefined === null", undefined === null); //false
console.log('null == "\n0\n"', null == "\n0\n"); //false
console.log('null === +"\n0\n"', null === +"\n0\n"); //false`
  },
  {
    id: '10',
    task: `
//* if (строка с нулём)
// важность: 5
// Выведется ли alert?

if ("0") {
    alert("Привет");
}
//да, тк строка не пустая
`
  },
  {
    id: '11',
    task: `//* Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const nameOfJS = prompt("Какое «официальное» название JavaScript?");

if (nameOfJS === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}`
  },
  {
    id: '12',
    task: `//* Покажите знак числа
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
}`
  },
  {
    id: '13',
    task: `//* Перепишите 'if' в '?'
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

result = a + b > 4 ? "Мало" : "Много";`
  },
  {
    id: '14',
    task: `//* Перепишите 'if..else' в '?'
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
console.log(message);`
  },
  {
    id: '14',
    task: `//* Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = +prompt("Сколько вам лет");

if (age >= 14 && age <= 90) {
  alert("Вам от 14 до 90 лет");
}`
  },
  {
    id: '15',
    task: `//* Проверка значения из диапазона
// важность: 3
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = +prompt("Сколько вам лет");

if (age >= 14 && age <= 90) {
  alert("Вам от 14 до 90 лет");
}`
  },
  {
    id: '15',
    task: `//* Проверка логина
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
}`
  },
  {
    id: '16',
    task: `//* Перепишите код используя операторы ??, ??=
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

result1 ??= num1 ?? num2;`
  },
  {
    id: '17',
    task: `//* Последнее значение цикла
// важность: 3
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert(i--); //1
}`
  },
  {
    id: '18',
    task: `//* Какие значения выведет цикл while?
// важность: 4
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i); //1, 2, 3, 4
// Постфиксный вариант i++

let j = 0;
while (j++ < 5) alert(j); // 1, 2, 3, 4, 5`
  },
  {
    id: '19',
    task: `//* Какие значения выведет цикл for?
        // важность: 4
        // Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
        
        // Оба цикла выведут alert с одинаковыми значениями или нет?
        
        // Постфиксная форма:
        
        for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
        // Префиксная форма:
        
        for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4`
  },
  {
    id: '20',
    task: `//* Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`
  },
  {
    id: '21',
    task: `//* Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert('number $ {i}!'');
// }
let i = 0;
while (i < 3) {
  console.log('number $ {i}!');
  i++;
}`
  },
  {
    id: '22',
    task: `//* Повторять цикл, пока ввод неверен
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
}`
  },
  {
    id: '23',
    task: `//* Вывести простые числа
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
}`
  },
  {
    id: '24',
    task: `//* Напишите "if", аналогичный "switch"
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
}`
  },
  {
    id: '25',
    task: `const number = +prompt("Введите число между 0 и 3", "");

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
}`
  },
  {
    id: '26',
    task: `//* Перепишите функцию, используя оператор '?' или '||'
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

console.log(checkAge(22));`
  },
  {
    id: '27',
    task: `//* Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}`
  },
  {
    id: '28',
    task: `//* Функция pow(x,n)
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

console.log(pow(3, 4));`
  },
  {
    id: '29',
    task: `//* Задачи
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
);`
  }
]

export const secondChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `//* Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

type User = {
  name?: string;
  surname?: string;
};
let user: User = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user)`
  },
  {
    id: '2',
    task: `// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (const key in obj) {
    if (key in obj) {
      return true;
    }
  }
  return false;
}

console.log(isEmpty({ name: "john" }));
console.log(isEmpty({}));`
  },
  {
    id: '3',
    task: `// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user1 = {
  name: "John",
};

// это будет работать?
user1.name = "Pete"; //да, т.к. в переменной хранится ссылка на значение объекта. При изменении свойства ссылка останется неизменной.`
  },
  {
    id: '4',
    task: `// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

function getSumSalary(obj) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(getSumSalary(salaries));`
  },
  {
    id: '5',
    task: `// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
console.log(menu);`
  },
  {
    id: '6',
    task: `// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user2 = makeUser();

console.log( user2.ref.name ); // Каким будет результат? - ошибка, ref можно сделать методом и вернуть this`
  },
  {
    id: '7',
    task: `// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("Введите a");
    this.b = +prompt("Введите b");
    return this;
  },
  sum() {
    return this.a + this.b;
  },
  multiply() {
    return this.a + this.b;
  },
};

console.log(calculator.read().sum(), calculator.read().multiply());`
  },
  {
    id: '8',
    task: `// Цепь вызовов
// важность: 2
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0`
  },
  {
    id: '9',
    task: `//  Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function () {
    this.a = +prompt("Введите a");
    this.b = +prompt("Введите b");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator1 = new Calculator();
calculator1.read();

alert("Sum=" + calculator1.sum());
alert("Mul=" + calculator1.mul());`
  },
  {
    id: '10',
    task: `// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
  this.value = startingValue || 0;
  this.read = function () {
    let increment = +prompt("Введите число");
    this.value += increment;
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений`
  }
]

export const thirdChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const a = +prompt("Введите первое число"); //prompt вернет строку, поэтому преобразуем к числу через +
const b = +prompt("Введите второе число");

console.log(a + b);`
  },
  {
    id: '2',
    task: `function ucFirst(str) {
    let result = str
    .split("")
    .map((key, i) => (i === 0 ? key.toUpperCase() : key))
    .join('')
    console.log(result);
    return result;
}

ucFirst("вася")`
  },
  {
    id: '3',
    task: `function checkSpam(str) {
  const toLower = str.toLowerCase();
  let result = false;
  if (toLower.includes("xxx") || toLower.includes("viagra")) {
    result = true;
    console.log(result);
    return result;
  }
  console.log(result);
  return result;
}

checkSpam("buy ViAgRA now")
`
  },
  {
    id: '4',
    task: `function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)`
  },
  {
    id: '5',
    task: `
function extractCurrencyValue(currency) {
  return +currency.substring(1);
}

extractCurrencyValue("$120")`
  },
  {
    id: '6',
    task: `function copyArray() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits?
  alert(fruits.length); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)
}`
  },
  {
    id: '7',
    task: `function getStyles() {
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
cons`
  },
  {
    id: '8',
    task: `
// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
  const arr = [];
  while (true) {
    const num = prompt("Введите число", "0");
    if (num === null || num === "" || isNaN(+num)) {
      break;
    }
    arr.push(+num);
  }
  const result = arr.reduce((acc, el) => acc + el, 0);
  alert(result);
  return result;
}

`
  },
  {
    id: '9',
    task: `// Подмассив наибольшей суммы
// важность: 2
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)

function getMaxSubSum(arr) {
  let result = 0;
  let sum = 0;
  for (const item of arr) {
    sum += item;
    result = Math.max(result, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  alert(result)
  return result;
}

getMaxSubSum([-1, 2, 3, -9, 11])
`
  },
  {
    id: '10',
    task: `// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
   const result = str
    .split("-")
    .map((el, i) => {
      if (i == 0) {
        return el;
      }
      const arr = el.split("");
      arr[0] = arr[0].toUpperCase();
      return arr.join("");
    })
    .join("");
  alert(result);
  return result;
}

camelize("background-color")
`
  },
  {
    id: '11',
    task: `// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const result = arr.filter((el) => el >= a && el <= b);
  alert(result); // 3,1 (совпадающие значения)
  alert(arr);  // 5,3,8,1 (без изменений)
  return result;
}

`
  },
  {
    id: '12',
    task: `
// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

 let arr3 = [5, 3, 8, 1];
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  filterRangeInPlace(arr3, 1, 4); // удалены числа вне диапазона 1..4

  alert(arr3); // [3, 1]
`
  },
  {
    id: '13',
    task: `
// Сортировать в порядке по убыванию
// важность: 4

  let arr4 = [5, 2, 1, -10, 8];
  arr4.sort((a, b) => b - a);

  console.log(arr4); // 8, 5, 2, 1, -10
`
  },
  {
    id: '14',
    task: `
// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr5 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  const copy = [...arr];
  return copy.sort();
}
let sorted = copySorted(arr5);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr5); // HTML, JavaScript, CSS (без изменений)
}
`
  },
  {
    id: '15',
    task: `// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
    };
    this.calculate = function (str) {
      let [a, operator, b] = str.split(" ");
      return this.methods[operator](+a, +b);
    };
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }

  let calc = new Calculator();

  console.log(calc.calculate("3 + 7")); // 10

  calc.addMethod("**", (a, b) => a ** b);

  console.log(calc.calculate("2 ** 3")); //8
`
  },
  {
    id: '16',
    task: `
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((el) => el.name);

console.log(names); // Вася, Петя, Маша
`
  },
  {
    id: '17',
    task: `// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map((el) => ({
  fullName: el.name + " " + el.surname,
  id: el.id,
}));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин`
  },
  {
    id: '18',
    task: `// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr6 = [vasya2, petya2, masha2];
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
sortByAge(arr6);

// теперь: [vasya, masha, petya]
console.log(arr6[0].name, arr6[1].name, arr6[2].name); // Вася Маша Петя
`
  },
  {
    id: '19',
    task: `// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) //случайный индекс от 0 до i
    [arr[i], arr[j]] = [arr[j], arr[i]]; //поменяли местами
  }
}

let testArr = [1, 2, 3];
shuffle(testArr)
console.log(testArr);`
  },
  {
    id: '20',
    task: `// console.time("start");
// const res1 = [...arr11, ...arr12];
// console.timeEnd("start");

// console.time("start2");
// const res2 = arr11.concat(arr12);
// console.timeEnd("start2");

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr7 = [vasya3, petya3, masha3];

function getAverageAge(arr) {
  return Math.round(
    arr.reduce((acc, person) => acc + person.age, 0) / arr.length
  );
}

alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28`
  },
  {
    id: '21',
    task: `// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
  const uniqueElements = [];
  arr.forEach((el) => {
    if (!uniqueElements.includes(el)) {
      uniqueElements.push(el);
    }
  });
  return uniqueElements.join(", ");
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O`
  },
  {
    id: '22',
    task: `// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// Например:

let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  return users.reduce((result, el) => {
    return { ...result, [el.id]: { name: el.name, age: el.age } };
  }, {});
}

let usersById = groupById(users2);
console.log(usersById);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/`
  },
  {
    id: '23',
    task: `// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let result = 0;
  if (!Object.keys(salaries).length) return result;
  for (const salary of Object.values(salaries)) {
    result += salary as number;
  }
  return result;
}

console.log(sumSalaries(salaries)); // 650`
  },
  {
    id: '24',
    task: `// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2`
  },
  {
    id: '25',
    task: `// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

type Salary = {
  John: number;
  Pete: number;
  Mary: number;
};
let salaries2: Salary = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries: Salary) {
  if (!Object.keys(salaries).length) {
    return null;
  }
  let highestSalary = 0;
  let nameOfEmployee = "";
  for (const [key, value] of Object.entries(salaries)) {
    if (value > highestSalary) {
      highestSalary = value;
      nameOfEmployee = key;
    }
  }
  return nameOfEmployee;
}
console.log(topSalary(salaries2));`
  },
  {
    id: '26',
    task: `
// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12)
alert(date)
`
  },
  {
    id: '27',
    task: `// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date1 = new Date(2012, 0, 3); // 3 января 2012 года

const getWeekDay = (date) => {
  const dayFromDate = date.getDay();
  console.log(dayFromDate);

  const days = {
    0: "ПН",
    1: "ВТ",
    2: "СР",
    3: "ЧТ",
    4: "ПТ",
    5: "СБ",
    6: "ВС",
  };
  return days[dayFromDate];
};
console.log(getWeekDay(date1)); // нужно вывести "ВТ"`
  },
  {
    id: '28',
    task: `// День недели в европейской нумерации
// важность: 5
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date2 = new Date(2012, 0, 3); // 3 января 2012 года

const getLocalDay = (date) => {
  return date.getDay();
};
alert(getLocalDay(date2)); // вторник, нужно показать 2`
  },
  {
    id: '29',
    task: `// Какой день месяца был много дней назад?
// важность: 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

let date3 = new Date(2015, 0, 2);

const getDateAgo = (date, days) => {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - days);
  return copy.getDate();
};
alert(getDateAgo(date3, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date3, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date3, 365)); // 2, (2 Jan 2014)`
  },
  {
    id: '31',
    task: `// Сколько сегодня прошло секунд?
// важность: 5
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToday = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return hours * 3600 + minutes * 60 + seconds;
};

console.log(getSecondsToday());`
  },
  {
    id: '32',
    task: `// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow = () => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0,
    0
  );
  const diff = tomorrow.getTime() - now.getTime();
  return Math.round(diff / 1000);
};

console.log(getSecondsToTomorrow());`
  },
  {
    id: '33',
    task: `// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

const formatDate = (date: Date) => {
  const now = new Date();
  const diffMilliseconds = now.getTime() - date.getTime();
  const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);
  const diffMinutes = Math.round(diffSeconds / 60);
  if (diffMilliseconds < 1000) {
    return "прямо сейчас";
  }
  if (diffSeconds > 1000 && diffSeconds < 60) {
    return $ {diffSeconds} сек. назад;
  }
  if (diffMinutes < 60) {
    return $ {diffMinutes} минут назад;
  }
  const day = date.getDate();
  const month = date.getMonth() + 1; //тк месяца нумеруются с 0
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return $ {day}.$ {month}.$ {year} $ {hours}:$ {minutes};
};

alert(formatDate(new Date(new Date().getTime() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date().getTime() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date().getTime() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date().getTime() - 86400 * 1000)));`
  }
]

export const fourthChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

alert(sumTo(4));`
  },
  {
    id: '2',
    task: `// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n: number) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

alert(factorial(5));`
  },
  {
    id: '3',
    task: `// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n: number) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

alert(fib(5));`
  },
  {
    id: '4',
    task: `// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

function printList(list) {
  // let currentList = list;
  // while (currentList) {
  //   console.log(currentList.value);
  //   currentList = currentList.next;
  // }
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);`
  },
  {
    id: '5',
    task: `// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printListReverse(list) {
  // const res = [];
  // let currentList = list;
  // while (currentList) {
  //   res.unshift(currentList.value);
  //   currentList = currentList.next;
  // }
  // res.forEach((value) => console.log(value));

  if (list.next) {
    printListReverse(list.next);
  }
  console.log(list.value);
}

printListReverse(list)`
  },
  {
    id: '6',
    task: `// Учитывает ли функция последние изменения?
// важность: 5
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); //"Pete"`
  },
  {
    id: '7',
    task: `// Какие переменные доступны?
// важность: 5
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.

// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
  let name1 = "Pete";

  return function() {
    alert(name1);
  };
}

let name1 = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано? Pete`
  },
  {
    id: '8',
    task: `// Независимы ли счётчики?
// важность: 5
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1, тк они созданы двумя разными вызовами функции.`
  },
  {
    id: '9',
    task: `// Объект счётчика
// важность: 5
// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

function Counter(this: {
  count: number;
  up: () => number;
  down: () => number;
}) {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
const counter1 = Object.create(Counter.prototype);
Counter.call(counter1);

alert(counter1.up()); // 1
alert(counter1.up()); // 2
alert(counter1.down()); // 1
`
  },
  {
    id: '10',
    task: `// Функция внутри if
// важность: 5
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert($ {phrase}, $ {user});
  }
}

sayHi(); // undefined
`
  },
  {
    id: '11',
    task: `// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

function sum(a: number) {
  return function (b: number) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));`
  },
  {
    id: '12',
    task: `// Видна ли переменная?
// важность: 4
// Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // error, обращение до инициализации

  let x = 2;
}

func();`
  },
  {
    id: '13',
    task: `// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a: number, b: number) {
  return (el: number) => el >= a && el <= b;
}

function inArray(arr: number[]) {
  return (el: number) => arr.includes(el);
}

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2`
  },
  {
    id: '14',
    task: `// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0; //
  while (i < 10) {
    const number = i;
    let shooter = function () {
      //alert(i) //не работало тк в момент вызова i = 10 и функция брала i из лексического окружения makeArmy()
      // функция shooter
      alert(number); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
// Почему у всех стрелков одинаковые номера?

// Почините код, чтобы он работал как задумано.`
  },
  {
    id: '15',
    task: `
    // Сумма с произвольным количеством скобок
    // важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(2)(2)(2)(3) ); //9
`
  },
  {
    id: '16',
    task: `
//     Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from: number, to: number) {
  let num = from
  const timer = setInterval(() => {
    console.log(num)
    if (num === to) {
      clearInterval(timer)
    }
    num++
  }, 1000)

  // setTimeout(function go() {
  //   console.log(num)
  //   if (num < to) {
  //     setTimeout(go, 1000)
  //   }
  //   num++
  // }, 1000)
}

printNumbers(1, 5)
`
  },
  {
    id: '17',
    task: `
Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

//timeout выполнится после цикла
`
  },
  {
    id: '18',
    task: `
Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

//timeout выполнится после цикла
`
  }
]

export const fifthChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
//     Работа с прототипами
// важность: 5
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); //undefined
    `
  },
  {
    id: '2',
    task: `
//    Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.

// У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
 __proto__: head
  pen: 3
};

let bed = {
 __proto__: table
  sheet: 1,
  pillow: 2
};

let pockets = {
 __proto__: bed
  money: 2000
};

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

//С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по 
// следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 
// (найденное в table), а bed.glasses – значение 1 (найденное в head).
//Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// При необходимости составьте цепочки поиска и сравните их.
    `
  },
  {
    id: '3',
    task: `
// Куда будет произведена запись?
// важность: 5
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); // rabbit, тк this ссылается на объект rabbit
    `
  },
  {
    id: '4',
    task: `
// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
  stomach: []
};

let lazy = {
  __proto__: hamster
  stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
//Ошибка была в том, что оба хомяка имеют один желудок. Так как у обоих в прототипе один и тот же массив.
alert( lazy.stomach ); // apple
    `
  },
  {
    id: '5',
    task: `
// Добавить функциям метод "f.defer(ms)"
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

Function.prototype.defer = function(delay) {
  setTimeout(this, delay);
};

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
    `
  },
  {
    id: '6',
    task: `
// Добавьте функциям декорирующий метод "defer()"
// важность: 4
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

Function.prototype.defer = function(delay) {
  let func = this;
  return function(...args) {
    setTimeout(() => func.apply(this, args), delay);
  }
};


function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
    `
  },
  {
    id: '7',
    task: `
// Добавьте toString в словарь
// важность: 5
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

let dictionary = Object.create(null, {
  toString: { 
    value() {
      return Object.keys(this).join(', ');
    }
  }
});

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
    `
  },
  {
    id: '8',
    task: `
// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); 
Rabbit.prototype.sayHi(); // undefined, тк в prototype нет name
Object.getPrototypeOf(rabbit).sayHi(); // undefined, тк в prototype нет name
rabbit.__proto__.sayHi(); // undefined, тк в prototype нет name
    `
  }
]
export const sixthChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
// Перепишите класс
// важность: 5
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();
    `
  },
  {
    id: '2',
    task: `
// Улучшенные часы
// важность: 5
// У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

class ExtendedClock extends Clock {
  constructor(args) {
    super(args);
    let { precision = 1000 } = args;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};
    `
  },
  {
    id: '3',
    task: `
// Ошибка создания экземпляра класса
// важность: 5
// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name) // передаем свойство в конструктор родителя
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
    `
  },
  {
    id: '3',
    task: `
// Ошибка создания экземпляра класса
// важность: 5
// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name) // передаем свойство в конструктор родителя
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
    `
  },
  {
    id: '4',
    task: `
// Класс расширяет объект?
// важность: 3
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super() // не было вызова конструктора родителя
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка
    `
  },
  {
    id: '5',
    task: `
// Странный instanceof
// важность: 5
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true тк сравнение идет именно через prototype
    `
  }
]
export const seventhChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
//     Finally или просто код?
// важность: 5
// Сравните два фрагмента кода.

// Первый использует finally для выполнения кода после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}

// Второй фрагмент просто ставит очистку после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

// очистить рабочее пространство

// Лучше первый вариант, тк в случае если ошибка возникнет в catch(), или внутри try будет return,
// то очистка не произойдет
 `
  },
  {
    id: '2',
    task: `
//     Наследование от SyntaxError
// важность: 5
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

// Пример использования:

class FormatError extends SyntaxError {

  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("ошибка форматирования");

console.log( err.message );
console.log( err.name ); 
console.log( err.stack ); 

console.log( err instanceof SyntaxError );
 `
  }
]
export const eightChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
// Задачи
// Можно ли "перевыполнить" промис?
// Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1, второй resolve будет проигнорирован
 `
  },
  {
    id: '2',
    task: `
// Задержка на промисах
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise((resolve) => {
  setTimeout(() => resolve('some value')), ms
  })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
 `
  },
  {
    id: '3',
    task: `
// Анимация круга с помощью промиса
// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
 `
  },
  {
    id: '4',
    task: `
// Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2);
// Против:
// promise.then(f1, f2);

new Promise((resolve) => {
  resolve('done')
})
.then(
  (res) => {
    console.log(res);
    throw new Error('ошибка внутри f1');
  },
  (err) => {
    console.log('f2 сработал:', err);
  }
);

new Promise((resolve, reject) => {
  throw new Error('Boom!')
})
.catch(error => {
  console.log('Ошибка поймана:')
  console.log(error)
})
 `
  },
  {
    id: '5',
    task: `
// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//нет, тк ошибка гененерируется не во время выполнения кода
 `
  },
  {
    id: '6',
    task: `
    Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

async function loadJSON(url) {
  let result = await fetch(url)

  if(result.status === 200) {
    let jsonResponse = result.json();
    return jsonResponse;
  } else {
    throw new Error(result.status)
  }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404`
  },
  {
    id: '7',
    task: `
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
 // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
  wait().then(res => {
    alert(res)
  })
}
f()
    `
  }
]

export const nineChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
//     next = previous * 16807 % 2147483647
// Если мы используем 1 как зерно, то значения будут:

// 16807
// 282475249
// 1622650073
// …и так далее…
// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.


function* pseudoRandom(seed) {
  let result = seed;

  while(true) {
    result = result * 16807 % 2147483647
    yield result
  }
}

// Пример использования:

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 162265007
    `
  }
]

export const tenChapterTasks: TaskType[] = [
  {
    id: '1',
    task: `
// Ошибка при чтении несуществующего свойства
// Обычно при чтении несуществующего свойства из объекта возвращается undefined.

// Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

// Это может помочь обнаружить программные ошибки пораньше.

// Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.

// Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (target[prop]) {
          return target[prop]
      } else {
        throw new Error('No such property in target')
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует
    `
  },
  {
    id: '2',
    task: `
// Получение элемента массива с отрицательной позиции
// В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

// Вот так:

// let array = [1, 2, 3];

// array[-1]; // 3, последний элемент
// array[-2]; // 2, предпоследний элемент
// array[-3]; // 1, за два элемента до последнего
// Другими словами, array[-N] – это то же, что и array[array.length - N].

// Создайте прокси, который реализовывал бы такое поведение.

// Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  get(array, index, reciever) {
      if (Number(index) >= 0) {
          return array[index]
      } else {
        const targetIndex = array.length + Number(index);
        return array[targetIndex]
      }
    }
});
alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений`
  },
  {
    id: '3',
    task: `
// Observable
// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

// Вот как это должно работать:

function makeObservable(target) {
  target['handlers'] = [];

  target.observe = function (handler) {
    target['handlers'].push(handler)
  }

  return new Proxy(target, {
    set(target, prop, value, reciever) {
      let isSuccess = Reflect.set(target, prop, value, reciever)
      if (isSuccess) {
        target['handlers'].forEach(handler => handler(prop, value))
      }
      return isSuccess
    }
  });
}


let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(SET {key}={value}); //$
});

user.name = "John"; // выводит: SET name=John
// Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
    `
  },
  {
    id: '4',
    task: `
// Eval-калькулятор
// важность: 4
// Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.

// В этой задаче нет необходимости проверять полученное выражение на корректность, просто вычислить и вернуть результат.

function Calculate() {
  let task = prompt('Введите ваше выражение');
  while (task) {
    alert(eval(task))
    task = prompt('Введите ваше выражение')
  }
}  

Calculate()
    `
  },
  {
    id: '5',
    task: `
//     Проверка синтаксиса
// важность: 2
// Каким будет результат выполнения этого кода?

let user = {
  name: "John",
  go: function() { alert(this.name) }
}; //не хватает ";", код воспринимается как вызов {}()

(user.go)()`
  },
  {
    id: '6',
    task: `
    // Отсортируйте массив с буквой ё
    // важность: 5
    // Используя Intl.Collator, отсортируйте массив:

    let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

    // ... ваш код ...
    let collator = new Intl.Collator();
    animals.sort((a, b) => collator.compare(a, b))
    alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
    `
  }
]
