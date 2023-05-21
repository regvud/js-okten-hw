//  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const lowestNum = (a, b, c) => {
    let ns = [];
    ns.push(a)
    ns.push(b)
    ns.push(c)

    return ns.sort((a, b) => a - b)[0]
}
console.log(lowestNum(1, 2, 3))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const highestNum = (a, b, c) => {
    let ns = [];
    ns.push(a)
    ns.push(b)
    ns.push(c)

    return ns.sort((a, b) => b - a)[0]
}
console.log(highestNum(1, 2, 3));

// - створити функцію яка повертає найбільше число з масиву
let arr = [10, 20, 30]
const highestArrayNum = (arr) => {

    return arr.sort((a, b) => b - a)[0]
}
console.log(highestArrayNum(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleValue(arr) {
    let res = 0;
    for (const arrElement of arr) {
        res += arrElement
    }

    return res / arr.length
}

console.log(middleValue(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function f(...num) {
    let max = 0;

    for (const numElement of num) {
        if (numElement > max) {
            max = numElement
        }
    }
    console.log(max)

    let min = max;

    for (const numElement of num) {
        if (numElement < min) {
            min = numElement
        }
    }

    return min
}

console.log(f(1, 2, 3));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function f1(arr) {
    return arr.reverse()
}

console.log(f1([1, 2, 3]));

//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function f2(...args) {

    if (args.length === 1) {
        console.log(args + '');

    } else {

        for (let i = 0; i < args.length - 1; i++) {
            console.log(args[i] + args[i + 1]);

        }
    }
}

f2(10, 100)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
