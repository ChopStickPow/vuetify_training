const app = Vue.createApp({
    data () {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            rounds: 0,
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        disableSpecial() {
            return this.rounds % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {

        },
        monsterHealth(value) {

        }
    },
    methods: {
        attack(){
            this.monsterHealth = this.monsterHealth - randomNumber(5, 12);
            this.playerHealth = this.playerHealth - randomNumber(8, 15);
            this.rounds = this.rounds + 1;
        },
        specialAttack(){
            this.monsterHealth = this.monsterHealth - randomNumber(10, 25);
            this.playerHealth = this.playerHealth - randomNumber(8, 15);
            this.rounds = this.rounds + 1;
        },
        Heal(){
            this.rounds = this.rounds + 1;
            const heal = randomNumber(8, 20);
            if (this.playerHealth + heal > 100){
                this.playerHealth = 100;
            }
            else {
                this.playerHealth = this.playerHealth + heal;
            }
            this.monsterHealth = this.monsterHealth - randomNumber(10, 25);
        },
        Surrender(){

        }
    }
});

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

app.mount('#game');