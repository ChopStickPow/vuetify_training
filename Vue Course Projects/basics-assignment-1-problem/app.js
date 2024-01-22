Vue.createApp({
    data(){
        return {
            name: 'Qian Ma',
            age: 38,
            googleImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png',
            defaultText: 'Assignment Complete!',
        } 
    },
    methods: {
        getAgePlusFive() {
            const newAge = this.age + 5;
            return newAge;
        },
        getRandomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
}).mount('#assignment');