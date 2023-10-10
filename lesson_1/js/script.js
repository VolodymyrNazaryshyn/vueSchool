const { createApp } = Vue

const passengerBottles = 2
const passengerBurgers = 3
const busCapacity = 20

createApp({
    data() {
        return {
            passengersCount: null
        }
    },
    computed: {
        busSum() {
            return Math.ceil(this.passengersCount / busCapacity)
        },
        bottlesSum() {
            return this.passengersCount * passengerBottles
        },
        burgersSum() {
            return this.passengersCount * passengerBurgers
        }
    }
}).mount('#app1')

createApp({
    data() {
        return {
            month: ''
        }
    },
    computed: {
        monthEmpty() {
            return this.month === '' ? '' : `Місяця під номером ${this.month} не існує`
        },
        clothes() {
            switch (this.month) {
                case 12:
                case 1:
                case 2: return "Зимовий одяг: пуховик + штани з підштаниками"
                case 3:
                case 4:
                case 5: return "Весняний одяг: вітровка + спортивні штани"
                case 6:
                case 7:
                case 8: return "Літній одяг: футболка + шорти"
                case 9:
                case 10:
                case 11: return "Осінній одяг: плащ + джинси"
                default: return this.monthEmpty
            }
        },
        imageLink() {
            switch (this.month) {
                case 12:
                case 1:
                case 2: return "./img/winter.jpg"
                case 3:
                case 4:
                case 5: return "./img/spring.jpg"
                case 6:
                case 7:
                case 8: return "./img/summer.jpg"
                case 9:
                case 10:
                case 11: return "./img/autumn.jpg"
                default: return "./img/all_seasons.jpg"
            }
        }
    }
}).mount('#app2')

createApp({
    data() {
        return {
            start: null,
            end: null,
            random: null
        }
    },
    methods: {
        randomize() {
            this.random = Math.floor(Math.random() * (this.end - this.start + 1)) + this.start
        }
    }
}).mount('#app3')

const rateUSD = 38
const rateEUR = 40
const taxPercent = 3

createApp({
    data() {
        return {
            balance: 0,
            inputMoney: null,
            errorMessage: null,
            colorBalance: 'color: black'
        }
    },
    computed: {
        showBalance() {
            return this.balance.toFixed(2)
        },
        showTax() {
            return this.inputMoney >= 0 ? this.getTax(this.inputMoney).toFixed(2) : '0.00'
        },
        dollarBalance() {
            return parseFloat((this.balance / rateUSD).toFixed(2))
        },
        euroBalance() {
            return parseFloat((this.balance / rateEUR).toFixed(2))
        },
        getColorUSD() {
            return `color: ${this.dollarBalance >= 100 ? 'green' : 'red'}`
        },
        getColorEUR() {
            return `color: ${this.euroBalance >= 100 ? 'green' : 'red'}`
        }
    },
    methods: {
        getTax(money) {
            return money / 100 * taxPercent
        },
        clear() {
            this.inputMoney = null
            this.errorMessage = ''
        },
        depositMoney() {
            if (this.inputMoney <= 0) {
                this.inputMoney = null
                this.errorMessage = 'Сума зарахування має бути більше 0.00 грн'
                return
            }

            this.balance += this.inputMoney - this.getTax(this.inputMoney)
            this.colorBalance = 'color: green'
            this.clear()
        },
        withdrawMoney() {
            if (this.inputMoney === null) {
                this.errorMessage = 'Введіть суму для зняття коштів'
                return
            }

            if (this.inputMoney <= 0) {
                this.inputMoney = null
                this.errorMessage = 'Сума зняття має бути більше 0.00 грн'
                return
            }

            const recievedSum = this.inputMoney + this.getTax(this.inputMoney)

            if (recievedSum > this.balance) {
                this.inputMoney = null
                this.errorMessage = 'Недостатньо коштів'
                return
            }

            this.balance -= recievedSum
            this.colorBalance = 'color: red'
            this.clear()
        }
    }
}).mount('#app4')

const users = [
    { login: 'user1', password: 'qwerty' },
    { login: 'user2', password: 'asdfgh' },
    { login: 'user3', password: '123456' }
]

createApp({
    data() {
        return {
            login: null,
            password: null,
            message: null,
            classMessage: null
        }
    },
    methods: {
        checkCredentials() {
            this.message = this.isUserAuth ? "Користувач авторизований" : "Невірний логін або пароль"
            this.classMessage = this.isUserAuth ? "success" : "error"
        }
    },
    computed: {
        isUserAuth() {
            return users.find(user => user.login === this.login && user.password === this.password)
        }
    }
}).mount('#app5')
