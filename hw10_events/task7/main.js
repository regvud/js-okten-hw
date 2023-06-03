// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const rowsInput = document.getElementById('rows');
const countsInput = document.getElementById('counts');
const valuesInput = document.getElementById('values');

function main(rows, counts, values) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr')
        tr.innerText = values;
        table.appendChild(tr)
        for (let i = 1; i < counts; i++) {
            const td = document.createElement('td')
            td.innerText = values;
            tr.appendChild(td)
        }
    }
    document.body.appendChild(table)
}

// main(4, 8, 'ivan');
btn.onclick = () => main(rowsInput.value, countsInput.value, valuesInput.value);

