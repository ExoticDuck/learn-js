<template>
  <div :class="$style.container">
    <div class="about">
      <h1>Chapter 3</h1>
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

    <CodeDisplay
      description="Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом."
      @execute="ucFirst('Вася')"
    >
      <template #default>
        <VCodeBlock
          :code="task1"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay
      description="Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру:"
      @execute="checkSpam('buy ViAgRA now')"
    >
      <template #default>
        <VCodeBlock
          :code="task2"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay
      @execute="truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)"
    >
      <template #default>
        <VCodeBlock
          :code="task3"
          highlightjs
          label="Усечение строки"
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="extractCurrencyValue('$120')">
      <template #default>
        <VCodeBlock
          :code="task4"
          highlightjs
          label="Получить число из суммы денег"
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay description="Скопирован ли массив?" @execute="copyArray">
      <template #default>
        <VCodeBlock
          :code="task5"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay
      description="Создайте массив styles с элементами «Джаз» и «Блюз». Добавьте «Рок-н-ролл» в конец. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной. Удалите первый элемент массива и покажите его. Вставьте Рэп и Регги в начало массива. Массив по ходу выполнения операц Джаз, Блюз Джаз, Блюз, Рок-н-ролл Джаз, Классика, Рок-н-ролл Классика, Рок-н-ролл Рэп, Регги, Классика, Рок-н-ролл"
      @execute="getStyles"
    >
      <template #default>
        <VCodeBlock
          :code="task6"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="sumInput">
      <template #default>
        <VCodeBlock
          :code="task7"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="getMaxSubSum([-1, 2, 3, -9, 11])">
      <template #default>
        <VCodeBlock
          :code="task8"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="camelize('background-color')">
      <template #default>
        <VCodeBlock
          :code="task9"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="filterRange(arr1, 1, 4)">
      <template #default>
        <VCodeBlock
          :code="task10"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask11">
      <template #default>
        <VCodeBlock
          :code="task11"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask12">
      <template #default>
        <VCodeBlock
          :code="task12"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask13">
      <template #default>
        <VCodeBlock
          :code="task13"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask14">
      <template #default>
        <VCodeBlock
          :code="task14"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask15">
      <template #default>
        <VCodeBlock
          :code="task15"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask16">
      <template #default>
        <VCodeBlock
          :code="task16"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask17">
      <template #default>
        <VCodeBlock
          :code="task17"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="shuffle(testArr)">
      <template #default>
        <VCodeBlock
          :code="task18"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>

    <CodeDisplay @execute="runTask19">
      <template #default>
        <VCodeBlock
          :code="task19"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask20">
      <template #default>
        <VCodeBlock
          :code="task20"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask21">
      <template #default>
        <VCodeBlock
          :code="task21"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask22">
      <template #default>
        <VCodeBlock
          :code="task22"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask23">
      <template #default>
        <VCodeBlock
          :code="task23"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask24">
      <template #default>
        <VCodeBlock
          :code="task24"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask25">
      <template #default>
        <VCodeBlock
          :code="task25"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask26">
      <template #default>
        <VCodeBlock
          :code="task26"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask27">
      <template #default>
        <VCodeBlock
          :code="task27"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask28">
      <template #default>
        <VCodeBlock
          :code="task28"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask29">
      <template #default>
        <VCodeBlock
          :code="task29"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask30">
      <template #default>
        <VCodeBlock
          :code="task30"
          highlightjs
          lang="javascript"
          theme="neon-bunny"
        />
      </template>
    </CodeDisplay>
    <CodeDisplay @execute="runTask31">
      <template #default>
        <VCodeBlock
          :code="task31"
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
import { VCodeBlock } from "@wdns/vue-code-block";
import { ref } from "vue";

type Person = {
  name: string;
  age: number;
};

// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

let str = "Привет";

// str.test = 5;

// alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?
//не сработает, свойство добавится в объект-обертку и после удалится. При обращении вернет ошибку
const task0 = ref(`// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const a = +prompt("Введите первое число"); //prompt вернет строку, поэтому преобразуем к числу через +
const b = +prompt("Введите второе число");

console.log(a + b);`);
// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.
function runTask0() {
  const a = +prompt("Введите первое число"); //prompt вернет строку, поэтому преобразуем к числу через +
  const b = +prompt("Введите второе число");

  console.log(a + b);
}
// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

