

const { createApp } = Vue

createApp({
    data() {
        return {
            coseDaFare: [
                "mangiare",
                "bere",
                "andare a lavoro",
                "dormire"
            ],
            altroDaAggiungere: "",
        }
    },
    methods: {
        aggiungiAllaLista() {
            if (this.altroDaAggiungere == "") {
                return
            } else
                this.coseDaFare.push(this.altroDaAggiungere);
            this.altroDaAggiungere = "";
        },
        fatto(i) {
            this.coseDaFare.splice(i, 1);
        }
    },
    mounted() {
    }
}).mount('#app')