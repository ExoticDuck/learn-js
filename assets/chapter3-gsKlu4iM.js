import{d as Y,r as e,a as i,o as g,b as o,w as G,e as K,v as Q,F as X,f as Z,n as ee,t as te,_ as ae}from"./index-DfODlT1E.js";import{C as re}from"./CodeRunner-CawHdNt7.js";const se=["value"],oe=Y({__name:"chapter3",setup(ie){const l=e(`// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const a = +prompt("Введите первое число"); //prompt вернет строку, поэтому преобразуем к числу через +
const b = +prompt("Введите второе число");

console.log(a + b);`),d=e(`function ucFirst(str) {
    let result = str
    .split("")
    .map((key, i) => (i === 0 ? key.toUpperCase() : key))
    .join(
    console.log(result);
    return result;
}

ucFirst("вася")`);function m(t){let a=t.split("").map((r,s)=>s===0?r.toUpperCase():r).join("");return console.log(a),a}console.log(m("вася"));const f=e(`function checkSpam(str) {
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
`);function y(t){const a=t.toLowerCase();let r=!1;return a.includes("xxx")||a.includes("viagra")?(r=!0,console.log(r),r):(console.log(r),r)}console.log(y("buy ViAgRA now"));const p=e(`function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)`);function u(t,a){return console.log(t.length>a?t.substring(0,a-1)+"…":t),t.length>a?t.substring(0,a-1)+"…":t}console.log(u("Вот, что мне хотелось бы сказать на эту тему:",20)),console.log(u("Всем привет!",20));const h=e(`
function extractCurrencyValue(currency) {
  return +currency.substring(1);
}

extractCurrencyValue("$120")`);function S(t){return console.log(+t.substring(1)),+t.substring(1)}console.log(S("$120")===120);const b=e(`function copyArray() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits?
  alert(fruits.length); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)
}`),w=e(`function getStyles() {
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
cons`),D=e(`
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

`),k=e(`// Подмассив наибольшей суммы
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
`),M=e(`// Переведите текст вида border-left-width в borderLeftWidth
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
`),v=e(`// Фильтрация по диапазону
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

`),C=e(`
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
`),A=e(`
// Сортировать в порядке по убыванию
// важность: 4

  let arr4 = [5, 2, 1, -10, 8];
  arr4.sort((a, b) => b - a);

  console.log(arr4); // 8, 5, 2, 1, -10
`),T=e(`
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
`),j=e(`// Создать расширяемый калькулятор
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
`),x=e(`
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
`),_=e(`// Трансформировать в объекты
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
console.log(usersMapped[0].fullName); // Вася Пупкин`),L=e(`// Отсортировать пользователей по возрасту
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
`),N=e(`// Перемешайте массив
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
console.log(testArr);`);function P(t){for(let a=t.length-1;a>0;a--){let r=Math.floor(Math.random()*(a+1)),s=t[a];t[a]=t[r],t[r]=s}}let c=[1,2,3];P(c),console.log(c);const B=e(`// console.time("start");
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

alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28`),$=e(`// Оставить уникальные элементы массива
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

alert(unique(strings)); // кришна, харе, :-O`),E=e(`// Создайте объект с ключами из массива
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
*/`),I=e(`// Сумма свойств объекта
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

console.log(sumSalaries(salaries)); // 650`),J=e(`// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2`),O=e(`// Максимальная зарплата
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
console.log(topSalary(salaries2));`),F=e(`
// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12)
alert(date)
`),R=e(`// Покажите день недели
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
console.log(getWeekDay(date1)); // нужно вывести "ВТ"`),V=e(`// День недели в европейской нумерации
// важность: 5
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date2 = new Date(2012, 0, 3); // 3 января 2012 года

const getLocalDay = (date) => {
  return date.getDay();
};
alert(getLocalDay(date2)); // вторник, нужно показать 2`),q=e(`// Какой день месяца был много дней назад?
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
alert(getDateAgo(date3, 365)); // 2, (2 Jan 2014)`),H=e(`// Сколько сегодня прошло секунд?
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

console.log(getSecondsToday());`),z=e(`// Сколько секунд осталось до завтра?
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

console.log(getSecondsToTomorrow());`),U=e(`// Форматирование относительной даты
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
alert(formatDate(new Date(new Date().getTime() - 86400 * 1000)));`),W=[l,d,f,p,h,b,w,D,k,M,v,C,A,T,j,x,_,L,N,B,$,E,I,J,O,F,R,V,q,H,z,U],n=e(l);return(t,a)=>(g(),i("div",{class:ee(t.$style.container)},[a[1]||(a[1]=o("div",{class:"about"},[o("h1",null,"Chapter 3")],-1)),G(o("select",{"onUpdate:modelValue":a[0]||(a[0]=r=>n.value=r)},[(g(),i(X,null,Z(W,(r,s)=>o("option",{key:s,value:r.value},te(`Задача ${s+1}`),9,se)),64))],512),[[Q,n.value]]),K(re,{defaultCode:n.value},null,8,["defaultCode"])],2))}}),ne="_container_1r0h1_2",le="_about_1r0h1_8",ue={container:ne,about:le},ce={$style:ue},me=ae(oe,[["__cssModules",ce]]);export{me as default};
