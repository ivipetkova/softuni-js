function start(input) {
    let chislo = Number(input[0]);

    let isEndingOnFive = String(chislo).endsWith(5);

    // console.log(isEndingOnFive);
    let bonus = 0;
    if (chislo <= 100) {
        bonus = 5;
        if (chislo % 2 === 0) {
            bonus += 1
        }
        if(isEndingOnFive){
            bonus +=2;
        }
    } else if (chislo >= 100 && chislo < 1000) {
        bonus = (chislo * 20) / 100;
        if (chislo % 2 === 0) {
            bonus += 1
        }
        if(isEndingOnFive){
            bonus +=2;
        }
    } else if (chislo > 1000) {
        bonus = (chislo * 10) / 100;
        if (chislo % 2 === 0) {
            bonus += 1
        }
        if(isEndingOnFive){
            bonus +=2;
        }
        //console.log(bonus)
    }
    console.log(bonus);
    console.log(chislo + bonus);
}
start(["20"]);