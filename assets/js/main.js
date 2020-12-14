/* vue-hello
Istruzioni:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data
buon Vue a tutti/e */

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

let app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }

});