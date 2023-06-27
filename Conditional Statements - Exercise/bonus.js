function start(input){
let igrach1 = Number(input[0]);
let igrach2 = Number(input[1]);
let igrach3 = Number(input[2]);
let obshtoVreme = igrach1 + igrach2 + igrach3;

//console.log(obshtoVreme);
let minuti = Math.floor(obshtoVreme / 60);
//console.log(minuti);
let sekundi = obshtoVreme % 60;
//console.log(sekundi);
if(sekundi < 10){
    console.log(`${minuti}:0${sekundi}`);
}else{
    console.log(`${minuti}:${sekundi}`);
}
}
start(["35","45","44"]);