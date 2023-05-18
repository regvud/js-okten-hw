// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let greet = 'hello world';
let lorem = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(greet.length, lorem.length, javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(greet.toUpperCase(), lorem.toUpperCase(), javascriptIsCool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM',
greet = 'HELLO WORLD';
lorem = 'LOREM IPSUM';
javascriptIsCool = 'JAVASCRIPT IS COOL';

console.log(greet.toLowerCase(), lorem.toLowerCase(), javascriptIsCool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.slice(1, 13));

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');

console.log(stringToArray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = numbersArray.map(number => number + '')
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(nums, choice) {
    if (choice === 'ascending') {
        return nums.sort((a, b) => a - b)
    }
    if (choice === 'descending') {
        return nums.sort((a, b) => a + b)
    }
}

console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
})

console.log(coursesAndDurationArray.reverse());

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((value, index) => {
    value.id = index;
    return value
})

console.log(coursesAndDurationArray)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

// - знайти піковий туз
const AceOfSpades = cards.find(card => {
    if (card.cardSuit === 'spade' && card.value === 'ace') {
        return card
    }
})
console.log(AceOfSpades)

// - всі шістки
cards.forEach(card => {
        if (card.value === '6') {
            console.log(card)
        }
    }
)

// - всі червоні карти
cards.forEach(card => {
        if (card.color === 'red') {
            console.log(card)
        }
    }
)

// - всі буби
cards.forEach(card => {
        if (card.cardSuit === 'diamond') {
            console.log(card)
        }
    }
)

// - знайти всі трефи від 9 та більше


let filteredCards = cards.filter(card => card.cardSuit === 'clubs' && (card.value >= '9' || card.value === '10'))
console.log(filteredCards);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let arraysCards = cards.reduce((accumulator, card) => {
        if (card.cardSuit === 'spade') {
            accumulator.spades.push(card)
        }
        if (card.cardSuit === 'diamond') {
            accumulator.diamonds.push(card)
        }
        if (card.cardSuit === 'clubs') {
            accumulator.clubs.push(card)
        }
        if (card.cardSuit === 'heart') {
            accumulator.hearts.push(card)
        }

        return accumulator
    },

    {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(arraysCards);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let sassFind = coursesArray.filter(course => course.modules.includes('sass'))
console.log(sassFind)

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerFind = coursesArray.filter(course => course.modules.includes('docker'))
console.log(dockerFind)