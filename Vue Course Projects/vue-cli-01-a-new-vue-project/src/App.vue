<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
    data () {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '12345678',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0987654',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    methods: {},
    computed: {},
};
</script>