const task1 = ref(`function ucFirst(str) {
    let result = str
    .split("")
    .map((key, i) => (i === 0 ? key.toUpperCase() : key))
    .join(
    console.log(result);
    return result;
}

ucFirst("вася")`);

function ucFirst(str: string) {
  let result = str
    .split("")
    .map((key, i) => (i === 0 ? key.toUpperCase() : key))
    .join("");

  console.log(result);
  return result;
}

console.log(ucFirst("вася"));

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

const task2 = ref(`function checkSpam(str) {
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
`);

function checkSpam(str) {
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

console.log(checkSpam("buy ViAgRA now"));

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

const task3 = ref(`function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)`);

function truncate(str, maxLength) {
  console.log(
    str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str
  );
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

const task4 = ref(`
function extractCurrencyValue(currency) {
  return +currency.substring(1);
}

extractCurrencyValue("$120")`);

function extractCurrencyValue(currency: string) {
  console.log(+currency.substring(1));
  return +currency.substring(1);
}

console.log(extractCurrencyValue("$120") === 120); // true

//Arrays

// Скопирован ли массив?
// важность: 3
// Что выведет следующий код?
const task5 = ref(`function copyArray() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits?
  alert(fruits.length); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)
}`);
function copyArray() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  // добавляем новое значение в "копию"
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  // что в fruits?
  alert(fruits.length); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)
}
// Операции с массивами
// важность: 5
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

const task6 = ref(`function getStyles() {
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
cons`);

function getStyles() {
  const styles = ["Джаз", "Блюз"];
  styles.push("Рок-н-ролл");
  console.log(styles);

  styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
  console.log(styles);

  console.log(styles.shift());
  console.log(styles);

  styles.unshift("Рэп", "Регги");
  console.log(styles);
}

// Вызов в контексте массива
// важность: 5
// Каков результат? Почему?

let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); // вернет элементы массива arr, т.к в качестве this выступает массив.

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const task7 = ref(`
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

`);

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

const task8 = ref(`// Подмассив наибольшей суммы
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
`);

// Подмассив наибольшей суммы
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
  alert(result);
  return result;
}

const task9 = ref(`// Переведите текст вида border-left-width в borderLeftWidth
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
`);
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

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

const task10 = ref(`// Фильтрация по диапазону
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

`);

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const result = arr.filter((el) => el >= a && el <= b);
  alert(result); // 3,1 (совпадающие значения)
  alert(arr); // 5,3,8,1 (без изменений)
  return result;
}

const task11 = ref(`
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
`);
// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

function runTask11() {
  let arr3 = [5, 3, 8, 1];
  function filterRangeInPlace(arr: number[], a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  filterRangeInPlace(arr3, 1, 4); // удалены числа вне диапазона 1..4

  alert(arr3); // [3, 1]
}

const task12 = ref(`
// Сортировать в порядке по убыванию
// важность: 4

  let arr4 = [5, 2, 1, -10, 8];
  arr4.sort((a, b) => b - a);

  console.log(arr4); // 8, 5, 2, 1, -10
`);

// Сортировать в порядке по убыванию
// важность: 4
function runTask12() {
  let arr4 = [5, 2, 1, -10, 8];
  arr4.sort((a, b) => b - a);

  console.log(arr4); // 8, 5, 2, 1, -10
}

const task13 = ref(`
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
`);
// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function runTask13() {
  let arr5 = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr) {
    const copy = [...arr];
    return copy.sort();
  }

  let sorted = copySorted(arr5);

  console.log(sorted); // CSS, HTML, JavaScript
  console.log(arr5); // HTML, JavaScript, CSS (без изменений)
}

const task14 = ref(`// Создать расширяемый калькулятор
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
`);

// Создать расширяемый калькулятор
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

