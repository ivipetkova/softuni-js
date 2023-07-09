//Функцията получава 3 аргумента:

//1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]

//2. Брой на статистите – цяло число в интервала [1 … 500]

//3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]

//· Декорът за филма е на стойност 10% от бюджета.

//· При повече от 150 статиста, има отстъпка за облеклото на стойност 10

function start(input){
let budget = Number(input[0]);
let broiStatisti = Number(input[1]);
let cenaObleklo = Number(input[2]);
let dekor = budget * 0.10;
let otstypka = 0
let obshtaSumaFilm = 0
let obshtaCenaObleklo = 0
//let obshtaCenaOblekloo = 0
//console.log(dekor)
let sumaZaObleklo = broiStatisti * cenaObleklo;
//console.log(sumaZaObleklo);


if(broiStatisti > 150){
    
    otstypka = sumaZaObleklo * 0.9;
    //console.log(otstypka);
    
}
obshtaCenaObleklo =(sumaZaObleklo - otstypka);


console.log(obshtaCenaObleklo);
obshtaSumaFilm = Math.trunc(budget + obshtaCenaObleklo) ;
console.log(obshtaSumaFilm);
}

start(["15437.62",

"186",

"57.99"])