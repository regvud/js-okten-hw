// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
const emptyArray = [];
for (let i = 1; i <= 102; i++) {
    if (i % 2 === 0) {
        emptyArray[emptyArray.length] = i;
    }
}

// b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 1; i <= 102; i++) {
    if (i % 2 !== 0) {
        emptyArray[emptyArray.length] = i;
    }
}

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    emptyArray[emptyArray.length] = Math.floor(Math.random() * 100000) + 1;
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i <= 20; i++) {
    emptyArray[emptyArray.length] = Math.floor(Math.random() * 732) + 8;
}
console.log(emptyArray)

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < emptyArray.length; i += 3) {
    const emptyArrayElement = emptyArray[i];
    console.log(emptyArrayElement)
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < emptyArray.length; i += 3) {
    const emptyArrayElement = emptyArray[i];
    if (emptyArrayElement % 2 === 0) {
        console.log(emptyArrayElement)
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const newArray = [];

for (let i = 2; i < emptyArray.length; i += 3) {
    const emptyArrayElement = emptyArray[i];
    if (emptyArrayElement % 2 === 0) {
        newArray[newArray.length] = emptyArrayElement;
        console.log(emptyArrayElement)
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//     EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

const arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const values = [100, 250, 50, 168, 120, 345, 188];
let summ = 0;

for (let value of values) {
    summ += value;
}

let middleCheck = summ / values.length


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
randomValues = [12, 21312, 321, 3321, 231, 3213, 1312, 321, 1, 12];
newValues = [];
for (const randomValue of randomValues) {
    newValues[newValues.length] = randomValue * 5;
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

allTypesArray = ['boaaa', false, true, 10, 100, 88, 'ivan']
numbersArray = [];
for (let allTypesArrayElement of allTypesArray) {
    if (typeof allTypesArrayElement === 'number') {
        numbersArray[numbersArray.length] = allTypesArrayElement;
    }
}


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false}];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

const novaArr = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (city.user_id === user.id) {
            novaArr[novaArr.length] = {
                id: `${user.id}`, name: `${user.name}`, age: `${user.age}`, status: `${user.status}`, address: {
                    user_id: `${city.user_id}`, country: `${city.country}`, city: `${city.city}`,
                }
            }
        }
    }
}

console.log(novaArr)

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const tenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let tenElement of tenElements) {
    tenElement % 2 === 0 ? console.log(tenElement) : console.log('');
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const emptyTenElements = [];

for (let tenElement of tenElements) {
    emptyTenElements[emptyTenElements.length] = tenElement;
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const mas = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < mas.length; i++) {
    const masElement = mas[i];
    word += masElement;
}

console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word1 = '';

let i = 0;
while (word1.length < mas.length) {
    word1 += mas[i];
    i++;
}

console.log(word1)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word2 = '';
for (const masElement of mas) {
    word2 += masElement;
}

console.log(word2)

