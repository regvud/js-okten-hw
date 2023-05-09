// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik"];

if (friends.length >= 3) {
    console.log('Big array')
} else {
    console.log('Small array')
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

function f(x, y, z) {
    if (y < x && x < z) {
        console.log(`${x} is middle`);
    } else if (z < x && x < y) {
        console.log(`${x} is middle`);
    } else if (z < y && y < x) {
        console.log(`${y} is middle`);
    } else if (x < y && y < z) {
        console.log(`${y} is middle`);
    } else if (x < z && z < y) {
        console.log(`${z} is middle`);
    } else if (y < z && z < x) {
        console.log(`${z} is middle`);
    } else {
        console.log('Equal input');
    }
}

f(10, 100, 99)

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = 1;
let b = 2;
let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

function f1(num) {
    console.log(result = num > 0 && num !== 0 ? 'Plus' : 'Minus');
}

f1(-1)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = true;
if (test) {
    console.log('True');
} else {
    console.log('False');
}

console.log(test = test ? 'True' : 'False');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let ans = prompt('Яка «офіційна» назва JavaScript?');
if (ans === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('«Не знаєте? ECMAScript!')
}


//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
function f2(room) {
    if (room >= 1 && room <= 20) {
        console.log('I')
    } else if (room >= 21 && room <= 48) {
        console.log('II')
    } else if (room >= 49 && room <= 90) {
        console.log('III')
    } else {
        console.error('Incorrect number')
    }
}

f2(90)

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 1;
console.log(number === 10 ? 'ВІРНО' : 'НЕВІРНО');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = 23;
console.log(temp >= 10 && temp <= 22 ? 'ВЧИТИСЯ' : 'ОНЛАЙН');


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let gift = 3;
switch (gift) {
    case 1:
        console.log('Car');
        break;
    case 2:
        console.log('Moto');
        break;
    case 3:
        console.log('Iphone');
        break;
    case 4:
        console.log('Pencil');
        break;
    case 5:
        console.log('Song');
        break;
    default:
        console.error('Choose between 1-5')
}