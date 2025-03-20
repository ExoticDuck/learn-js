<template>
  <div :class="$style.container">
    <div class="about">
      <h1>Chapter 2</h1>
    </div>

    <CodeDisplay @execute="runTask0">
      <template #default>
        <VCodeBlock
          :code="task0"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask1">
      <template #default>
        <VCodeBlock
          :code="task1"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask2">
      <template #default>
        <VCodeBlock
          :code="task2"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask3">
      <template #default>
        <VCodeBlock
          :code="task3"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask4">
      <template #default>
        <VCodeBlock
          :code="task4"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask5">
      <template #default>
        <VCodeBlock
          :code="task5"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask6">
      <template #default>
        <VCodeBlock
          :code="task6"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask7">
      <template #default>
        <VCodeBlock
          :code="task7"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask8">
      <template #default>
        <VCodeBlock
          :code="task8"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask9">
      <template #default>
        <VCodeBlock
          :code="task9"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
  </div>
</template>

<script lang="ts" setup>
import CodeDisplay from "@/components/CodeDisplay/CodeDisplay.vue";
import { ref } from "vue";

const task0 = ref(`//* Привет, object
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
console.log(user)`);
//* Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
function runTask0() {
  type User = {
    name?: string;
    surname?: string;
  };
  let user: User = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
  console.log(user);
}

const task1 = ref(`// Проверка на пустоту
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
console.log(isEmpty({}));`);

// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function runTask1() {
  function isEmpty(obj) {
    for (const key in obj) {
      if (key in obj) {
        return true;
      }
    }
    return false;
  }

  console.log(isEmpty({ name: "john" }));
  console.log(isEmpty({}));
}

const task2 = ref(`// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user1 = {
  name: "John",
};

// это будет работать?
user1.name = "Pete"; //да, т.к. в переменной хранится ссылка на значение объекта. При изменении свойства ссылка останется неизменной.`);

// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
function runTask2() {
  const user1 = {
    name: "John",
  };

  // это будет работать?
  user1.name = "Pete"; //да, т.к. в переменной хранится ссылка на значение объекта. При изменении свойства ссылка останется неизменной.
}

const task3 = ref(`// Сумма свойств объекта
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

console.log(getSumSalary(salaries));`);
// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:
function runTask3() {
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

  console.log(getSumSalary(salaries));
}

const task4 = ref(`// Умножаем все числовые свойства на 2
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
console.log(menu);`);
// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:
function runTask4() {
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

  function multiplyNumeric(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }
  console.log(menu);
}

const task5 = ref(`// Использование "this" в литерале объекта
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

console.log( user2.ref.name ); // Каким будет результат? - ошибка, ref можно сделать методом и вернуть this`);
// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function runTask5() {
  function makeUser() {
    return {
      name: "John",
      ref: this,
    };
  }

  let user2 = makeUser();

  console.log(user2.ref.name); // Каким будет результат? - ошибка, ref можно сделать методом и вернуть this
}

const task6 = ref(`// Создайте калькулятор
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

console.log(calculator.read().sum(), calculator.read().multiply());`);
// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
function runTask6() {
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

  console.log(calculator.read().sum(), calculator.read().multiply());
}

const task7 = ref(`// Цепь вызовов
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

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0`);
// Цепь вызовов
// важность: 2
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
function runTask7() {
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

  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
}
// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B, чтобы new A() == new B()?
const obj = { name: "John" };
function A() {
  return obj;
}
function B() {
  return obj;
}

// let a = new A();
// let b = new B();

// alert(a == b); // true
//т.к. обе возвращают ссылку на один объект

const task8 =
  ref(`//  Создайте калькулятор при помощи конструктора, new Calculator
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
alert("Mul=" + calculator1.mul());`);
//  Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function runTask8() {
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
  alert("Mul=" + calculator1.mul());
}

const task9 = ref(`// Создайте new Accumulator
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

alert(accumulator.value); // выведет сумму этих значений`);
// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
function runTask9() {
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

  alert(accumulator.value); // выведет сумму этих значений
}
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
