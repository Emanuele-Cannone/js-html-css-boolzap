// - Milestone 1
// Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente(verdi) e
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite l a direttiva v -for, 
// visualizzare nome e immagine di ogni contatto



var app = new Vue({
    el: '.contenitore',
    data: {
        contatti: [
            {
            src: 'img/jack.jpg',
            alt: 'giacomo'
            },
            {
            src: 'img/papaya.jpg',
            alt: 'papaya'
            },
            {
            src: 'img/dave.jpg',
            alt: 'dave'
            },
            {
            src: 'img/yuri.jpg',
            alt: 'yuri'
            },
            {
            src: 'img/cristiano.jpg',
            alt: 'cristiano'
            },
            {
            src: 'img/tina.jpg',
            alt: 'tina'
            },
        ]
    },
});