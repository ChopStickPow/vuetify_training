const app = Vue.createApp({
    data () {
        return {
            msg: 'Learning Vue!',
            output: '',
            confirmOutput: '',
        }
    },
    methods: {
        showMsg(){
            alert(this.msg);
        },
        showInput(event){
            this.output = event.target.value;
        },
        showInputAfterEnter(){
            this.confirmOutput = event.target.value;
        }
    }
});

app.mount('#assignment');