function runTask14() {
  function Calculator(this: {
    methods: { [key: string]: (a: number, b: number) => number };
    calculate: (str: string) => number;
    addMethod: (name: string, func: (a: number, b: number) => number) => void;
  }) {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
    };
    this.calculate = function (str: string) {
      let [a, operator, b] = str.split(" ");
      return this.methods[operator](+a, +b);
    };
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }

  let calc = new Calculator();

  console.log(calc.calculate("3 + 7")); // 10

  calc.addMethod("**", (a: number, b: number) => a ** b);

  console.log(calc.calculate("2 ** 3")); //8
}

const task15 = ref(`
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
`);
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

function runTask15() {
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];

  let names = users.map((el) => el.name);

  console.log(names); // Вася, Петя, Маша
}

const task16 = ref(`// Трансформировать в объекты
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
console.log(usersMapped[0].fullName); // Вася Пупкин`);
// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:
function runTask16() {
  type Person = {
    name: string;
    surname: string;
    id: number;
  };
  let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
  let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

  let users1: Person[] = [vasya1, petya1, masha1];

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
  console.log(usersMapped[0].fullName); // Вася Пупкин
}
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

const task17 = ref(`// Отсортировать пользователей по возрасту
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
`);
// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:
function runTask17() {
  let vasya2 = { name: "Вася", age: 25 };
  let petya2 = { name: "Петя", age: 30 };
  let masha2 = { name: "Маша", age: 28 };

  let arr6: Person[] = [vasya2, petya2, masha2];
  function sortByAge(arr: Person[]) {
    arr.sort((a, b) => a.age - b.age);
  }
  sortByAge(arr6);

  // теперь: [vasya, masha, petya]
  console.log(arr6[0].name, arr6[1].name, arr6[2].name); // Вася Маша Петя
}

const task18 = ref(`// Перемешайте массив
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
console.log(testArr);`);
// Перемешайте массив
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

function shuffle(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    //поменяли местами
    let el = arr[i];
    arr[i] = arr[j];
    arr[j] = el;
    //случайный индекс от 0 до i
  }
}

let testArr = [1, 2, 3];
shuffle(testArr);
console.log(testArr);

// const arr11 = new Array(1000000).fill(Math.random());
// const arr12 = new Array(1000000).fill(Math.random());

const task19 = ref(`// console.time("start");
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

alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28`);
// console.time("start");
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
function runTask19() {
  let vasya3 = { name: "Вася", age: 25 };
  let petya3 = { name: "Петя", age: 30 };
  let masha3 = { name: "Маша", age: 29 };

  let arr7: Person[] = [vasya3, petya3, masha3];

  function getAverageAge(arr: Person[]) {
    return Math.round(
      arr.reduce((acc, person) => acc + person.age, 0) / arr.length
    );
  }

  alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28
}

const task20 = ref(`// Оставить уникальные элементы массива
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

alert(unique(strings)); // кришна, харе, :-O`);

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:
function runTask20() {
  function unique(arr: string[]) {
    const uniqueElements: string[] = [];
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

  alert(unique(strings)); // кришна, харе, :-O
}

const task21 = ref(`// Создайте объект с ключами из массива
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
*/`);
// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// Например:

function runTask21() {
  type User = {
    id: string;
    name: string;
    age: number;
  };
  let users2 = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  function groupById(users: User[]) {
    return users.reduce((result, el) => {
      return { ...result, [el.id]: { name: el.name, age: el.age } };
    }, {});
  }

  let usersById = groupById(users2);
  console.log(usersById);
}
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

const task22 = ref(`// Сумма свойств объекта
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

console.log(sumSalaries(salaries)); // 650`);

// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

function runTask22() {
  type Salaries = {
    [key: string]: number;
  };
  let salaries: Salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  function sumSalaries(salaries: Salaries) {
    let result = 0;
    if (!Object.keys(salaries).length) return result;
    for (const salary of Object.values(salaries)) {
      result += salary as number;
    }
    return result;
  }

  console.log(sumSalaries(salaries)); // 650
}

const task23 = ref(`// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2`);

// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
function runTask23() {
  let user = {
    name: "John",
    age: 30,
  };

  function count(obj: { [key: string]: number | string }) {
    return Object.keys(obj).length;
  }

  console.log(count(user)); // 2
}
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// Деструктурирующее присваивание
// важность: 5
// У нас есть объект:

let user2 = {
  name: "John",
  years: 30,
};

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user2 = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// const { name, years: age, isAdmin = false } = user2;

// console.log(name, age, isAdmin); // John 30 false

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

const task24 = ref(`// Максимальная зарплата
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
console.log(topSalary(salaries2));`);
// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function runTask24() {
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
  console.log(topSalary(salaries2));
}
const task25 = ref(`
// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12)
alert(date)
`);

