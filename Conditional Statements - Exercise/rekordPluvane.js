function start(input){
let rekordSekundi = Number(input[0])
let razstoqnieMetri = Number(input[1])
let vremeSekundiZa1m = Number(input[2])
let metri15 = 0
let smetka = 0
let nedostigashtiSek = 0
//  nedostigashtiSek = obhstoVreme - rekordSekundi
let obhstoVreme = 0
let ivan = razstoqnieMetri * vremeSekundiZa1m
//console.log(ivan);
metri15 = Math.floor(razstoqnieMetri / 15) ;
//console.log(metri15);
smetka =(metri15 * 12.5)
//console.log(smetka);
obhstoVreme = ivan + smetka;
//console.log(obhstoVreme);

if(rekordSekundi > obhstoVreme){
    console.log(`Yes, he succeeded! The new world record is ${obhstoVreme.toFixed(2)} seconds.`)
}else{
 (obhstoVreme <= rekordSekundi)
    nedostigashtiSek = obhstoVreme - rekordSekundi
    console.log(`No, he failed! He was ${nedostigashtiSek.toFixed(2)} seconds slower.`)
}
}
start(["55555.67",

"3017","5.03"])