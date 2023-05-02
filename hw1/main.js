// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let nine = -999;
let onetwothree = 123;
let pi = 3.14;
let twoseven = 2.7;

console.log(greeting, owu, com, ua, one, ten, nine, onetwothree, pi, twoseven)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Іван';
let middleName = 'Віталійович';
let lastName = 'Підопригора';
let person = `${lastName} ${firstName} ${middleName}`;

console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof (a), typeof (b), typeof (c));

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = String(prompt('Enter your name: '));
let fatherName = String(prompt('Enter your middle name: '));
let age = Number(prompt('Enter your age: '));

console.log(`Name: ${name}`);
console.log(`Middle Name: ${fatherName}`);
console.log(`Age: ${age}`);
