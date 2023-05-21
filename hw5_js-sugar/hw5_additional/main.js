//
// Всі функції повинні бути описані стрілочним типом!!!!

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

// - створити функцію яка повертає найменьше число з масиву
const lowestArrayNum = (arr) => {

    return arr.sort((a, b) => (a - b))[0]
}
console.log(lowestArrayNum(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const summator = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum
}

console.log(summator(arr));
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
const loopNumbersTo = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
loopNumbersTo(20)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const loopFromTo = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}
loopFromTo(5, 10)
loopFromTo(10, 5)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const foo = (arr, i) => {
    arr.forEach((item, index) => {
        if (index === i) {
            let el = arr[index]
            arr[index] = arr[index + 1]
            arr[index + 1] = el
        }
    })

    return arr
}

console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
const zeroToEnd = (arr) => {
    let newArr = [];
    let zeroesArr = [];

    arr.forEach(value => {
        if (value !== 0) {
            newArr.push(value)
        } else {
            zeroesArr.push(value)
        }
    })
    return newArr.concat(zeroesArr)
}

console.log(zeroToEnd([1, 0, 6, 0, 3]));
console.log(zeroToEnd([1, 2, 3, 4, 0]));
console.log(zeroToEnd([1, 0, 0, 0]));
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
