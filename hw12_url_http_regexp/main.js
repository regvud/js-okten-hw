// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const url = new URL('http://jsonplaceholder.typicode.com/users');
const ul = document.createElement('ul');
const usersList = document.getElementById('users-list');

fetch(url)
    .then(response => response.json())
    .then(json => {

        json.forEach(value => {
                const li = document.createElement('li');
                const href = document.createElement('a');
                const btn = document.createElement('button');

                href.setAttribute('href', `user-details.html?id=${value.id}`);
                btn.innerText = 'link'
                li.innerHTML = `${value.id} - ${value.name}`;
                ul.append(li, btn)

                btn.onclick = function () {
                    fetch(`${url}/${value.id}`)
                        .then(response => response.json())
                        .then(() => {
                            const userIDurl = href.getAttribute('href');
                            location.href = `${userIDurl}`

                        })
                }

                if (usersList) {
                    usersList.appendChild(ul)
                    document.body.appendChild(usersList)
                }

            }
        )
    })



