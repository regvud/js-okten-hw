// зробити масив на 100 об'єктів та дві кнопки prev next
const array = [];
for (let i = 0; i < 100; i++) {
    array.push(i)
}

let prev = document.createElement('button');
prev.innerText = 'prev';
let next = document.createElement('button');
next.innerText = 'next';

document.body.append(prev, next)

// при завантажені сторінки з'являються перші 10 об'єктів.
window.onload = function (e) {
    for (let i = 0; i < array[10]; i++) {
        const div = document.createElement('div');
        div.innerText = array[i];
        div.classList.add('onloadNumbers')
        document.body.append(div)
    }
}

//     При натисканні next виводяться настпні 10 об'єктів
let count = 10;
next.onclick = function (e) {
    e.preventDefault();
    const toDelete = document.querySelectorAll('div');

    for (const toDeleteElement of toDelete) {
        toDeleteElement.parentNode.removeChild(toDeleteElement)
    }

    for (let i = count; i < array[count + 10]; i++) {
        if (count > 100) {
            return
        } else {
            const div = document.createElement('div');
            div.innerText = array[i];
            document.body.appendChild(div)

        }
    }
    count += 10;
    console.log(count)
}

// const reducedArray = array.reduce((accum, value, index) => {
//         if (value.index >= 0 || value.index < 10) {
//             accum.one.push(value)
//         }
//         if (10 >= value.index < 20) {
//             accum.two.push(value)
//         }
//         if (20 >= value.index < 30) {
//             accum.three.push(value)
//         }
//         if (30 >= value.index < 40) {
//             accum.four.push(value)
//         }
//         if (40 >= value.index < 50) {
//             accum.five.push(value)
//         }
//         if (50 >= value.index < 60) {
//             accum.six.push(value)
//         }
//         if (60 >= value.index < 70) {
//             accum.seven.push(value)
//         }
//         if (70 >= value.index < 80) {
//             accum.eight.push(value)
//         }
//         if (80 >= value.index < 90) {
//             accum.nine.push(value)
//         }
//         if (90 >= value.index < 100) {
//             accum.ten.push(value)
//         }
//         return accum
//     },
//     {one: [], two: [], three: [], four: [], five: [], six: [], seven: [], eight: [], nine: [], ten: []}
// )
// console.log(reducedArray)
// При натисканні prev виводяться попередні 10 об'єктів
