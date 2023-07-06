function time15(input){
let chas = Number(input[0]);
let minuti = Number(input[1]);
let chasVMinuti = chas * 60;
let total = chasVMinuti + minuti + 15;
let obhstoChasove = Math.floor(total / 60);
let obhstoMinuti = total %60
if(obhstoChasove == 24){
    obhstoChasove = 0
    }
if(obhstoMinuti < 10){
    console.log(`${obhstoChasove}:0${obhstoMinuti}`)
}else{
    console.log(`${obhstoChasove}:${obhstoMinuti}`);
}


}


time15(["23", "59"])