const { createApp } = Vue

//-------------------task#1-------------------

const authList = [
    { login: "Ivan", password: "111" },
    { login: "Alex", password: "123" },
    { login: "Maria", password: "456" }
]

const VIP_USER = authList[0].login.toLowerCase()

createApp({
    data() {
        return {
            login: '',
            password: '',
            isUserAuthorized: null
        }
    },
    computed: {
        isCredentialsEmpty() {
            return this.login === '' || this.password === ''
        },
        isUserUndefined() {
            return this.isUserAuthorized === undefined
        },
        getAuthMessageColor() {
            return this.isUserUndefined && this.login.toLowerCase() === VIP_USER ? "login-vip-error" : "login-error"
        },
        getAuth() {
            return authList.find(
                item =>
                    item.login.toLowerCase() === this.login.toLowerCase() &&
                    item.password.toLowerCase() === this.password.toLowerCase()
            )
        }
    },
    methods: {
        loginCheck() {
            this.isUserAuthorized = this.getAuth
        }
    }
}).mount("#app1")

//-------------------task#2-------------------

createApp({
    data() {
        return {
            selectTicket: "choose",
            selectNewsOrCognac: "choose",
            selectAppetizer: "choose",
            isBusiness: null,
            isNewsOrCognac: null,
            isCognac: null,
            isCognacAppetizer: false,
            isChips: false,
            isBeer: false
        }
    },
    computed: {
        isBusinessNull() {
            return this.isBusiness === null
        },
        isCognacNull() {
            return this.isCognac === null
        },
        isBusinessTicket() {
            return this.selectTicket === "business"
        },
        isCongacChosen() {
            return this.selectNewsOrCognac === "cognac"
        },
        isNewspaperChosen() {
            return this.selectNewsOrCognac === "newspaper"
        },
        isAppetizerChosen() {
            return this.selectAppetizer !== "choose"
        },
        isCongacAppetizerAgree() {
            return this.selectAppetizer === "yes"
        },
        showAppetizerTitle() {
            return this.isBusiness && this.isCognac && this.isCognacAppetizer
        },
        showAppetizerSelect() {
            return this.isBusiness && this.isCognac
        },
        showEconomAppetizer() {
            return this.isBusiness !== null && !this.isBusiness
        },
        showCongacAppetizer() {
            return !this.isNewspaperChosen && this.isCongacAppetizerAgree
        }
    },
    methods: {
        setSelectTicket() {
            this.isBusiness = this.isBusinessTicket
        },
        setSelectNewsOrCognac() {
            this.isCognac = this.isCongacChosen
        },
        setSelectCognacAppetizer() {
            this.isCognacAppetizer = this.isAppetizerChosen
        },
        toggleChips() {
            this.isChips = !this.isChips;
        },
        toggleBeer() {
            this.isBeer = !this.isBeer;
        }
    }
}).mount("#app2")

//-------------------task#3-------------------

const checkMessages = [
    "Добре. Молодець!",
    "Невірно, спробуйте ще раз"
]

const wordList = [
    { id: 1, word: "слон", translation: "elephant", img: './img/task3/elephant.jpg' },
    { id: 2, word: "лис", translation: "fox", img: './img/task3/fox.jpg' },
    { id: 3, word: "павук", translation: "spider", img: './img/task3/spider.jpg' },
    { id: 4, word: "мавпа", translation: "monkey", img: './img/task3/monkey.jpg' },
    { id: 5, word: "риба", translation: "fish", img: './img/task3/fish.jpg' },
    { id: 6, word: "курка", translation: "chicken", img: './img/task3/chicken.jpg' },
    { id: 7, word: "змія", translation: "snake", img: './img/task3/snake.jpg' },
    { id: 8, word: "корова", translation: "cow", img: './img/task3/cow.jpg' },
    { id: 9, word: "лев", translation: "lion", img: './img/task3/lion.jpg' },
    { id: 10, word: "зебра", translation: "zebra", img: './img/task3/zebra.jpg' }
]

createApp({
    data() {
        return {
            exerciseItem: wordList[Math.floor(Math.random() * wordList.length)],
            translateValue: '',
            checkMessage: null
        }
    },
    computed: {
        isBtnDisabled() {
            return this.translateValue === ''
        },
        isSuccessTranslation() {
            return this.checkMessage === checkMessages[0]
        },
        getBorderColor() {
            return this.isSuccessTranslation ? "success" : this.checkMessage !== null && "error"
        }
    },
    methods: {
        checkTranslation() {
            this.checkMessage = this.translateValue === this.exerciseItem.translation ? checkMessages[0] : checkMessages[1]
        },
        getRandomListItem() {
            this.translateValue = ''
            this.checkMessage = null
            this.exerciseItem = wordList[Math.floor(Math.random() * wordList.length)]
        }
    }
}).mount("#app3")

//-------------------task#4-------------------

const workerList = [
    { id: '111', name: 'Іванов', salary: 10000 },
    { id: '112', name: 'Петров', salary: 20000 },
    { id: '113', name: 'Сидоров', salary: 50000 }
]

createApp({
    computed: {
        workersSalaryList() {
            return workerList
        }
    }
}).mount("#app4")

//-------------------task#5-------------------

const searchList = [
    {
        id: "1",
        logo: "https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png",
        name: "vue.org",
        link: "https://vuejs.org/",
        title: "The Progressive JavaScript Framework",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."
    },
    {
        id: "2",
        logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/stackoverflow_tile_logo_icon_167969.png",
        name: "stackoverflow.com",
        link: "https://stackoverflow.com/",
        title: "Every developer has a tab open to Stack Overflow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."
    },
    {
        id: "3",
        logo: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
        name: "react.dev",
        link: "https://react.dev/",
        title: "The library for web and native user interfaces",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."
    },
    {
        id: "4",
        logo: "https://nodejs.org/static/images/logo-hexagon-card.png",
        name: "node.js",
        link: "https://nodejs.org/",
        title: "Node.js® is an cross-platform JavaScript runtime environment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ..."
    }
]

createApp({
    computed: {
        resultList() {
            return searchList
        }
    }
}).mount("#app5")

//-------------------task#6-------------------

createApp({
    data() {
        return {
            newDish: '',
            waitingList: [
                { id: "1", name: "Голубці" },
                { id: "2", name: "Грибовий суп" }
            ],
            processingList: [
                { id: "3", name: "Блінчики з сиром" },
                { id: "4", name: 'Салат "Цезар"' },
                { id: "5", name: 'Салат "Грецький"' }
            ],
            completedList: [
                { id: "6", name: "Борщ" },
                { id: "7", name: "Плов з овочами" }
            ]
        }
    },
    computed: {
        isNewDishBtnEmpty() {
            return this.newDish === ''
        }
    },
    methods: {
        addToWaitingList() {
            this.waitingList.push({ id: Date.now(), name: this.newDish })
            this.newDish = ""
        },
        addToProcessingList(dish) {
            this.waitingList = this.waitingList.filter(item => item.id !== dish.id)
            this.processingList.push(dish)
        },
        addToCompletedList(dish) {
            this.processingList = this.processingList.filter(item => item.id !== dish.id)
            this.completedList.push(dish)
        },
        clearCompletedList(dish) {
            this.completedList = this.completedList.filter(item => item.id !== dish.id)
        }
    }
}).mount("#app6")
