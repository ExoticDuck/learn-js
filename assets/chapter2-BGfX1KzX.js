import{C as o}from"./CodeDisplay-BM2OI5dk.js";import{d as J,r as u,a as A,o as M,b as r,e as n,w as s,n as N,f as P,_ as U}from"./index-D6pjww6V.js";const B=J({__name:"chapter2",setup(F){const i=u(`//* Привет, object
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
console.log(user)`);function c(){let e={};e.name="John",e.surname="Smith",e.name="Pete",delete e.name,console.log(e)}const h=u(`// Проверка на пустоту
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
console.log(isEmpty({}));`);function m(){function e(a){for(const t in a)if(t in a)return!0;return!1}console.log(e({name:"john"})),console.log(e({}))}const d=u(`// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user1 = {
  name: "John",
};

// это будет работать?
user1.name = "Pete"; //да, т.к. в переменной хранится ссылка на значение объекта. При изменении свойства ссылка останется неизменной.`);function p(){}const f=u(`// Сумма свойств объекта
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

console.log(getSumSalary(salaries));`);function g(){let e={John:100,Ann:160,Pete:130};function a(t){let l=0;for(const V in t)l+=t[V];return l}console.log(a(e))}const y=u(`// Умножаем все числовые свойства на 2
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
console.log(menu);`);function b(){let e={width:200,height:300,title:"My menu"};a(e);function a(t){for(const l in t)typeof t[l]=="number"&&(t[l]*=2)}console.log(e)}const k=u(`// Использование "this" в литерале объекта
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

console.log( user2.ref.name ); // Каким будет результат? - ошибка, ref можно сделать методом и вернуть this`);function j(){function e(){return{name:"John",ref:this}}let a=e();console.log(a.ref.name)}const v=u(`// Создайте калькулятор
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

console.log(calculator.read().sum(), calculator.read().multiply());`);function w(){let e={a:0,b:0,read(){return this.a=+prompt("Введите a"),this.b=+prompt("Введите b"),this},sum(){return this.a+this.b},multiply(){return this.a+this.b}};console.log(e.read().sum(),e.read().multiply())}const _=u(`// Цепь вызовов
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

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0`);function S(){({step:0,up(){return this.step++,this},down(){return this.step--,this},showStep:function(){return console.log(this.step),this}}).up().up().down().showStep().down().showStep()}const E=u(`//  Создайте калькулятор при помощи конструктора, new Calculator
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
alert("Mul=" + calculator1.mul());`);function C(){function e(){this.a=0,this.b=0,this.read=function(){this.a=+prompt("Введите a"),this.b=+prompt("Введите b")},this.sum=function(){return this.a+this.b},this.mul=function(){return this.a*this.b}}let a=new e;a.read(),alert("Sum="+a.sum()),alert("Mul="+a.mul())}const x=u(`// Создайте new Accumulator
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

alert(accumulator.value); // выведет сумму этих значений`);function T(){function e(t){this.value=t||0,this.read=function(){let l=+prompt("Введите число");this.value+=l}}let a=new e(1);a.read(),a.read(),alert(a.value)}return(e,a)=>{const t=P("VCodeBlock");return M(),A("div",{class:N(e.$style.container)},[a[0]||(a[0]=r("div",{class:"about"},[r("h1",null,"Chapter 2")],-1)),n(o,{onExecute:c},{default:s(()=>[n(t,{code:i.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:m},{default:s(()=>[n(t,{code:h.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:p},{default:s(()=>[n(t,{code:d.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:g},{default:s(()=>[n(t,{code:f.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:b},{default:s(()=>[n(t,{code:y.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:j},{default:s(()=>[n(t,{code:k.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:w},{default:s(()=>[n(t,{code:v.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:S},{default:s(()=>[n(t,{code:_.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:C},{default:s(()=>[n(t,{code:E.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),n(o,{onExecute:T},{default:s(()=>[n(t,{code:x.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1})],2)}}}),$="_container_1h7kd_2",z="_about_1h7kd_9",D={container:$,about:z},q={$style:D},I=U(B,[["__cssModules",q]]);export{I as default};
