

const { createApp } = Vue

createApp({
    data() {
        return {
            // coseDaFare: [
            //     "mangiare",
            //     "bere",
            //     "andare a lavoro",
            //     "dormire"
            // ],
            coseDaFare: [
                { titolo: "Fare la spesa", done: false },
                { titolo: "Studiare per l'esame", done: true },
                { titolo: "Andare in palestra", done: false },
                { titolo: "Pulire la casa", done: false },
                { titolo: "Leggere un libro", done: true },
                { titolo: "Scrivere un'email", done: false },
                { titolo: "Fare una passeggiata", done: true },
                { titolo: "Guardare un film", done: false }
            ],
            altroDaAggiungere: "",
        }
    },
    methods: {
        aggiungiAllaLista() {
            if (this.altroDaAggiungere == "") {
                return
            } else
                this.coseDaFare.push({
                    titolo: this.altroDaAggiungere,
                    done: false
                });
            this.altroDaAggiungere = "";
        },
        checkClick(i) {
            // funzione per rimuovere dalla lista M2
            // this.coseDaFare.splice(i, 1);
            // funzione per invertire il colore BONUS
            if (this.coseDaFare[i].done) {
                this.coseDaFare[i].done = false;
            } else {
                this.coseDaFare[i].done = true;
            }
        },
        controllaStato(i) {
            if (!this.coseDaFare[i].done) {
                return "false"
            } else {
                return "true"
            }
        }
    },
    mounted() {

    }

}).mount('#app')