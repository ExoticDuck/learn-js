<template>
  <div :class="$style.container">
    <div class="about">
      <h1>Chapter 3</h1>
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
import CodeRunner from "@/components/CodeRunner.vue";
import { ref } from "vue";

const task0 = ref(`// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

alert(sumTo(4));`);

// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

// alert(sumTo(4));

const task1 = ref(`// Вычислить факториал
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

alert(factorial(5));`);
// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const task2 = ref(`// Числа Фибоначчи
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

alert(fib(5));`);

// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const task3 = ref(`// Вывод односвязного списка
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
printList(list);`);

// Вывод односвязного списка
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

function printList(list: ListType) {
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
printList(list);

const task4 = ref(`// Вывод односвязного списка в обратном порядке
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

printListReverse(list)`);

// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.
type ListType = {
  value: number;
  next: ListType | null;
};

function printListReverse(list: ListType) {
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
  // console.log(list.value);
}

printListReverse(list);

const task5 = ref(`// Учитывает ли функция последние изменения?
// важность: 5
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); //"Pete"`);

// Учитывает ли функция последние изменения?
// важность: 5
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

// sayHi(); //"Pete"

const task6 = ref(`// Какие переменные доступны?
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
work(); // что будет показано? Pete`);

// Какие переменные доступны?
// важность: 5
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.

// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
  let name1 = "Pete";

  return function () {
    alert(name1);
  };
}

let name1 = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
// work(); // что будет показано? Pete

const task7 = ref(`// Независимы ли счётчики?
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
alert( counter2() ); // 1, тк они созданы двумя разными вызовами функции.`);

// Независимы ли счётчики?
// важность: 5
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2()); // 1, тк они созданы двумя разными вызовами функции.

const task8 = ref(`// Объект счётчика
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
`);

// Объект счётчика
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
// Counter.call(counter1);

// alert(counter1.up()); // 1
// alert(counter1.up()); // 2
// alert(counter1.down()); // 1

const task9 = ref(`// Функция внутри if
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
`);

// Функция внутри if
// важность: 5
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// sayHi(); // undefined

const task10 = ref(`// Сумма с помощью замыканий
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
console.log(sum(5)(-1));`);

// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

function sum(a: number) {
  return function (b: number) {
    return a + b;
  };
}

// console.log(sum(1)(2));
// console.log(sum(5)(-1));

const task11 = ref(`// Видна ли переменная?
// важность: 4
// Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // error, обращение до инициализации

  let x = 2;
}

func();`);

// Видна ли переменная?
// важность: 4
// Что выведет данный код?

// let x = 1;

// function func() {
//   console.log(x); // error, обращение до инициализации

//   let x = 2;
// }

// func();

const task12 = ref(`// Фильтрация с помощью функции
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

alert(arr.filter(inArray([1, 2, 10]))); // 1,2`);

// Фильтрация с помощью функции
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

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

type User = {
  name: string;
  age: number;
  surname: string;
};
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];
// Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
users.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(users);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => (a.age > b.age ? 1 : -1));
// Можем ли мы сделать его короче, например вот таким?

function byField(fieldName: keyof User) {
  console.log(fieldName);

  return (a: User, b: User) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField("name"));
console.log(users);

users.sort(byField("age"));
console.log(users);
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

const task13 = ref(`// Армия функций
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

// Почините код, чтобы он работал как задумано.`);
// Армия функций
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

// Почините код, чтобы он работал как задумано.

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
  task13,
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
