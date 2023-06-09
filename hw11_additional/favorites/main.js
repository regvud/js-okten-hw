const favoritesStr = localStorage.getItem('favorites');
const favorites = JSON.parse(favoritesStr)

let counter = 1;
for (const favorite of favorites) {
    const wrap = document.createElement('div');
    const h3 = document.createElement('h3');

    h3.innerText = `Favorite User - ${counter}`
    wrap.appendChild(h3)

    counter++;
    for (const key in favorite) {
        const p = document.createElement('p');
        p.innerHTML = `<b>${key}</b> - ${favorite[key]}`;
        wrap.append(p);
    }

    document.body.appendChild(wrap)
    document.write('<br>')

}