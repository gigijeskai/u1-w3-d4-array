let stringaDiPartenza = 'ciao a tutti, sono una stringa che può cambiare';
let stringaMaiuscola = stringaDiPartenza.toUpperCase();
console.log(stringaMaiuscola);
let stringaMinuscola = stringaDiPartenza.toLowerCase();
console.log(stringaMinuscola);
let stringa1 = stringaDiPartenza.split(' ', 1);
console.log(stringa1);
let stringa2 = stringaDiPartenza.split(' ', 4,5);
console.log(stringa2);
let nuovaStringa = stringa1 + stringa2;
console.log(nuovaStringa);


let listaDellaSpesa = [
    "pane",
    "latte",
    "uova"
]

let togli = listaDellaSpesa.pop();
console.log(togli);
let aggiungi = listaDellaSpesa.push("uova");
console.log(aggiungi);
console.log(listaDellaSpesa);
let togliPrimo = listaDellaSpesa.shift();
console.log(togliPrimo);
let aggiungiPrimo = listaDellaSpesa.unshift("pane");
console.log(listaDellaSpesa);



let numberDice = [
    1,
    2,
    3,
    4,
    5,
    6
]
function rollDice() {
let number = getRandomInteger(0, numberDice.length - 1)

let result = numberDice(number)

document.getElementById("display").value  += result
}

