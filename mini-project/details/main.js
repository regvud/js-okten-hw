// На странице user-details.html:
const localID = localStorage.getItem('user id');
const userID = JSON.parse(localID);
const buttonDiv = document.getElementById('btn');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => response.json())
    .then(user => {
            const wrap = document.createElement('div');
            // 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
            const userInfo = function objectLoop(obj) {
                for (let key in obj) {
                    if (typeof obj[key] === 'object') {
                        objectLoop(obj[key]);
                    } else {
                        const p = document.createElement('p');
                        p.innerHTML = `<b>${key}</b>: ${obj[key]}`
                        wrap.appendChild(p)
                    }
                }
            }
            document.body.appendChild(wrap);
            userInfo(user);

        }
    )

    // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    //     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

    .then(() => {
        const postButton = document.createElement('button');
        postButton.innerText = 'posts of current user';

        let counter = 0;
        postButton.onclick = (() => {
            if (counter < 1) {
                fetch(`https://jsonplaceholder.typicode.com/users/${localID}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const ol = document.createElement('ol');

                        for (const post of posts) {
                            for (const postKey in post) {
                                if (postKey === 'id') {
                                    localStorage.setItem('post id', JSON.stringify(post[postKey]))
                                }

                                if (postKey === 'title') {
                                    const li = document.createElement('li');
                                    const p = document.createElement('p');
                                    const button = document.createElement('button');

                                    button.onclick = (() => {
                                        location.href = '../posts/post-details.html'
                                    })

                                    p.innerText = post[postKey];
                                    button.innerText = 'go to post';

                                    li.append(p, button);
                                    ol.appendChild(li);
                                }
                            }
                        }
                        document.body.appendChild(ol);
                    })
                counter++;
            }
        })

        buttonDiv.appendChild(postButton)
        document.body.appendChild(buttonDiv);
    })
