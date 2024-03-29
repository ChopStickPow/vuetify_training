const app = Vue.createApp({
    data (){
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '12345678',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '33333333',
                    email: 'julie@localhost.com',
                }
            ],
        }
    },
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
    data() {
        return {
            showDetails: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '12345678',
                email: 'manuel@localhost.com',
            } 
        }
    },
    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount('#app');