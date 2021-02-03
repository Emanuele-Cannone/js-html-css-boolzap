// - Milestone 1
// Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente(verdi) e
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite l a direttiva v -for, 
// visualizzare nome e immagine di ogni contatto



var app = new Vue({
    el: '.contenitore',
    data: {
        messaggioVocale: true,
        mexChat: '',
        searchBar: '',
        visible: false,
        image: 'img/jack.jpg',
        name: 'giacomo',
        utenteSelezionato: 0,
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
            visible: false,
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
                }
                ]
            },
            {
            immagine: 'img/davide.jpg',
            nome: 'davide',
            visible: false,
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
            visible: false,
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
            visible: false,
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
            visible: false,
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
            this.utenteSelezionato = index;
        }
    }
});