// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const block = document.createElement('h1');
const time = new Date().getTime();
let amount = JSON.parse(localStorage.getItem('amount')) || 100;

const storageTime = JSON.parse(localStorage.getItem('time'));
localStorage.setItem('time', JSON.stringify(time))

block.innerText = `${amount} UAH`;
document.body.appendChild(block);

console.log(time - storageTime)

if (time - storageTime) {
    amount += 10;
    localStorage.setItem('amount', amount);
}