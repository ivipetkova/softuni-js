

//От конзолата се четат 6 реда:

//1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]

//2. Брой пъзели - цяло число в интервала [0… 1000]

//3. Брой говорещи кукли - цяло число в интервала [0 … 1000]

//4. Брой плюшени мечета - цяло число в интервала [0 … 1000]

//5. Брой миньони - цяло число в интервала [0 … 1000]

//6. Брой камиончета - цяло число в интервала [0 … 1000
function start(input){
let cenaZaEkskurziq = Number(input[0]);
let Puzeli= Number(input[1]);
let govoreshtiKukli= Number(input[2]);
let plusheniMecheta= Number(input[3]);
let minioni= Number(input[4]);
let kamioncheta= Number(input[5]);

//let ostavashtiPari = 0
//let nedostatuchniPari = 0

let otstypka = 0
let cena = Puzeli * 2.60 + govoreshtiKukli * 3 + plusheniMecheta * 4.10 + minioni * 8.20 + kamioncheta * 2;
//console.log(cena)
let broiNaIgrachkite = Puzeli + govoreshtiKukli + plusheniMecheta + minioni + kamioncheta ;
//console.log(broiNaIgrachkite);

if(broiNaIgrachkite >= 50){
   
   otstypka  = cena * 25 /100;
   console.log(otstypka);
}
let krainaCena = cena - otstypka;
//console.log(krainaCena)
let naem = (krainaCena * 10) /100;
//console.log(naem);
let pechalba = krainaCena - naem;
//console.log(pechalba);
if(pechalba >= cenaZaEkskurziq){
    console.log(`Yes! ${(pechalba - cenaZaEkskurziq).toFixed(2)} lv left.`);
}else{
    console.log(`Not enough money! ${(cenaZaEkskurziq - pechalba).toFixed(2)} lv needed.`);
}
}
start(["320", "8", "2", "5", "5", "1"])