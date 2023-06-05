const keys = [];

function UserCard(cardNumber) {
    this.balance = 0 || 100;
    this.limit = 0 || 100;
    this.historyLogs = [];
    keys.push(cardNumber)

    this.getCardOptions = function (balance = this.balance, transactionLimit = this.limit, historyLogs = this.historyLogs, key = this.cardNumber) {
        return {'balance': balance, 'transactionLimit': transactionLimit, 'historyLog': historyLogs, 'key': key}
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

const card1 = new UserCard(1);
const card2 = new UserCard(2);


card1.transferCredits(50, card2)
card1.putCredits(50)
card1.setTransactionLimit(5000)

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;

        this.addCard = function () {

        }
    }


}

console.log(keys)
