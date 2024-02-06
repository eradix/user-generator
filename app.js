const app = Vue.createApp({
    data() {
        return {
            firstName: 'Lebron',
            lastName: 'James',
            gender: 'male',
            email: 'lebron@email.com',
            phone: '122214234',
            image: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async switchUser(){
            const res = await fetch('https://randomuser.me/api/')

            const { results } = await res.json()

            console.log(results)
            

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.email =  results[0].email
            this.image = results[0].picture.large
            this.phone = results[0].phone
        }
    },
});


app.mount('#app');