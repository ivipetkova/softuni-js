function start(input){
    let chas = Number(input[0]);
    let minuti = Number(input[1]);
    let chasVMinuti = chas * 60;
   
    let obhstoChasove = chasVMinuti + minuti + 15;
    let obshtoVreme = Math.floor(obhstoChasove / 60);
    //if( obshtoVreme == 24)
    //obshtoVreme = 0;
    //console.log(obshtoVreme)
    let total = obhstoChasove % 60;
    if( total == 24)
    total = 0;
    //console.log(total);
    if( obshtoVreme < 10){
        console.log(`${obshtoVreme}:0${total}`)
    }else{
        console.log(`${obshtoVreme}:${total}`);
    }

    
}
start(["23", "59"])