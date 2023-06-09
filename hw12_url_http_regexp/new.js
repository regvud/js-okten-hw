// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const ul = document.createElement('ul');
const usersList = document.getElementById('users-list');

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {

        json.forEach(value => {
                const li = document.createElement('li');
                const btn = document.createElement('button');

                btn.innerText = 'link'
                li.innerText = `${value.id} - ${value.name}`;
                ul.append(li, btn)

                btn.onclick = function () {
                    fetch(`http://jsonplaceholder.typicode.com/users/${value.id}`)
                        .then(response => response.json())
                        .then(() => {
                            localStorage.setItem('user', JSON.stringify(value))
                            location.href = `user-details.html?id=${value.id}`
                        })
                }

                if (usersList) {
                    usersList.appendChild(ul)
                    document.body.appendChild(usersList)
                }
            }
        )
    })



