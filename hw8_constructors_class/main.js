// - Створити функцію конструктор для об'єктів Client з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new Client(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = []
users.push(user1 = new User(1, 'vasya', 'lebed', 'vasya@gmail.com', '+380973508312'));
users.push(user2 = new User(2, 'kolya', 'ed', 'vasya@gmail.com', '+380973508312'));
users.push(user3 = new User(3, 'olya', 'ebed', 'vasya@gmail.com', '+380973508312'));
users.push(user4 = new User(4, 'svyat', 'dunk', 'vasya@gmail.com', '+380973508312'));
users.push(user5 = new User(5, 'lena', 'psdsada', 'vasya@gmail.com', '+380973508312'));
users.push(user6 = new User(6, 'dima', 'lusya', 'vasya@gmail.com', '+380973508312'));
users.push(user7 = new User(7, 'vanya', 'opele', 'vasya@gmail.com', '+380973508312'));
users.push(user8 = new User(8, 'lesya', 'nissan', 'vasya@gmail.com', '+380973508312'));
users.push(user9 = new User(9, 'masha', 'mazsa', 'vasya@gmail.com', '+380973508312'));
users.push(user10 = new User(10, 'pasha', 'gigi', 'vasya@gmail.com', '+380973508312'));

console.log(users);

// - Взяти масив з  Client[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  Client[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    id;
    name;
    surname;
    email;
    phone;
    order = [];

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clientsArr = [];
clientsArr.push(client1 = new Client(1, 'vasya', 'lebed', 'vasya@gmail.com', '+380973508312', ['milk', 'guava']))
clientsArr.push(client2 = new Client(2, 'kolya', 'ed', 'vasya@gmail.com', '+380973508312', ['pizza', 'slice']))
clientsArr.push(client3 = new Client(3, 'olya', 'ebed', 'vasya@gmail.com', '+380973508312', ['marshmello', 'pizza', 'sugar']))
clientsArr.push(client4 = new Client(4, 'svyat', 'dunk', 'vasya@gmail.com', '+380973508312', ['milk', 'guava']))
clientsArr.push(client5 = new Client(5, 'lena', 'psdsada', 'vasya@gmail.com', '+380973508312', ['milk', 'guava']))
clientsArr.push(client6 = new Client(6, 'gena', 'psdsada', 'vasya@gmail.com', '+380973508312', ['choco']))
clientsArr.push(client7 = new Client(7, 'vanya', 'opele', 'vasya@gmail.com', '+380973508312', ['milk', 'guava', 'tangerine', 'ketchup']))
clientsArr.push(client8 = new Client(8, 'lesya', 'nissan', 'vasya@gmail.com', '+380973508312', ['milk', 'guava', 'tangerine', 'ketchup', 'rolls']))
clientsArr.push(client9 = new Client(9, 'masha', 'mazsa', 'vasya@gmail.com', '+380973508312', ['milk']))
clientsArr.push(client10 = new Client(10, 'pasha', 'gigi', 'vasya@gmail.com', '+380973508312', ['milk', 'guava', 'bread']))

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }

    this.info = function () {
        console.log(`Model - ${model}, Producer - ${producer}, Year - ${year}, maxSpeed - ${maxSpeed}, volume - ${volume}`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (...driver) {
        this.driver = driver
    }
}


let car1 = new Car('BMW', 'germany', 2018, 320, 4)

console.log(car1);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, maxSpeed, volume) {

        this.model = model;
        this.producer = year;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        }

        this.info = function () {
            console.log(`Model - ${model}, Producer - ${producer}, Year - ${year}, maxSpeed - ${maxSpeed}, volume - ${volume}`)
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed
        }

        this.changeYear = function (newValue) {
            this.year = newValue
        }

        this.addDriver = function (...driver) {
            this.driver = driver
        }
    }
}

let car2 = new CarClass('mazda', 'japan', 2003, 200, 2.3);

console.log(car2)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellasArray = [
    cinderella1 = new Cinderella('Julia', 17, 35),
    cinderella2 = new Cinderella('Bet', 10, 34),
    cinderella3 = new Cinderella('Oksana', 80, 33),
    cinderella4 = new Cinderella('Sneshok', 120, 36),
    cinderella5 = new Cinderella('Luci', 50, 37),
    cinderella6 = new Cinderella('Fabia', 30, 40),
    cinderella7 = new Cinderella('Shkoda', 24, 39),
    cinderella8 = new Cinderella('Lada', 21, 35),
    cinderella9 = new Cinderella('Zhenya', 22, 35),
    cinderella10 = new Cinderella('Sasha', 19, 35),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const prince = new Prince('Alex', 12, 33)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellasArray) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderellasArray.find(value => value.footSize === prince.shoe));