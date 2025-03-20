import{C as l}from"./CodeDisplay-B_23lu_r.js";import{d as Ce,r as u,a as _e,o as $e,b as j,e as n,w as c,u as r,n as Oe,U as i,_ as Pe}from"./index-_4a0G3Pt.js";const Ne=Ce({__name:"chapter3",setup(Fe){const S=u(`// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const a = +prompt("Введите первое число"); //prompt вернет строку, поэтому преобразуем к числу через +
const b = +prompt("Введите второе число");

console.log(a + b);`);function D(){const t=+prompt("Введите первое число"),e=+prompt("Введите второе число");console.log(t+e)}const w=u(`function ucFirst(str) {
    let result = str
    .split("")
    .map((key, i) => (i === 0 ? key.toUpperCase() : key))
    .join(
    console.log(result);
    return result;
}

ucFirst("вася")`);function y(t){let e=t.split("").map((a,o)=>o===0?a.toUpperCase():a).join("");return console.log(e),e}console.log(y("вася"));const k=u(`function checkSpam(str) {
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
`);function p(t){const e=t.toLowerCase();let a=!1;return e.includes("xxx")||e.includes("viagra")?(a=!0,console.log(a),a):(console.log(a),a)}console.log(p("buy ViAgRA now"));const M=u(`function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)`);function h(t,e){return console.log(t.length>e?t.substring(0,e-1)+"…":t),t.length>e?t.substring(0,e-1)+"…":t}console.log(h("Вот, что мне хотелось бы сказать на эту тему:",20)),console.log(h("Всем привет!",20));const T=u(`
function extractCurrencyValue(currency) {
  return +currency.substring(1);
}

extractCurrencyValue("$120")`);function b(t){return console.log(+t.substring(1)),+t.substring(1)}console.log(b("$120")===120);const x=u(`function copyArray() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits?
  alert(fruits.length); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)
}`);function E(){let t=["Яблоки","Груша","Апельсин"];t.push("Банан"),alert(t.length)}const A=u(`function getStyles() {
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
cons`);function C(){const t=["Джаз","Блюз"];t.push("Рок-н-ролл"),console.log(t),t[Math.ceil(t.length/2-1)]="Классика",console.log(t),console.log(t.shift()),console.log(t),t.unshift("Рэп","Регги"),console.log(t)}const _=u(`
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

`);function $(){const t=[];for(;;){const a=prompt("Введите число","0");if(a===null||a===""||isNaN(+a))break;t.push(+a)}const e=t.reduce((a,o)=>a+o,0);return alert(e),e}const O=u(`// Подмассив наибольшей суммы
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
`);function P(t){let e=0,a=0;for(const o of t)a+=o,e=Math.max(e,a),a<0&&(a=0);return alert(e),e}const N=u(`// Переведите текст вида border-left-width в borderLeftWidth
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
`);function J(t){const e=t.split("-").map((a,o)=>{if(o==0)return a;const s=a.split("");return s[0]=s[0].toUpperCase(),s.join("")}).join("");return alert(e),e}const L=u(`// Фильтрация по диапазону
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

`);let B=[5,3,8,1];function I(t,e,a){const o=t.filter(s=>s>=e&&s<=a);return alert(o),alert(t),o}const F=u(`
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
`);function H(){let t=[5,3,8,1];function e(a,o,s){for(let g=0;g<a.length;g++)(a[g]<o||a[g]>s)&&(a.splice(g,1),g--)}e(t,1,4),alert(t)}const R=u(`
// Сортировать в порядке по убыванию
// важность: 4

  let arr4 = [5, 2, 1, -10, 8];
  arr4.sort((a, b) => b - a);

  console.log(arr4); // 8, 5, 2, 1, -10
`);function q(){let t=[5,2,1,-10,8];t.sort((e,a)=>a-e),console.log(t)}const V=u(`
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
`);function U(){let t=["HTML","JavaScript","CSS"];function e(o){return[...o].sort()}let a=e(t);console.log(a),console.log(t)}const W=u(`// Создать расширяемый калькулятор
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
`);function Y(){function t(){this.methods={"-":(a,o)=>a-o,"+":(a,o)=>a+o},this.calculate=function(a){let[o,s,g]=a.split(" ");return this.methods[s](+o,+g)},this.addMethod=function(a,o){this.methods[a]=o}}let e=new t;console.log(e.calculate("3 + 7")),e.addMethod("**",(a,o)=>a**o),console.log(e.calculate("2 ** 3"))}const z=u(`
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
`);function X(){let s=[{name:"Вася",age:25},{name:"Петя",age:30},{name:"Маша",age:28}].map(g=>g.name);console.log(s)}const G=u(`// Трансформировать в объекты
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
console.log(usersMapped[0].fullName); // Вася Пупкин`);function K(){let s=[{name:"Вася",surname:"Пупкин",id:1},{name:"Петя",surname:"Иванов",id:2},{name:"Маша",surname:"Петрова",id:3}].map(g=>({fullName:g.name+" "+g.surname,id:g.id}));console.log(s[0].id),console.log(s[0].fullName)}const Q=u(`// Отсортировать пользователей по возрасту
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
`);function Z(){let o=[{name:"Вася",age:25},{name:"Петя",age:30},{name:"Маша",age:28}];function s(g){g.sort((d,m)=>d.age-m.age)}s(o),console.log(o[0].name,o[1].name,o[2].name)}const ee=u(`// Перемешайте массив
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
console.log(testArr);`);function v(t){for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1)),o=t[e];t[e]=t[a],t[a]=o}}let f=[1,2,3];v(f),console.log(f);const te=u(`// console.time("start");
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

alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28`);function ae(){let o=[{name:"Вася",age:25},{name:"Петя",age:30},{name:"Маша",age:29}];function s(g){return Math.round(g.reduce((d,m)=>d+m.age,0)/g.length)}alert(s(o))}const ne=u(`// Оставить уникальные элементы массива
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

alert(unique(strings)); // кришна, харе, :-O`);function oe(){function t(a){const o=[];return a.forEach(s=>{o.includes(s)||o.push(s)}),o.join(", ")}alert(t(["кришна","кришна","харе","харе","харе","харе","кришна","кришна",":-O"]))}const se=u(`// Создайте объект с ключами из массива
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
*/`);function re(){let t=[{id:"john",name:"John Smith",age:20},{id:"ann",name:"Ann Smith",age:24},{id:"pete",name:"Pete Peterson",age:31}];function e(o){return o.reduce((s,g)=>({...s,[g.id]:{name:g.name,age:g.age}}),{})}let a=e(t);console.log(a)}const le=u(`// Сумма свойств объекта
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

console.log(sumSalaries(salaries)); // 650`);function ue(){let t={John:100,Pete:300,Mary:250};function e(a){let o=0;if(!Object.keys(a).length)return o;for(const s of Object.values(a))o+=s;return o}console.log(e(t))}const ce=u(`// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2`);function ie(){let t={name:"John",age:30};function e(a){return Object.keys(a).length}console.log(e(t))}const ge=u(`// Максимальная зарплата
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
console.log(topSalary(salaries2));`);function de(){let t={John:100,Pete:300,Mary:250};function e(a){if(!Object.keys(a).length)return null;let o=0,s="";for(const[g,d]of Object.entries(a))d>o&&(o=d,s=g);return s}console.log(e(t))}const me=u(`
// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12)
alert(date)
`);function he(){const t=new Date(2012,1,20,3,12);alert(t)}const fe=u(`// Покажите день недели
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
console.log(getWeekDay(date1)); // нужно вывести "ВТ"`);function ye(){let t=new Date(2012,0,3);console.log((a=>{const o=a.getDay();return console.log(o),{0:"ПН",1:"ВТ",2:"СР",3:"ЧТ",4:"ПТ",5:"СБ",6:"ВС"}[o]})(t))}const pe=u(`// День недели в европейской нумерации
// важность: 5
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date2 = new Date(2012, 0, 3); // 3 января 2012 года

const getLocalDay = (date) => {
  return date.getDay();
};
alert(getLocalDay(date2)); // вторник, нужно показать 2`);function be(){let t=new Date(2012,0,3);alert((a=>a.getDay())(t))}const ve=u(`// Какой день месяца был много дней назад?
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
alert(getDateAgo(date3, 365)); // 2, (2 Jan 2014)`);function je(){let t=new Date(2015,0,2);const e=(a,o)=>{const s=new Date(a);return s.setDate(s.getDate()-o),s.getDate()};alert(e(t,1)),alert(e(t,2)),alert(e(t,365))}const Se=u(`// Сколько сегодня прошло секунд?
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

console.log(getSecondsToday());`);function De(){console.log((()=>{const e=new Date,a=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a*3600+o*60+s})())}const we=u(`// Сколько секунд осталось до завтра?
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

console.log(getSecondsToTomorrow());`);function ke(){console.log((()=>{const e=new Date,o=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0).getTime()-e.getTime();return Math.round(o/1e3)})())}const Me=u(`// Форматирование относительной даты
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
alert(formatDate(new Date(new Date().getTime() - 86400 * 1000)));`);function Te(){const t=e=>{const a=new Date,o=a.getTime()-e.getTime(),s=Math.round((a.getTime()-e.getTime())/1e3),g=Math.round(s/60);if(o<1e3)return"прямо сейчас";if(s>1e3&&s<60)return`${s} сек. назад`;if(g<60)return`${g} минут назад`;const d=e.getDate(),m=e.getMonth()+1,xe=e.getFullYear(),Ee=e.getHours(),Ae=e.getMinutes();return`${d}.${m}.${xe} ${Ee}:${Ae}`};alert(t(new Date(new Date().getTime()-1))),alert(t(new Date(new Date().getTime()-30*1e3))),alert(t(new Date(new Date().getTime()-5*60*1e3))),alert(t(new Date(new Date().getTime()-86400*1e3)))}return(t,e)=>($e(),_e("div",{class:Oe(t.$style.container)},[e[8]||(e[8]=j("div",{class:"about"},[j("h1",null,"Chapter 3")],-1)),n(l,{onExecute:D},{default:c(()=>[n(r(i),{code:S.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{description:"Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.",onExecute:e[0]||(e[0]=a=>y("Вася"))},{default:c(()=>[n(r(i),{code:w.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{description:"Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру:",onExecute:e[1]||(e[1]=a=>p("buy ViAgRA now"))},{default:c(()=>[n(r(i),{code:k.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[2]||(e[2]=a=>h("Вот, что мне хотелось бы сказать на эту тему:",20))},{default:c(()=>[n(r(i),{code:M.value,highlightjs:"",label:"Усечение строки",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[3]||(e[3]=a=>b("$120"))},{default:c(()=>[n(r(i),{code:T.value,highlightjs:"",label:"Получить число из суммы денег",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{description:"Скопирован ли массив?",onExecute:E},{default:c(()=>[n(r(i),{code:x.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{description:"Создайте массив styles с элементами «Джаз» и «Блюз». Добавьте «Рок-н-ролл» в конец. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной. Удалите первый элемент массива и покажите его. Вставьте Рэп и Регги в начало массива. Массив по ходу выполнения операц Джаз, Блюз Джаз, Блюз, Рок-н-ролл Джаз, Классика, Рок-н-ролл Классика, Рок-н-ролл Рэп, Регги, Классика, Рок-н-ролл",onExecute:C},{default:c(()=>[n(r(i),{code:A.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:$},{default:c(()=>[n(r(i),{code:_.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[4]||(e[4]=a=>P([-1,2,3,-9,11]))},{default:c(()=>[n(r(i),{code:O.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[5]||(e[5]=a=>J("background-color"))},{default:c(()=>[n(r(i),{code:N.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[6]||(e[6]=a=>I(r(B),1,4))},{default:c(()=>[n(r(i),{code:L.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:H},{default:c(()=>[n(r(i),{code:F.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:q},{default:c(()=>[n(r(i),{code:R.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:U},{default:c(()=>[n(r(i),{code:V.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:Y},{default:c(()=>[n(r(i),{code:W.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:X},{default:c(()=>[n(r(i),{code:z.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:K},{default:c(()=>[n(r(i),{code:G.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:Z},{default:c(()=>[n(r(i),{code:Q.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:e[7]||(e[7]=a=>v(r(f)))},{default:c(()=>[n(r(i),{code:ee.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:ae},{default:c(()=>[n(r(i),{code:te.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:oe},{default:c(()=>[n(r(i),{code:ne.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:re},{default:c(()=>[n(r(i),{code:se.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:ue},{default:c(()=>[n(r(i),{code:le.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:ie},{default:c(()=>[n(r(i),{code:ce.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:de},{default:c(()=>[n(r(i),{code:ge.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:he},{default:c(()=>[n(r(i),{code:me.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:ye},{default:c(()=>[n(r(i),{code:fe.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:be},{default:c(()=>[n(r(i),{code:pe.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:je},{default:c(()=>[n(r(i),{code:ve.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:De},{default:c(()=>[n(r(i),{code:Se.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:ke},{default:c(()=>[n(r(i),{code:we.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(l,{onExecute:Te},{default:c(()=>[n(r(i),{code:Me.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1})],2))}}),Je="_container_1r0h1_2",Le="_about_1r0h1_8",Be={container:Je,about:Le},Ie={$style:Be},qe=Pe(Ne,[["__cssModules",Ie]]);export{qe as default};
