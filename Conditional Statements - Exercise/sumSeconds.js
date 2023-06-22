function start(input){
let s1 = Number(input[0]);
let s2 = Number(input[1]);
let s3 = Number(input[2]);
let obshtoVreme = s1 + s2 + s3;
    let sborMinuti = Math.floor(obshtoVreme / 60);
    let sborSekundi = obshtoVreme % 60
    //console.log(sborSekundi)
    if(sborSekundi <10){ // 8
        console.log(`${sborMinuti}:0${sborSekundi}`) 
    }
    else{
        console.log(`${sborMinuti}:${sborSekundi}`);
    }
}
start(["35","45","44"]);