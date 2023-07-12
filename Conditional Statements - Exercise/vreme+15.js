function start(input){
    let budgetPetur = Number(input[0]);
    let broiVideoKarti = Number(input[1]);
    let broiProcesori = Number(input[2]);
    let broiRam = Number(input[3]);
    let sumaVideoKarti = (250 * broiVideoKarti) * broiVideoKarti;
    //sumaVideoKarti + broiVideoKarti;
    //console.log(sumaVideoKarti);
    let sumaProcesor = (sumaVideoKarti * 35 / 100) * broiProcesori;
    //sumaProcesor * broiProcesori;
    //console.log(sumaProcesor);
    let sumaRam = (sumaVideoKarti * 10 / 100) * broiRam ;
    
    let obshtaSuma = sumaVideoKarti + sumaProcesor + sumaRam ;
    }
    start(["900","2","1","3"])