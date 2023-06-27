function start(input){
    let s1 = Number(input[0]);
    let s2 = Number(input[1]);
    let s3 = Number(input[2]);
    let obshtoVreme = s1 + s2 + s3;
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