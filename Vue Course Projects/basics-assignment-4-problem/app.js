const app = Vue.createApp({
    data(){
        return {
            style: '',
        }
    },
    methods: {
        getStyle(event){
            this.style = event.target.value;
        }
    },
    watch: {

    },
    computed: {
        applyStyle(){
            if (this.style = 'user1'){
                return {user1: true};
            } else if (this.style = 'user2'){
                return {user2: true};
            }                      
        }           
    }
})

app.mount('#assignment')