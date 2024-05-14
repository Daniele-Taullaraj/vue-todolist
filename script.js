

const { createApp } = Vue

createApp({
    data() {
        return {
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
            restanteDaFare: 0,
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
            this.restanteDaFare++;
        },
        checkClick(i) {
            // funzione per rimuovere dalla lista M2
            // this.coseDaFare.splice(i, 1);
            // funzione per invertire il colore BONUS
            if (this.coseDaFare[i].done) {
                this.coseDaFare[i].done = false;
                this.restanteDaFare++;
            } else {
                this.coseDaFare[i].done = true;
                this.restanteDaFare--;
            }
        },
        controllaStato(i) {
            if (!this.coseDaFare[i].done) {
                return "false"
            } else {
                return "true"
            }
        },
        simboloSiONo(i) {
            if (!this.coseDaFare[i].done) {
                return "fa-solid fa-x"
            } else {
                return "fa-solid fa-check"
            }
        }
    },
    mounted() {
        let self = this;
        for (let i = 0; i < self.coseDaFare.length; i++) {
            if (self.coseDaFare[i].done == false) {
                self.restanteDaFare++;
            }
        }
    }
}).mount('#app')