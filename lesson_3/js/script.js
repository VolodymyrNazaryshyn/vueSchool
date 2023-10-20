const { createApp } = Vue

//-------------------task#1-------------------

createApp({
    data() {
        return {
            maleList: [
                { id: 1, name: 'Іван' },
                { id: 2, name: 'Петро' },
                { id: 3, name: 'Степан' },
                { id: 4, name: 'Олег' }
            ],
            femaleList: [
                { id: 1, name: 'Оксана' },
                { id: 2, name: 'Наталія' },
                { id: 3, name: 'Тетяна' }
            ],
            pairsList: [
                { id: 1, male: 'Сергій', female: 'Ольга' },
                { id: 2, male: 'Станіслав', female: 'Роксолана' }
            ],
            isChosenMale: null,
            isChosenFemale: null,
            isChosenPair: null,
        }
    },
    computed: {
        isPairChosen() {
            return this.isChosenMale !== null && this.isChosenFemale !== null
        },
        isPairArrayEmpty() {
            return this.pairsList.length === 0
        },
        isFemaleArrayEmpty() {
            return this.femaleList.length === 0
        },
        isMaleArrayEmpty() {
            return this.maleList.length === 0
        },
    },
    methods: {
        selectItem(list, id) {
            if (list === this.maleList)
                this.isChosenMale = id
            else if (list === this.femaleList)
                this.isChosenFemale = id
            else if (list === this.pairsList)
                this.isChosenPair = id
        },
        addPair() {
            const selectedMale = this.maleList.find(dancer => dancer.id === this.isChosenMale)
            const selectedFemale = this.femaleList.find(dancer => dancer.id === this.isChosenFemale)

            if (selectedFemale && selectedMale) {
                this.pairsList.push({
                    id: new Date().getTime(),
                    male: selectedMale.name,
                    female: selectedFemale.name
                })

                this.maleList = this.maleList.filter(dancer => dancer.id !== selectedMale.id)
                this.femaleList = this.femaleList.filter(dancer => dancer.id !== selectedFemale.id)

                this.isChosenMale = null
                this.isChosenFemale = null
            }
        },
        deletePair(index) {
            this.pairsList.splice(index, 1)
        },
    },
}).mount("#app1")

//-------------------task#2-------------------

const autoData = [
    { id: 1, brand: "Audi", price: 5600, year: 2001 },
    { id: 2, brand: "Opel", price: 7000, year: 2004 },
    { id: 3, brand: "Mersedes", price: 6000, year: 2006 },
    { id: 4, brand: "Audi", price: 5500, year: 2001 },
    { id: 5, brand: "Chevrolet", price: 4300, year: 2006 },
    { id: 6, brand: "Lincoln", price: 9000, year: 2009 },
    { id: 7, brand: "Audi", price: 7000, year: 2004 },
    { id: 8, brand: "Mersedes", price: 8200, year: 2000 },
];

createApp({
    data() {
        return {
            selectedYear: "Sort by year",
            selectedCarBrand: "Sort by brand"
        };
    },
    computed: {
        isYearDefault() {
            return this.selectedYear === "Sort by year"
        },
        isBrandDefault() {
            return this.selectedCarBrand === "Sort by brand"
        },
        getYearsList() {
            return [...new Set(autoData.map(auto => auto.year))].sort();
        },
        getCarBrandsList() {
            return [...new Set(autoData.map(auto => auto.brand))].sort();
        },
        getFilterDataByYearAndBrand() {
            return autoData.filter(auto =>
                auto.year === this.selectedYear &&
                auto.brand === this.selectedCarBrand
            )
        },
        getFilterDataByYear() {
            return autoData.filter(auto => auto.year === this.selectedYear)
        },
        getFilterDataByBrand() {
            return autoData.filter(auto => auto.brand.includes(this.selectedCarBrand))
        },
        autoList() {
            if (this.isYearDefault && this.isBrandDefault)
                return autoData

            if (!this.isYearDefault && !this.isBrandDefault)
                return this.getFilterDataByYearAndBrand

            if (this.isBrandDefault)
                return this.getFilterDataByYear

            if (this.isYearDefault)
                return this.getFilterDataByBrand
        },
        showButton() {
            return !this.isYearDefault || !this.isBrandDefault
        },
    },
    methods: {
        clearFilters() {
            this.selectedYear = "Sort by year"
            this.selectedCarBrand = "Sort by brand"
        },
    },
}).mount("#app2")
