<template>
  <div class="about">
    <h1>Chapter 3</h1>
  </div>
</template>

<script lang="js">
// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

let str = "Привет";

// str.test = 5;

// alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?
//не сработает, свойство добавится в объект-обертку и после удалится. При обращении вернет ошибку

// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const a = +prompt('Введите первое число') //prompt вернет строку, поэтому преобразуем к числу через +
const b = +prompt('Введите второе число')

console.log(a + b);

// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

function ucFirst(str) {
  return str.split('').map((key, i) => i === 0 ? key.toUpperCase() : key).join('');
}

console.log(ucFirst('вася'));

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
  const toLower = str.toLowerCase()
  if (toLower.includes('xxx') || toLower.includes('viagra')) {
    return true
  }
  return false
}

console.log(checkSpam('buy ViAgRA now'));

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + '…' : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

console.log(truncate("Всем привет!", 20))

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

function extractCurrencyValue(currency) {
  return +currency.substring(1)
}

console.log( extractCurrencyValue('$120') === 120); // true

//Arrays

// Скопирован ли массив?
// важность: 3
// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // Банан, Яблоки, Груша, Апельсин (обе переменные ссылаются на один массив)

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

const styles = ["Джаз", "Блюз"]
styles.push('Рок-н-ролл')
console.log(styles);

styles[Math.ceil(styles.length / 2 - 1)] = 'Классика'
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Регги')
console.log(styles);

// Вызов в контексте массива
// важность: 5
// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // вернет элементы массива arr, т.к в качестве this выступает массив.

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const arr = []
  while(true) {
    const num = prompt('Введите число', '0')
    if(num === null || num === '' || isNaN(+num)) {
      break;
    }
    arr.push(+num);
  }
  return arr.reduce((acc, el) => acc + el, 0);
}

console.log(sumInput())

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
for(const item of arr) {
  sum += item;
  result = Math.max(result, sum)
  if(sum < 0) {
    sum = 0
  }
}
return result;
}

console.log( getMaxSubSum([-1, 2, 3, -9]));

// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

function camelize(str) {
  return str.split('-').map((el, i) => {
    if(i == 0) {
      return el
    }
    const arr = el.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
  }).join('')
}

console.log(camelize("background-color"));

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(el => el >= a && el <= b)
}

let filtered = filterRange(arr1, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr1 ); // 5,3,8,1 (без изменений)

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

let arr3 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
for(let i = 0; i < arr.length; i++) {
  if(arr[i] < a || arr[i] > b) {
    arr.splice(i, 1)
    i--;
  }
}
}

filterRangeInPlace(arr3, 1, 4); // удалены числа вне диапазона 1..4

alert( arr3 ); // [3, 1]

// Сортировать в порядке по убыванию
// важность: 4
let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a)


console.log(arr4);// 8, 5, 2, 1, -10

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr5 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  const copy = [...arr]
  return copy.sort()
}

let sorted = copySorted(arr5);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr5 ); // HTML, JavaScript, CSS (без изменений)

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

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  }
  this.calculate = function(str) {
    let [a, operator, b] = str.split(' ')
    return this.methods[operator](+a, +b)
  }
  this.addMethod = function(name, func) {
    this.methods[name] = func
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 ** 3")) //8


// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(el => el.name)

console.log( names ); // Вася, Петя, Маша

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(el => ({fullName: el.name + ' ' + el.surname, id: el.id})
)

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr6 = [ vasya2, petya2, masha2 ];
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age)
}
sortByAge(arr6);

// теперь: [vasya, masha, petya]
console.log(arr6[0].name, arr6[1].name, arr6[2].name); // Вася Маша Петя

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

function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) //случайный индекс от 0 до i
    [arr[i], arr[j]] = [arr[j], arr[i]]; //поменяли местами
  }
}

let testArr = [1, 2, 3]
shuffle(testArr)
console.log(testArr);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
