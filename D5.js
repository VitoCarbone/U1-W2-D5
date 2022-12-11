/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
                   

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
    console.log( pets[i] );
  }


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
pets.sort();
console.log (pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets",
     questa volta in ordine invertito.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
pets.reverse();
console.log (pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare
     il primo elemento dall'array "pets" in ultima posizione.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
pets.shift();
pets
/* ESERCIZIO 5
    Dato il seguente array di oggetti, 
    scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate"
    con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (i = 0; i < cars.length; i++) {
  cars[i].licenceplate = 123456 + i;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array
    "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Alfa Romeo",
  model:"159",
  color:"grey",
  trims: ["Quadrifoglio", "Veloce"],
  licenceplate: 000000,
});
for(i=0; i<cars.length;i++){
  cars[i].trims.pop();
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" 
    di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi
   in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(i=0;i<cars.length; i++){
  if(cars[i].color.charAt(0)=="b"){
    console.log("Frizz");
    else {
      console.log("Buzz");
    }
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori 
    del seguente array numerico
   fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i=0;
while (numericArray[i] !==32){
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, 
    genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]

const charactersArray = ["g", "n", "u", "z", "d"]*/

const charactersArray = ["g", "n", "u", "z", "d"];
const positions = [];
let i = 0;
while (i < charactersArray.length) {
  switch (charactersArray[i]) {
    case "a":
      positions.push(1);
      i++;
      break;
    case "b":
      positions.push(2);
      i++;
      break;
    case "c":
      positions.push(3);
      i++;
      break;
    case "d":
      positions.push(4);
      i++;
      break;
    case "e":
      positions.push(5);
      i++;
      break;
    case "f":
      positions.push(6);
      i++;
      break;
    case "g":
      positions.push(7);
      i++;
      break;
    case "h":
      positions.push(8);
      i++;
      break;
    case "i":
      positions.push(9);
      i++;
      break;
    case "l":
      positions.push(10);
      i++;
      break;
    case "m":
      positions.push(11);
      i++;
      break;
    case "n":
      positions.push(12);
      i++;
      break;
    case "o":
      positions.push(13);
      i++;
      break;
    case "p":
      positions.push(14);
      i++;
      break;
    case "q":
      positions.push(15);
      i++;
      break;
    case "r":
      positions.push(16);
      i++;
      break;
    case "s":
      positions.push(17);
      i++;
      break;
    case "t":
      positions.push(18);
      i++;
      break;
    case "u":
      positions.push(19);
      i++;
      break;
    case "v":
      positions.push(20);
      i++;
      break;
    case "z":
      positions.push(21);
      i++;
      break;
    default:
      positions.push("Dato non trovato");
  }
}
console.log(positions);
