function start(input){
    let cenaZaEkskurziq = Number(input[0]);
    let Puzeli= Number(input[1]);
    let govoreshtiKukli= Number(input[2]);
    let plusheniMecheta= Number(input[3]);
    let minioni= Number(input[4]);
    let kamioncheta= Number(input[5]);
    //let ostavashtiPari = 0
    //let nedostatuchniPari = 0
    //let otstypka = 0
    let cena = Puzeli * 2.60 + govoreshtiKukli * 3 + plusheniMecheta * 4.10 + minioni * 8.20 + kamioncheta * 2;
    //console.log(cena)
    let broiNaIgrachkite = Puzeli + govoreshtiKukli + plusheniMecheta + minioni + kamioncheta ;
    //console.log(broiNaIgrachkite);
    
    if(broiNaIgrachkite >= 50){
       
        console.log(cena * 0.25);
        //otstypka = cena * 0.25;
    
    }
    //otstypka = cena * 0.25;
    
    //console.log(otstypka);
    //let krainaCena = cena - otstypka;
    //console.log(krainaCena);
    
    let naem = krainaCena  * 0.10;
    //console.log(naem);
    let pechalba = krainaCena - naem;
    //console.log(pechalba);
    
    ostavashtiPari = pechalba - cenaZaEkskurziq
    //console.log(ostavashtiPari);
    if(pechalba >= cenaZaEkskurziq){
        console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${cenaZaEkskurziq - ostavashtiPari.toFixed(2)} lv needed.`);
    }
    }
    
    
    start(["320", "8", "2", "5", "5", "1"]);
        