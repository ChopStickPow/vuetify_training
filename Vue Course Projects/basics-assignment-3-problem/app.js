const app = Vue.createApp({
    data(){
        return {
            number: 0,
            result: '',
        }
    },
    methods: {
        addNumber(num){
            return this.number = this.number + num;
        }

    },
    watch: {
        numberCheck(value){
            const that = this;
            setTimeout(function (){
                that.number = 0;
            }, 5000);
        } 
    },
    computed: {
        numberCheck(){
            if (this.number < 37)
            {
                return 'Not there yet';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    }
})

app.mount('#assignment')