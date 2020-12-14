/* vue-hello
Istruzioni:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data
buon Vue a tutti/e */

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

let app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
});

let logo = new Vue({
  el:'#logo',
  data:{
    logo: 'logo.png'
  }

});
let app2 = new Vue ({
  el: '#app-2',
  data: {
    message: 'Hai caricato questa pagina alle ' + new Date().toLocaleString()
  }

});

let demo = new Vue({
  el: '#demo',
  data: {
    show: true
  }
});