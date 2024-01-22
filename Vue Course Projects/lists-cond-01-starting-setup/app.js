const app = Vue.createApp({
  data() {
    return { goals: [],
             newGoal: '',
             noGoals: true,
    };
  },
  methods:{
    addToArray() {
      this.goals.push(this.newGoal);
      this.noGoals = false;
      this.newGoal = '';
    },
    removeToArray(idx) {
      this.goals.splice(idx, 1);
      if (this.goals.length === 0 ){
        this.noGoals = true;
      }
      this.newGoal = '';
    }
  }
});

app.mount('#user-goals');
