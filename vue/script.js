// - Milestone 1
// Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente(verdi) e
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite l a direttiva v -for, 
// visualizzare nome e immagine di ogni contatto



var app = new Vue({
    el: '.contenitore',
    data: {
        messaggioVocale: true, // mi serve nel v-if per poter visualizzare l'icona del messaggio vocale
        mexChat: '', // mi serve dichiararlo per poterlo utilizzare 
        searchBar: '', // mi serve dichiararlo per poterlo utilizzare 
        visible: false, // mi serve inizializzarlo false per poi utilizzarlo nel v-if
        utenteSelezionato: 0, // mi serve al click per il cambio index 
        scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
        contatti: [
            {
            immagine: 'img/jack.jpg',
            nome: 'giacomo',
            visible: true,
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio giacomo',
                        tipo: 'inviato'
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio giacomo',
                        tipo: 'ricevuto'
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio giacomo',
                        tipo: 'inviato'
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio giacomo',
                        tipo: 'ricevuto'
                    }
                ]
            },
            {
            immagine: 'img/papaya.jpg',
            nome: 'papaya',
            visible: true,
            conversazioni: [
                {
                    data: '01:00',
                    testo: 'primo messaggio papaya',
                    tipo: 'inviato'
                },
                {
                    data: '02:00',
                    testo: 'secondo messaggio papaya',
                    tipo: 'ricevuto'
                },
                {
                    data: '03:00',
                    testo: 'terzo messaggio papaya',
                    tipo: 'inviato'
                },
                {
                    data: '04:00',
                    testo: 'quarto messaggio papaya',
                    tipo: 'ricevuto'
                },
                {
                    data: '04:00',
                    testo: 'quinto messaggio papaya',
                    tipo: 'ricevuto'
                }
                ]
            },
            {
            immagine: 'img/davide.jpg',
            nome: 'davide',
            visible: true,
            conversazioni: [
                {
                    data: '01:00',
                    testo: 'primo messaggio davide',
                    tipo: 'inviato'
                },
                {
                    data: '02:00',
                    testo: 'secondo messaggio davide',
                    tipo: 'ricevuto'
                },
                {
                    data: '03:00',
                    testo: 'terzo messaggio davide',
                    tipo: 'inviato'
                },
                {
                    data: '04:00',
                    testo: 'quarto messaggio davide',
                    tipo: 'ricevuto'
                }
                ]
            },
            {
            immagine: 'img/yuri.jpg',
            nome: 'yuri',
            visible: true,
            conversazioni: [
                {
                    data: '01:00',
                    testo: 'primo messaggio yuri',
                    tipo: 'inviato'
                },
                {
                    data: '02:00',
                    testo: 'secondo messaggio yuri',
                    tipo: 'ricevuto'
                },
                {
                    data: '03:00',
                    testo: 'terzo messaggio yuri',
                    tipo: 'inviato'
                },
                {
                    data: '04:00',
                    testo: 'quarto messaggio yuri',
                    tipo: 'ricevuto'
                }
                ]
            },
            {
            immagine: 'img/cristiano.jpg',
            nome: 'cristiano',
            visible: true,
            conversazioni: [
                {
                    data: '01:00',
                    testo: 'primo messaggio cristiano',
                    tipo: 'inviato'
                },
                {
                    data: '02:00',
                    testo: 'secondo messaggio cristiano',
                    tipo: 'ricevuto'
                },
                {
                    data: '03:00',
                    testo: 'terzo messaggio cristiano',
                    tipo: 'inviato'
                },
                {
                    data: '04:00',
                    testo: 'quarto messaggio cristiano',
                    tipo: 'ricevuto'
                }
                ]
            },
            {
            immagine: 'img/tina.jpg',
            nome: 'tina',
            visible: true,
            conversazioni: [
                {
                    data: '01:00',
                    testo: 'primo messaggio tina',
                    tipo: 'inviato'
                },
                {
                    data: '02:00',
                    testo: 'secondo messaggio tina',
                    tipo: 'ricevuto'
                },
                {
                    data: '03:00',
                    testo: 'terzo messaggio tina',
                    tipo: 'inviato'
                },
                {
                    data: '04:00',
                    testo: 'quarto messaggio tina',
                    tipo: 'ricevuto'
                }
                ]
            },
        ]
    },
    methods:{

        visualizzaChat(index){
            // cambiando l'index vado a cambiare la fonte da visualizzare
            this.utenteSelezionato = index;

        },
        
        scambioMessaggi(index){
            // impostazione di un messaggio inviato dove il testo è preso dal v-model
            this.contatti[index].conversazioni.push({
                data : '07:30',
                testo : this.mexChat,
                tipo : 'inviato'
            })

            this.mexChat = '';

            setTimeout(() => {
                // il set timeout mi serve per ritardare l'arrivo del messaggio

                this.contatti[index].conversazioni.push({
                    // impostazione di un messaggio ricevuto
                    data: '07:31',
                    testo: 'ok',
                    tipo: 'ricevuto'
                })

                // mi serve per far comparire 'Sta scrivendo...'
                this.scrivendo = false;
               
            }, 2000); 

            this.scrivendo = true;

        },

        svuotacampo(){
            // in questo modo vado a svuotare il campo filtro al click della freccia sx
            this.searchBar = '';
        },

        ricercaChat(){
            // element.visible = false;
            // console.log(this.searchBar); // keyUp obbligatorio sennò prende il log precedente
            this.contatti.forEach(element => {// mi serve un ciclo per poter accedere a tutti gli elementi di array.nome
                if (element.nome.toLowerCase().includes(this.searchBar.toLowerCase())) {// rendi tutto minuscolo e se il valore della searchBar è incluso in elementi.nome                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        }


    }
    
});






