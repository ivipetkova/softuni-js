function start(input) {
    let chislo = Number(input[0]);
    let isEven = chislo % 2 === 0;
    let bonusTochki = 0
    if (chislo <= 100) {
        bonusTochki = 5;
        if (isEven) {
            bonusTochki += 1;
        }
        if (chislo.toString().endsWith(5)) {
            bonusTochki += 2
        }
    } else if (chislo > 100 & chislo < 1000) {
        bonusTochki = (chislo * 20) / 100;
        if (isEven) {
            bonusTochki += 1;
        }
        if (chislo.toString().endsWith(5)) {
            bonusTochki += 2;
        }
    } else {
        bonusTochki = (chislo * 10) / 100;
        if (isEven) {
            bonusTochki += 1;
        }
        if (chislo.toString().endsWith(5)) {
            bonusTochki += 2;
        }
    }
    console.log(bonusTochki);
    console.log(chislo + bonusTochki);
}


start(["175"]);