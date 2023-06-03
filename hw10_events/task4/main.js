// зробити масив на 100 об'єктів та дві кнопки prev next
const array = [];
for (let i = 0; i < 100; i++) {
    array.push(i)
}

let prev = document.createElement('button');
prev.innerText = 'prev';
prev.setAttribute('disabled', 'disabled')

let next = document.createElement('button');
next.innerText = 'next';

document.body.append(prev, next)


let page = 1

function handler(page, limit) {
    const wrapper = document.getElementById('main');

    const startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    // if (endIndex > array.length) {
    //     endIndex = array.length
    // }

    if (startIndex) {
        prev.removeAttribute('disabled')
    }
    if (page <= 1) {
        prev.setAttribute('disabled', 'disabled')
    }
    if (page >= limit) {
        next.setAttribute('disabled', 'disabled');
    } else {
        next.removeAttribute('disabled');
    }

    let children = [];
    for (let i = startIndex; i < endIndex; i++) {
        const item = array[i];
        const div = document.createElement('div');
        div.innerText = item;
        children.push(div)
    }
    wrapper.replaceChildren(...children);
    console.log(page)
}

// при завантажені сторінки з'являються перші 10 об'єктів.
handler(page, 10);

// при натисканні next виводяться наступні 10 об'єктів
next.addEventListener('click', () => handler(page += 1, 10))

// при натисканні prev виводяться попередні 10 об'єктів
prev.addEventListener('click', () => handler(page -= 1, 10))
