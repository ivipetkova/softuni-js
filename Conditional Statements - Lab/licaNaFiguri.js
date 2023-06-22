function start(input){
let vid = input[0];

if(vid === "square"){

    let razmeri = Number(input[1]);
    console.log(Number(razmeri * razmeri).toFixed(3));
}
else if(vid === "rectangle"){
    let length = Number(input[1]);
    let area = Number(input[2]);

    let result =  (length * area).toFixed(3)
    console.log(result);
}

else if(vid === "circle"){
    let radius = Number(input[1]);
    let result = (Math.PI *(Math.pow(radius,2)));
    console.log(result.toFixed(3));


}

else if(vid === "triangle"){
    let width = Number(input[1]);
    let length = Number(input[2]);
    let h = (length * width) / 2;
    console.log(h.toFixed(3));

}
}

start(["triangle", "4.5", "20"])