// В index.html
// 1 отримати масив об'єктів з endpoint`а
const wrap = document.getElementById('wrap');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
        for (const user of users) {
            const userBlock = document.createElement('div');
            const info = document.createElement('p');
            userBlock.classList.add('user-block');

            // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            const detailsButton = document.createElement('button');

            detailsButton.onclick = (() => {
                location.href = '../details/user-details.html';
                localStorage.setItem('user id', JSON.stringify(user.id))
            })

            detailsButton.innerText = 'details';
            info.innerText = `${user.id} - ${user.name}`;

            userBlock.append(info, detailsButton)
            wrap.appendChild(userBlock)
        }
        document.body.appendChild(wrap);
    })



