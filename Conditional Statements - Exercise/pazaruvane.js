function start(input) {
    let budgetPetur = Number(input[0]);
    let broiVideoKarti = Number(input[1]);
    let broiProcesori = Number(input[2]);
    let broiRam = Number(input[3]);

    let cenaProcesor = 0;
    let cenaRam = 0;
    let obshtaSuma = 0;
    let ostavashtiPari = 0;
    let nedostatuchniPari = 0;
    let otstypka = 0;
    //let ostavashtiPari = 0

    let sumaVideoKarti = 250 * broiVideoKarti;
    let sumaProcesor = (sumaVideoKarti * 35) / 100;
    cenaProcesor = sumaProcesor * broiProcesori;
    let sumaRam = (sumaVideoKarti * 10) / 100;
    cenaRam = sumaRam * broiRam;
    obshtaSuma = sumaVideoKarti + cenaProcesor + cenaRam;
    //console.log(obshtaSuma);

    if (broiVideoKarti > broiProcesori) {
        otstypka = (obshtaSuma * 85) / 100;

        //console.log(otstypka);
        //otstypka = (obshtaSuma * 15) /100
    }
    if (otstypka <= budgetPetur) {
        nedostatuchniPari = budgetPetur - otstypka;
        console.log(`You have ${(nedostatuchniPari).toFixed(2)} leva left!`);
    } else {
        ostavashtiPari = otstypka - budgetPetur;
        console.log(`Not enough money! You need ${(ostavashtiPari).toFixed(2)} leva more!`);
    }

}