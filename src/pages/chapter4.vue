<template>
  <div :class="$style.container">
    <div class="about">
      <h1>Chapter 4</h1>
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
  </div>
</template>

<script lang="ts" setup>
import CodeDisplay from "@/components/CodeDisplay/CodeDisplay.vue";
import { ref } from "vue";

// function quickSort(arr: any[]) {
//   // для массивов чисел
//   if (arr.length < 2) {
//     return arr;
//   }
//   const startEl = arr[Math.floor(Math.random() * arr.length)];

//   let left = [];
//   let right = [];
//   let equal = [];

//   for (let val of arr) {
//     if (val < startEl) {
//       left.push(val);
//     } else if (val > startEl) {
//       right.push(val);
//     } else {
//       equal.push(val);
//     }
//   }
//   return [...quickSort(left), ...equal, ...quickSort(right)];
// }

// let unsorted = [23, 45, 16, 37, 3, 99, 22];
// let sorted = quickSort(unsorted);

// console.log("Sorted array", sorted);

// function merge(left, right) {
//   let resultArray = [],
//     leftIndex = 0,
//     rightIndex = 0;

//   // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       resultArray.push(left[leftIndex]);
//       leftIndex++; // Move to the next element in the `left` array
//     } else {
//       resultArray.push(right[rightIndex]);
//       rightIndex++; // Move to the next element in the `right` array
//     }
//   }

//   // Concatenate the remaining elements from either `left` or `right` (if any)
//   return resultArray
//     .concat(left.slice(leftIndex))
//     .concat(right.slice(rightIndex));
// }

// function mergeSort(array) {
//   // Base case: If the array has only one element, return it (already sorted)
//   if (array.length === 1) {
//     return array;
//   }

//   // Divide the array into two halves
//   const middle = Math.floor(array.length / 2); // Find the middle index
//   const left = array.slice(0, middle); // Split the array into left half
//   const right = array.slice(middle); // Split the array into right half

//   // Recursively call mergeSort on the left and right halves
//   return merge(
//     mergeSort(left), // Recursively sort the left half
//     mergeSort(right) // Recursively sort the right half
//   );
// }

// console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

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
function runTask0() {
  function sumTo(n: number) {
    if (n === 1) {
      return 1;
    }
    return n + sumTo(n - 1);
  }

  alert(sumTo(4));
}

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
function runTask1() {
  function factorial(n: number) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  alert(factorial(5));
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

function runTask2() {
  function fib(n: number) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }

  alert(fib(5));
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
function runTask3() {
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
  printList(list);
}

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
function runTask4() {
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

  printListReverse(list);
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
