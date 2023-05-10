// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [1, 13, -1, 3, 20, 'sting', 'world', 'moon', 'home', 'green', true, false, 12, 'cool', 99]

for (const arrayElement of array) {
    console.log(arrayElement)
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = 'Vova';
emptyArray[1] = 'Sasha';
emptyArray[2] = 'Sasha';
emptyArray[3] = 'Stepa';
emptyArray[4] = 'Lilya';

console.log(emptyArray)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// 1. перебрати його циклом while
console.log('**WHILE LOOP**')
let array2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array2.length) {
    console.log(array2[i])
    i++;
}


//     2. перебрати його циклом for
console.log('**FOR LOOP**')

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i])
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('**WHILE ODD INDEX**');
i = 0;
while (i < array2.length) {
    if (i % 2 !== 0) {
        console.log(array2[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('**FOR ODD INDEX**');

for (let i = 0; i < array2.length; i++) {
    if (i % 2 !== 0) {
        console.log(array2[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log('**WHILE EVEN INDEX**');
i = 0;
while (i < array2.length) {
    if (i % 2 === 0) {
        console.log(array2[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('**FOR EVEN INDEX**');

for (let i = 0; i < array2.length; i++) {
    if (i % 2 === 0) {
        console.log(array2[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('**OKTEN**');

for (let i = 0; i < array2.length; i++) {
    let array2Element = array2[i]
    if (array2Element % 3 === 0) {
        array2Element = 'okten';
    }
    console.log(array2Element)
}

// 8. вивести масив в зворотньому порядку.
console.log('**REVERSED ARRAY**')
for (let i = array2.length - 1; i >= 0; i--) {
    const array2Element = array2[i];
    console.log(array2Element);

}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.
console.log('**REVERSED WHILE LOOP**')
i = array2.length - 1;
while (i >= 0) {
    console.log(array2[i])
    i--;
}

// 2.
console.log('**REVERSED FOR LOOP**')

for (let i = array2.length - 1; i >= 0; i--) {
    const array2Element = array2[i];
    console.log(array2Element);

}

// 3.
console.log('**REVERSED WHILE ODD INDEX**');
i = array2.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(array2[i]);
    }
    i--;
}

// 4.
console.log('**REVERSED FOR ODD INDEX**');
for (let i = array2.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(array2[i]);
    }
}

// 5.
console.log('**REVERSED WHILE EVEN INDEX**');
i = array2.length - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(array2[i]);
    }
    i--;
}

// 6.
console.log('**REVERSED FOR EVEN INDEX**');

for (let i = array2.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(array2[i]);
    }
}

// 7.
console.log('**REVERSE OKTEN**');

for (let i = array2.length - 1; i >= 0; i--) {
    let array2Element = array2[i]
    if (array2Element % 3 === 0) {
        array2Element = 'okten';
    }
    console.log(array2Element)
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let bigArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (const number of bigArray) {
    console.log(number)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
bigArray = ['dsads', 'fish', 'ads', 'puppy', 'cat', 'melon', 'hello', 'father', 'mother', 'brother']

for (const element of bigArray) {
    console.log(element)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
bigArray = [false, true, 21903021, 3.14, 'vasya', 'petya', 'roma', 25, false, 'casual']

for (const bigArrayElement of bigArray) {
    console.log(bigArrayElement)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
bigArray = [false, true, 10, 20, 30, 'sasha', 'pasha', true, 18, 77, false]

for (let i = 0; i < bigArray.length; i++) {
    const bigArrayElement = bigArray[i];
    if (typeof bigArrayElement === "boolean") {
        console.log(bigArrayElement)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < bigArray.length; i++) {
    const bigArrayElement = bigArray[i];
    if (typeof bigArrayElement === "number") {
        console.log(bigArrayElement)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < bigArray.length; i++) {
    const bigArrayElement = bigArray[i];
    if (typeof bigArrayElement === "string") {
        console.log(bigArrayElement)
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
emptyArray = [];
emptyArray[0] = 'name';
emptyArray[1] = 'age';
emptyArray[2] = false;
emptyArray[3] = 10;
emptyArray[4] = 14;
emptyArray[5] = 'texas';
emptyArray[6] = true;
emptyArray[7] = false;
emptyArray[8] = false;
emptyArray[9] = 100000;

for (const emptyArrayElement of emptyArray) {
    console.log(emptyArrayElement)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(i)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(i)

}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(i)
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(i)

    }

}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(i)

    }

}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const booksArray = [
    {
        title: 'Scoobi-doo',
        pages: 100,
        authors: ['jerry', 'battery'],
        genres: ['cartoon', 'marijuana', 'comedy']
    },
    {
        title: 'Harry Potter',
        pages: 300,
        authors: ['Anna', 'Rob', 'Lutor'],
        genres: ['Drama', 'fantasy']
    },
    {
        title: 'ice and fire',
        pages: 1000,
        authors: ['George R.R.'],
        genres: ['Fantasy']
    },
]

// -знайти наібльшу книжку.
let maxPages = 0;

for (let i = 0; i < booksArray.length; i++) {
    const booksElement = booksArray[i]
    if (booksElement.pages > maxPages) {
        maxPages = booksElement.pages;
    }

}

for (const booksArrayElement of booksArray) {
    if (maxPages === booksArrayElement.pages) {
        console.log(booksArrayElement);
    }
}

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = 0;
let maxGenresBook;

for (let i = 0; i < booksArray.length; i++) {
    const booksArrayElement = booksArray[i];
    const genresCounter = booksArrayElement.genres.length;
    if (genresCounter > maxGenres) {
        maxGenres = genresCounter;
        maxGenresBook = booksArrayElement;
    }
}
console.log(maxGenresBook)

// - знайти книжку/ки з найдовшою назвою
let maxTitle = 0;
let longestTitleBook;

for (let i = 0; i < booksArray.length; i++) {
    const booksArrayElement = booksArray[i];
    const titleCounter = booksArrayElement.title.length;
    if (titleCounter > maxTitle) {
        maxTitle = titleCounter;
        longestTitleBook = booksArrayElement;
    }
}
console.log(longestTitleBook)

// - знайти книжку/ки які писали 2 автори
let twoAuthorsBook;
for (let i = 0; i < booksArray.length; i++) {
    const booksArrayElement = booksArray[i];
    const authorsCounter = booksArrayElement.authors.length;
    if (authorsCounter === 2) {
        twoAuthorsBook = booksArrayElement;
    }
}
console.log(twoAuthorsBook)

// - знайти книжку/ки які писав 1 автор
let oneAuthorBook;
for (let i = 0; i < booksArray.length; i++) {
    const booksArrayElement = booksArray[i];
    const authorsCounter = booksArrayElement.authors.length;
    if (authorsCounter === 1) {
        oneAuthorBook = booksArrayElement;
    }
}
console.log(oneAuthorBook)