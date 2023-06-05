// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const allElements = document.getElementsByTagName("*");

const tags = [];

function classFinder() {

    for (const element of allElements) {
        const value = element.classList.value;
        if (value) {
            tags.push(value)
        }
    }
    return tags
}

classFinder();
console.log(tags)


