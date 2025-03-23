import{C as o}from"./CodeDisplay-BM2OI5dk.js";import{d as g,r as l,a as L,o as b,b as u,e,w as r,n as k,f as y,_ as j}from"./index-D6pjww6V.js";const T=g({__name:"chapter4",setup(R){const a=l(`// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

alert(sumTo(4));`);function c(){function t(n){return n===1?1:n+t(n-1)}alert(t(4))}const f=l(`// Вычислить факториал
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

alert(factorial(5));`);function v(){function t(n){return n===1?1:n*t(n-1)}alert(t(5))}const p=l(`// Числа Фибоначчи
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

alert(fib(5));`);function h(){function t(n){return n<=1?n:t(n-1)+t(n-2)}alert(t(5))}const d=l(`// Вывод односвязного списка
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
printList(list);`);let i={value:1,next:{value:2,next:{value:3,next:{value:4,next:null}}}};function x(){function t(n){console.log(n.value),n.next&&t(n.next)}t(i)}const m=l(`// Вывод односвязного списка в обратном порядке
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

printListReverse(list)`);function _(){function t(n){n.next&&t(n.next),console.log(n.value)}t(i)}return(t,n)=>{const s=y("VCodeBlock");return b(),L("div",{class:k(t.$style.container)},[n[0]||(n[0]=u("div",{class:"about"},[u("h1",null,"Chapter 4")],-1)),e(o,{onExecute:c},{default:r(()=>[e(s,{code:a.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),e(o,{onExecute:v},{default:r(()=>[e(s,{code:f.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),e(o,{onExecute:h},{default:r(()=>[e(s,{code:p.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),e(o,{onExecute:x},{default:r(()=>[e(s,{code:d.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1}),e(o,{onExecute:_},{default:r(()=>[e(s,{code:m.value,highlightjs:"",lang:"javascript",theme:"neon-bunny"},null,8,["code"])]),_:1})],2)}}}),C="_container_5n7yf_3",E="_about_5n7yf_15",B={container:C,about:E},w={$style:B},M=j(T,[["__cssModules",w]]);export{M as default};
