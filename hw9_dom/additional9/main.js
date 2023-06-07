let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {name: 'max', age: 31, status: true, address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
const addressArray = [];
for (const user of users) {
    addressArray.push(user.address)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let counter = 0;
for (const user of users) {
    const wrap = document.createElement('div');
    let increment = addressArray[counter];

    wrap.classList.add('wrap')
    wrap.innerText = `${user.name}\n${user.age}\n${user.status}\n${increment.city}\n${increment.country}\n${increment.street}\n${increment.houseNumber}`;
    document.body.appendChild(wrap);
    counter++;
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
document.write('<hr>')
counter = 0;
for (const user of users) {
    const wrap = document.createElement('div');
    const nameDiv = document.createElement('div');
    const ageDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    let increment = addressArray[counter];

    wrap.classList.add('wrap');
    nameDiv.innerText = user.name;
    ageDiv.innerText = user.age;
    statusDiv.innerText = user.status;
    addressDiv.innerText = `${increment.city}\n${increment.country}\n${increment.street}\n${increment.houseNumber}\n\n`;

    wrap.append(nameDiv, ageDiv, statusDiv, addressDiv)
    document.body.appendChild(wrap);
    counter++;
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
document.write('<hr>')
counter = 0;
for (const user of users) {
    const wrap = document.createElement('div');
    const nameDiv = document.createElement('div');
    const ageDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    let increment = addressArray[counter];

    const city = document.createElement('div');
    const country = document.createElement('div');
    const street = document.createElement('div');
    const houseNumber = document.createElement('div');

    wrap.classList.add('wrap');
    nameDiv.innerText = user.name;
    ageDiv.innerText = user.age;
    statusDiv.innerText = user.status;

    // address
    city.innerText = increment.city;
    street.innerText = increment.street;
    country.innerText = increment.country;
    houseNumber.innerText = increment.country;

    addressDiv.append(city, country, street, houseNumber)
    wrap.append(nameDiv, ageDiv, statusDiv, addressDiv)
    document.body.append(wrap)
}