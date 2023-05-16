// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareS = (a, b) => (a * b);

console.log(squareS(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const pi = 3.14

let circleS = (radius) => pi * (radius * radius);

console.log(circleS(12));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Sцил = 2πRH + 2πR2 = 2πR(H + R)

const cilinderS = (height, radius) => 2 * pi * radius * (height + radius)

console.log(cilinderS(1, 1));

// - створити функцію яка приймає масив та виводить кожен його елемент
const someArr = [1, 2, 3, 4, 5, 6, 7];

const reveal = (arr) => someArr.forEach((element) => console.log(element))

reveal(someArr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraphCreator = (txt) => (document.write(`<p>${txt}</p>`))


paragraphCreator('POLOLOLO')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const listCreator = (txt) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

listCreator('zazazazazazaza')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const listCreator2 = (txt, amount) => {
    document.write(`<ul>`)
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

listCreator2('bla', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = ['vasya', 12, 'izzya', false, true];

const arrayListCreator = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

arrayListCreator(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
array = [
    {
        id: 1,
        name: 'stepa',
        age: 20
    },
    {
        id: 2,
        name: 'kolya',
        age: 30
    },
    {
        id: 3,
        name: 'valera',
        age: 17
    },
]

const objWriter = (arr) => {
    for (const arrElement of arr) {
        document.write(`<p>ID - ${arrElement.id}</p>`)
        document.write(`<p>NAME - ${arrElement.name}</p>`)
        document.write(`<p>AGE - ${arrElement.age}</p>`)
    }
}

objWriter(array)

// - створити функцію яка повертає найменьше число з масиву
array = [2, 14, 100, 12, 5, 6, 8, 2, 13, 10, 11]

const minNumber = (arr) => {
    let minimum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            minimum = arr[i + 1]
        } else {
            minimum = arr[i]
        }
        for (const arrElement of arr) {
            if (arrElement < minimum) {
                minimum = arrElement;
                return minimum
            }
        }
    }
}

console.log(minNumber(array));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let sumNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        sumNumber += arr[i];
    }
    return sumNumber
}


console.log(sum(array));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
array = [2, 14, 100, 12, 5, 6, 8, 2, 13, 10, 11]

const swap = (arr, index1, index2) => {
    let a = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

// function swap2(arr, index1, index2) {
//     [arr[index1], arr[index2] = arr[index2], arr[index1]]
//     return arr;
// }

console.log(swap(array, 2, 1));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let result = 0;

    for (const currencyValue of currencyValues) {
        for (const currencyValueKey in currencyValue) {
            if (exchangeCurrency === currencyValue.currency) {
                result = sumUAH / currencyValue.value
            }
        }
    }
    return result
}

console.log(exchange(10000, currencies, 'USD'));
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250