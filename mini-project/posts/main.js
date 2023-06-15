//     На странице post-details.html:
const localID = localStorage.getItem('user id');
const localPostID = localStorage.getItem('post id');
const userID = JSON.parse(localID);
const postID = JSON.parse(localPostID);
const wrap = document.getElementById('wrap');
const postsInfoBlock = document.getElementById('post-info');
const commentsInfoBlock = document.getElementById('comments');

document.body.appendChild(wrap)

fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts/?id=${postID}`)
    .then(response => response.json())
    .then(post => {

        // 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
        const pagePost = post[0];

        for (const key in pagePost) {
            const postsText = document.createElement('p');
            postsText.innerHTML = `<b>${key}</b> - ${pagePost[key]}`;
            postsInfoBlock.appendChild(postsText)
        }

        wrap.appendChild(postsInfoBlock);
    })
    // 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

    .then(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
                .then(r => r.json())
                .then(comments => {

                    const ol = document.createElement('ol');

                    for (const comment of comments) {
                        for (const key in comment) {
                            if (key === 'body') {
                                const li = document.createElement('li');
                                const p = document.createElement('p');

                                p.innerText = comment[key];
                                li.appendChild(p);
                                ol.appendChild(li);
                            }
                        }

                        commentsInfoBlock.appendChild(ol);
                        wrap.appendChild(commentsInfoBlock);

                    }
                })
        }
    )

