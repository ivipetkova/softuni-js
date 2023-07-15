function personalTtitles(input){
let age = Number(input[0]);
let gender = input[1];

if(gender === "f"){
    if(age >= 16){
       console.log("Ms.");
}
else{
    console.log("Miss");
}
}

    else{
    if(gender === "m"){
    if(age >= 16){
        //if(gender === "m");
        console.log("Mr.");
    }
    else{
        console.log("Master");
    }
}
}
}


personalTtitles(["17", "m"])