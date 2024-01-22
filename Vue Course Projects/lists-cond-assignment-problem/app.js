const app = Vue.createApp({
    data(){
        return {
            task: '',
            tasks: [],
            showTasks: true,
        }
    },
    methods:{
        addNewTask(){
            this.tasks.push(this.task);
        },
        hideTask(){
                this.showTasks = !this.showTasks;
        }
    },
    computed:{

    },
    watch:{
    },
});

app.mount('#assignment');