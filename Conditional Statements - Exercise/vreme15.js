function start(input){
let chas = Number(input[0]);
let minuti = Number(input[1]);
if(chas === 23){
    if(minuti + 15 > 60 ){
        console.log(`0:${minuti + 15 - 60}`);
    }
}
else{
    if(minuti + 15 > 60){
        let ternary = minuti + 15 - 60 ? `0${minuti}` : minuti + 15 - 60;
        console.log(`${++chas}:${ternary}`);
    }
    else{
        console.log(`${chas}:${minuti + 15}`);
    }
}
}

start(["12","49"]);