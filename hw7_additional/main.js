const keys = [1, 2, 3];

function UserCard(cardNumber) {
    this.balance = 0 || 100;
    this.limit = 0 || 100;
    this.historyLogs = [];


    for (const key of keys) {
        if (cardNumber === key) {
            this.cardNumber = cardNumber;
        }
    }
    if (cardNumber <= 0 || cardNumber > 3) {
        console.error('Choose ID : 1, 2, 3')
    }
    this.getCardOptions = function () {
        return {
            balance: this.balance,
            transactionLimit: this.limit,
            historyLog: this.historyLogs,
            key: this.cardNumber
        }
    };

    this.putCredits = function (value) {
        this.historyLogs.push({
            operationType: 'Received credits',
            credits: value,
            operationTime: new Date().toLocaleString()
        })
        return `Current Balance : ${this.balance += value}`;
    };

    this.takeCredits = function (value) {
        if (value > this.balance) {
            return console.error(`You can't withdraw more than : ${this.balance}`)
        } else if (value > this.limit) {
            return console.error(`Your transaction limit : ${this.limit}`)
        } else {
            this.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: value,
                operationTime: new Date().toLocaleString()
            })
            return `Your withdraw : ${value}\nCurrent Balance : ${this.balance -= value}`;

        }

    };

    this.setTransactionLimit = function (limit) {
        this.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: limit,
            operationTime: new Date().toLocaleString()
        })
        this.limit = limit;
    };

    this.transferCredits = function (amount, cardName) {

        if (amount > this.balance) {
            console.error(`You can't transfer more than : ${this.balance}`)
        } else if (amount > this.limit) {
            console.error(`Your transaction limit : ${this.limit}`)
        } else {
            cardName.putCredits(amount - (amount * 0.05))
            this.takeCredits(amount)
        }
    };
}

class UserAccount {
    constructor(name) {
        const cards = [];
        this.name = name;
        this.cards = cards;
        this.addCard = function (cardNumber) {
            if (cards.find(e => e === cardNumber)) {
                console.error('This card ID already exists');
            } else if (cardNumber > 0 && cardNumber < 4) {
                const newUser = new UserCard(cardNumber)
                cards.push(newUser)
                return newUser
            }
        }
        this.getCardByKey = function (cardKey) {
            return cards.find(value => value.cardNumber === cardKey)

        }
    }
}

const user = new UserAccount('Bob');
user.addCard(1)
user.addCard(2)

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions())
console.log(card2.getCardOptions())
