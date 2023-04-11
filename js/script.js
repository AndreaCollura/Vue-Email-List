
const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMail: []


        }
    },
    methods: {
        getData() {
                for(let i = 0; i < 10 ; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
                    console.log(mail.data.response);
                    
                    this.randomMail.push(mail.data.response);

                    });
                this.randomMail = [];
                
                    
            }
            
            
        }

    },
    mounted() {
        // this.getData();

    },
}).mount('#app');




































