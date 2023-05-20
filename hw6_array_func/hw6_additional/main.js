// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        let res = str.slice(i, i + n);
        arr.push(res)
    }
    return arr

}

console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const delete_characters = (str, length) => (str.slice(0, length));

console.log(delete_characters('Каждый охотник желает знать', 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
const insert_dash = (str) => (str.replaceAll(' ', '-').toUpperCase())
console.log(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const capitalizeFirst = (str) => (str.slice(0, 1).toUpperCase() + str.substring(1, str.length))

console.log(capitalizeFirst('sos'));

// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n4 = 'Harry Potter'
// let n5 = 'Ron Whisley'
// let n6 = 'Hermione Granger'

let validName = (name) => {
    const findex = name.indexOf('-')
    const lindex = name.lastIndexOf('-')

    const fname = name.slice(0, findex)
    const lname = name.slice(lindex + 1, name.length)

    return fname + ' ' + lname
}
console.log(validName('Vasya----------Olya'));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randomArray = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr
}
console.log(randomArray());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randomArray().sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
const filtered = randomArray().filter(value => {
    if (value % 2 === 0 && value !== 0) {
        return value
    }
})

console.log(filtered);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = (str) => {
    // let arr = [];
    // arr.push(str[0].toUpperCase())
    //
    // for (let i = 1; i < str.length; i++) {
    //     if (str[i] === ' ') {
    //         arr.push(`${str[i]}${str[i += 1].toUpperCase()}`)
    //     } else {
    //         arr.push(str[i])
    //     }
    // }
    //
    // return arr.join('')


// capitalize('ivan teles subway nevada')
    console.log(capitalize('ivan teles subway nevada'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за  кількістю елементів вполі modules
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
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

    console.log(coursesArray.sort((a, b) => a.modules.length - b.modules.length).reverse());

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
    const count = (str, stringsearch) => {
        let counter = 0;
        for (const element of stringsearch) {
            if (element === str) {
                counter += 1;
            }
        }
        return counter
    }

    console.log(count('о', "Астрономия это наука о небесных объектах"));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

    let somestr = "Сила тяжести приложена к центру масс тела";

    const cutString1 = (str, n) => {
        const arr = str.split(' ');
        arr.length = n;
        return arr.join(' ')
    }

    console.log(cutString1(somestr, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
    const books = [{
        title: 'Harry Potter',
        pages: 150,
        authors: ['J.K. Rowling', 'mb others'],
        genres: ['dark fantasy']
    }, {
        title: 'Gatsby',
        pages: 100,
        authors: ['Ronald', 'Jane', 'McDonald'],
        genres: ['usual literature', 'unusual']
    }, {
        title: 'LOTR',
        pages: 300,
        authors: ['Tolkin'],
        genres: ['Fantasy']
    }]
}

// -знайти наібльшу книжку.
let biggestBook = books.sort((a, b) => b.pages - a.pages);
console.log(biggestBook[0])

// - знайти книжку/ки з найбільшою кількістю жанрів
let mostGenresBook = books.sort((a, b) => b.genres.length - a.genres.length);
console.log(mostGenresBook[0])

// - знайти книжку/ки з найдовшою назвою
let longestTitleBook = books.sort((a, b) => b.title.length - a.title.length);
console.log(longestTitleBook[0])

// - знайти книжку/ки які писали 2 автори
console.log(books.filter(value => value.authors.length === 2));

// - знайти книжку/ки які писав 1 автор
console.log(books.filter(value => value.authors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.pages - b.pages));

