// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let btn = document.getElementsByTagName('button')[0];
btn.onclick = function (e) {
    e.preventDefault();
    let inputs = document.form1.querySelectorAll('form>input');
    let div = document.createElement('div');

    for (const input of inputs) {
        let innerDiv = document.createElement('div')
        innerDiv.innerText = input.value;
        div.appendChild(innerDiv);
    }

    document.body.appendChild(div);
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// зробив на кнопку, бо чомусь не працює з перезавантаженням
let btnCounter = document.getElementsByTagName('button')[1];
let number = 0;

btnCounter.addEventListener('click', function (e) {
    e.preventDefault();

    let element = document.getElementById('main');
    number++;

    element.innerText = `${number}`;
    document.body.appendChild(element)
});
