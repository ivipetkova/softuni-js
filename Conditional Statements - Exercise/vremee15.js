function start(input){
let chas = Number(input[0]);
let minuti = Number(input[1]);
let chasVMinuti = chas * 60;


let totalTime = chasVMinuti + minuti + 15;
// console.log(totalTime)
let obhstoChasove = Math.floor(totalTime / 60);
//console.log(obhstoChasove);
let obhstoMinuti = totalTime % 60;
if(obhstoChasove === 24){
    obhstoChasove = 0;
}
//console.log(obhstoMinuti);
if( obhstoMinuti < 10){
    console.log(`${obhstoChasove}:0${obhstoMinuti}`)
}else{
    console.log(`${obhstoChasove}:${obhstoMinuti}`);
}
}

start(["23", "59"]);