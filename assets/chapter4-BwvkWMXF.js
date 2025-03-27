import{d as _,r as e,a as f,o as v,b as s,w as b,e as k,v as g,F as h,f as C,n as y,t as F,_ as R}from"./index-CFvXGzUr.js";import{C as T}from"./CodeRunner-B-7732XL.js";const w=["value"],B=_({__name:"chapter4",setup(E){const i=e(`// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

alert(sumTo(4));`),p=e(`// Вычислить факториал
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

alert(factorial(5));`),d=e(`// Числа Фибоначчи
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

alert(fib(5));`),x=e(`// Вывод односвязного списка
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
printList(list);`);let o={value:1,next:{value:2,next:{value:3,next:{value:4,next:null}}}};function a(t){console.log(t.value),t.next&&a(t.next)}a(o);const L=e(`// Вывод односвязного списка в обратном порядке
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

printListReverse(list)`);function u(t){t.next&&u(t.next)}u(o);const m=[i,p,d,x,L],l=e(i);return(t,n)=>(v(),f("div",{class:y(t.$style.container)},[n[1]||(n[1]=s("div",{class:"about"},[s("h1",null,"Chapter 3")],-1)),b(s("select",{"onUpdate:modelValue":n[0]||(n[0]=r=>l.value=r)},[(v(),f(h,null,C(m,(r,c)=>s("option",{key:c,value:r.value},F(`Задача ${c+1}`),9,w)),64))],512),[[g,l.value]]),k(T,{defaultCode:l.value},null,8,["defaultCode"])],2))}}),M="_container_1ill7_2",V="_about_1ill7_8",$={container:M,about:V},D={$style:$},z=R(B,[["__cssModules",D]]);export{z as default};
