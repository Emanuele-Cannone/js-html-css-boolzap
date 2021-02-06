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
        scrivendo: false, // mi serve inizializzarlo false per la scritta 'Sta scrivendo...' su ogni contatto
        visualizzaOpzione: false, // mi serve per inizializzare a false la finestra opzionale
        online: false, // mi serve inizializzarlo false per la scritta 'Sta scrivendo...' sul contatto che sta per rispondere
        contatti: [
            {
            immagine: 'img/jack.jpg',
            nome: 'giacomo',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio giacomo',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio giacomo',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio giacomo',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio giacomo',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    }
                ]
            },
            {
            immagine: 'img/papaya.jpg',
            nome: 'papaya',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio papaya',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio papaya',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio papaya',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio papaya',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    }
                ]
            },
            {
            immagine: 'img/davide.jpg',
            nome: 'davide',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio davide',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio davide',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio davide',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio davide',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    }
                ]
            },
            {
            immagine: 'img/yuri.jpg',
            nome: 'yuri',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio yuri',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio yuri',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio yuri',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio yuri',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    }
                ]
            },
            {
            immagine: 'img/cristiano.jpg',
            nome: 'cristiano',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio cristiano',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio cristiano',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio cristiano',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio cristiano',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    }
                ]
            },
            {
            immagine: 'img/tina.jpg',
            nome: 'tina',
            visible: true,
            online: false,
            scrivendo: false, // mi serve per la scritta 'Sta scrivendo...'
            conversazioni: [
                    {
                        data: '01:00',
                        testo: 'primo messaggio tina',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '02:00',
                        testo: 'secondo messaggio tina',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    },
                    {
                        data: '03:00',
                        testo: 'terzo messaggio tina',
                        tipo: 'inviato',
                        visualizzaOpzione: false
                    },
                    {
                        data: '04:00',
                        testo: 'quarto messaggio tina',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
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
                tipo : 'inviato',
                visualizzaOpzione: false
            })

            this.mexChat = '';


            setTimeout(() => {
                // questo setTimeout mi serve per far comparire lo stato 'online' prima di 'sta scrivendo'

                setTimeout(() => {
                    // questo setTimeout mi serve per far comparire 'Sta scrivendo...'


                    setTimeout(() => {
                        // questo timeout mi serve per ritardare l'arrivo del messaggio

                        this.contatti[index].conversazioni.push({
                            // impostazione di un messaggio ricevuto
                            data: '07:31',
                            testo: 'ok',
                            tipo: 'ricevuto',
                            visualizzaOpzione: false
                        })

                        // mi serve per far comparire 'Sta scrivendo...'
                        this.contatti[index].scrivendo = false;
                        // console.log(this.contatti[index].scrivendo);


                        setTimeout(() => {

                            // mi serve per far scomparire 'Online'
                            this.contatti[index].online = false;
                            
                        }, 1500);


                    }, 2000);


                    // mi serve per far scomparire 'Sta scrivendo...'
                    this.contatti[index].scrivendo = true;
                    // console.log(this.contatti[index].scrivendo);


                }, 3000);


                // mi serve per far comparire 'Online'
                this.contatti[index].online = true;


            }, 3000);

                
        },

        ricercaChat(){
            // console.log(this.searchBar); // keyUp obbligatorio sennò prende il log precedente
            this.contatti.forEach(element => {// mi serve un ciclo per poter accedere a tutti gli elementi di array.nome
                element.visible = false;
                if (element.nome.toLowerCase().includes(this.searchBar.toLowerCase())) {// rendi tutto minuscolo e se il valore della searchBar è incluso in elementi.nome                    element.visible = true;
                    element.visible = true;
                }
            });
        },

        option(element, index){
            // console.log(element[index].visualizzaOpzione);
            

            if (element[index].visualizzaOpzione == false) {
                element[index].visualizzaOpzione = true;
                this.visualizz = element[index].visualizzaOpzione;
            } 
            else {
                element[index].visualizzaOpzione = false;
            }

        },

        visualizzaEliminato(element, index){
        

            if (element.testo == 'Hai eliminato questo messaggio' || element.tipo == 'ricevuto') {
                
                // QUI DEVI METTERE LA FUNZIONE PER ELIMINARE IL MESSAGGIO
                this.eliminaMessaggio(index);

            } else if (element.tipo == 'inviato') {
                
                // QUESTO SERVE PERCHE' PER I MESSAGGI INVIATI COMPARE LA DICITURA 'Hai eliminato questo messaggio'
                element.testo =  'Hai eliminato questo messaggio'

            }

            // QUESTO SERVE PER CHIUDERE LA FINESTRA DI OPZIONE
            element.visualizzaOpzione = false;

            
        },

        eliminaMessaggio(index){
            this.contatti[this.utenteSelezionato].conversazioni.splice(index,1);
        },

        
    },
    mounted() {
        
        // mi serve per generare un index casuale da 0 compreso fino alla lunghezza dell'array
        numeroCasuale = Math.ceil(Math.random() * this.contatti.length - 1);
        
        
        // +++++ messaggio casuale +++++
        setTimeout((index) => {
                // questo setTimeout mi serve per far comparire lo stato 'online' prima di 'sta scrivendo'

            setTimeout(() => {

                // il primo setTimeout mi serve per far ritardare quello che succede dentro
                
                setTimeout(() => {
                    // questo setTimeout mi serve per ritardare l'arrivo del messaggio
            
                    this.contatti[numeroCasuale].conversazioni.push({
                        // impostazione di un messaggio ricevuto
                        data: '07:31',
                        testo: 'Ciao, sei ancora al pc?',
                        tipo: 'ricevuto',
                        visualizzaOpzione: false
                    })
    
                    // mi serve per far comparire 'Sta scrivendo...'
                    this.contatti[numeroCasuale].scrivendo = false;

                    setTimeout((index) => {

                        // mi serve per far scomparire 'Online'
                        this.contatti[numeroCasuale].online = false;

                    }, 1500);
    
                }, 4000);
            
                // mi serve per far scomparire 'Sta scrivendo...'
                this.contatti[numeroCasuale].scrivendo = true;


            }, 5000);

            // mi serve per far comparire 'Online'
            this.contatti[numeroCasuale].online = true;


        }, 3000);

    
        // +++++ fine messaggio casuale +++++
    }

    
});






