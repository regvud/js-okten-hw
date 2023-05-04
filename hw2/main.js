// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [123, 'names', true, 60, 'five', 'alisa', 17, 90, false, 'kolya'];

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9],);


// - Створити 3 об`єкти які описують книги. Поля об`єкту : title ,pageCount, genre

let book1 = {
    title: 'Star Wars',
    pageCount: 600,
    genre: 'sci-fi'
};
let book2 = {
    title: 'Discovery',
    pageCount: 150,
    genre: 'animals'
};
let book3 = {
    title: 'Toy Story',
    pageCount: 300,
    genre: 'children'
};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Dancing',
    pageCount: 800,
    genre: 'casual',
    authors: [
        {name: 'steve', age: 30},
        {name: 'robert', age: 45},
        {name: 'alisa', age: 10}
    ]
};

let book5 = {
    title: 'Singing',
    pageCount: 700,
    genre: 'casual',
    authors: [
        {name: 'lora', age: 20},
        {name: 'john', age: 45},
        {name: 'bet', age: 50}
    ]
};

let book6 = {
    title: 'Swimming',
    pageCount: 500,
    genre: 'casual',
    authors: [
        {name: 'paul', age: 40},
        {name: 'jeff', age: 35},
        {name: 'lisa', age: 18}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

users = [{name: 'evgen', username: 'plush', password: 'kuku7020QWE'}, {
    name: 'sergiy',
    username: 'ogirok',
    password: 'openIG12'
}, {name: 'larisa', username: 'la', password: 'wqeyuioyhewqhn89'}, {
    name: 'sasha',
    username: 'plush',
    password: '01m10-1'
}, {name: 'petya', username: 'qy', password: 'je9821d291'}, {
    name: 'kolya',
    username: 'plush',
    password: 'dmsad921'
}, {name: 'vasya', username: 'gaba', password: 'ефуцоцуй0'}, {
    name: 'lesha',
    username: 'plush',
    password: 'тв921'
}, {name: 'oleg', username: 'lola', password: 'mnkldsa8921'}, {
    name: 'doba',
    username: 'polel',
    password: '849012843213'
},]

for (const user of users) {
    console.log(user['password'])
}


// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

x = 0;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

x = -3;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59
if (time <= 15) {
    console.log('First quater')
} else if (time <= 30) {
    console.log('Second quater')
} else if (time <= 45) {
    console.log('Third quater')
} else if (time <= 59) {
    console.log('Fourth quater')
} else {
    console.log('invalid number')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day <= 10) {
    console.log('First decade');
} else if (day <= 20) {
    console.log('Second decade');
} else if (day <= 31) {
    console.log('Third decade');
} else {
    console.log('invalid number')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let value = 3
switch (value) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('choose a number (1 to 7)')
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log('equal')
} else {
    console.log(num2)
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

x = undefined
x = x || "default"
console.log(x)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// виникає помилка в консолі

// for (let i = 0; i <= coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log('Супер');
//     }
// }

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}