function runTask25() {
  // Создайте дату
  // важность: 5
  // Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

  // Для вывода используйте alert.

  const date = new Date(2012, 1, 20, 3, 12);
  alert(date);
}

const task26 = ref(`// Покажите день недели
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
console.log(getWeekDay(date1)); // нужно вывести "ВТ"`);
// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:
function runTask26() {
  let date1 = new Date(2012, 0, 3); // 3 января 2012 года

  const getWeekDay = (date: Date) => {
    const dayFromDate: DayNumber = date.getDay();
    console.log(dayFromDate);

    type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    type Days = {
      [key: DayNumber]: string;
    };

    const days: Days = {
      "0": "ПН",
      "1": "ВТ",
      "2": "СР",
      "3": "ЧТ",
      "4": "ПТ",
      "5": "СБ",
      "6": "ВС",
    };

    return days[dayFromDate];
  };
  console.log(getWeekDay(date1)); // нужно вывести "ВТ"
}

const task27 = ref(`// День недели в европейской нумерации
// важность: 5
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date2 = new Date(2012, 0, 3); // 3 января 2012 года

const getLocalDay = (date) => {
  return date.getDay();
};
alert(getLocalDay(date2)); // вторник, нужно показать 2`);
// День недели в европейской нумерации
// важность: 5
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function runTask27() {
  let date2 = new Date(2012, 0, 3); // 3 января 2012 года

  const getLocalDay = (date: Date) => {
    return date.getDay();
  };
  alert(getLocalDay(date2)); // вторник, нужно показать 2
}

const task28 = ref(`// Какой день месяца был много дней назад?
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
alert(getDateAgo(date3, 365)); // 2, (2 Jan 2014)`);

// Какой день месяца был много дней назад?
// важность: 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:
function runTask28() {
  let date3 = new Date(2015, 0, 2);

  const getDateAgo = (date: Date, days: number) => {
    const copy = new Date(date);
    copy.setDate(copy.getDate() - days);
    return copy.getDate();
  };
  alert(getDateAgo(date3, 1)); // 1, (1 Jan 2015)
  alert(getDateAgo(date3, 2)); // 31, (31 Dec 2014)
  alert(getDateAgo(date3, 365)); // 2, (2 Jan 2014)
}
// P.S. Функция не должна изменять переданный ей объект date.

const task29 = ref(`// Сколько сегодня прошло секунд?
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

console.log(getSecondsToday());`);
// Сколько сегодня прошло секунд?
// важность: 5
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function runTask29() {
  const getSecondsToday = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  };

  console.log(getSecondsToday());
}

const task30 = ref(`// Сколько секунд осталось до завтра?
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

console.log(getSecondsToTomorrow());`);
// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function runTask30() {
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

  console.log(getSecondsToTomorrow());
}

const task31 = ref(`// Форматирование относительной даты
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
alert(formatDate(new Date(new Date().getTime() - 86400 * 1000)));`);

// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

function runTask31() {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMilliseconds = now.getTime() - date.getTime();
    const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    if (diffMilliseconds < 1000) {
      return "прямо сейчас";
    }
    if (diffSeconds > 1000 && diffSeconds < 60) {
      return `${diffSeconds} сек. назад`;
    }
    if (diffMinutes < 60) {
      return `${diffMinutes} минут назад`;
    }
    const day = date.getDate();
    const month = date.getMonth() + 1; //тк месяца нумеруются с 0
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  alert(formatDate(new Date(new Date().getTime() - 1))); // "прямо сейчас"

  alert(formatDate(new Date(new Date().getTime() - 30 * 1000))); // "30 сек. назад"

  alert(formatDate(new Date(new Date().getTime() - 5 * 60 * 1000))); // "5 мин. назад"

  // вчерашняя дата вроде 31.12.2016, 20:00
  alert(formatDate(new Date(new Date().getTime() - 86400 * 1000)));
}
</script>

<style lang="css" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
