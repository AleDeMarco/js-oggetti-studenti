function btn1() {
  var studente = {
   nome: 'Paolo',
   cognome: 'Rossi',
   eta: 20
  };

  for (var k in studente) {
   document.getElementById('ex1').innerHTML += studente[k] + '<br>';
  }
}

function btn2() {
  var studenti = [
    {
      nome: 'Paolo',
      cognome: 'Rossi',
    },
    {
      nome: 'Guido',
      cognome: 'Bianchi',
    },
    {
      nome: 'Mario',
      cognome: 'Gialli',
    }
  ];
  for (var i = 0; i < studenti.length; i++) {
    for (var k in studenti[i]) {
      document.getElementById('ex2').innerHTML += studenti[i][k] + '<br>';
    }
    document.getElementById('ex2').innerHTML += '<br>';
  }
}

function btn3() {
  var studente = {
   nome: prompt('Inserisci il nome:'),
   cognome: prompt('Inserisci il cognome:'),
   eta: parseInt(prompt('Inserisci l\'età:'))
  };

  document.getElementById('ex3').innerHTML += 'Studente aggiunto con successo:<br>';
  for (var k in studente) {
   document.getElementById('ex3').innerHTML += studente[k] + '<br>';
  }
}
