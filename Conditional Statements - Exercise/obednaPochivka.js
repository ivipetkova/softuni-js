function start(input) {
    let imeNaSerial = input[0];
    let produljitelnostEpizod = Number(input[1]);
    let produljitelnostPochivka = Number(input[2]);
    let vremeZaObqd = 0;
    let vremeZaOtdih = 0;
    let ostanaloVreme = 0;
    let nujnoVreme = 0;
    vremeZaObqd = (produljitelnostPochivka / 8);
    //console.log(vremeZaObqd)
    vremeZaOtdih = (produljitelnostPochivka / 4);
    ostanaloVreme = produljitelnostPochivka - vremeZaObqd - vremeZaOtdih;
    //console.log(ostanaloVreme)
    nujnoVreme = produljitelnostEpizod - ostanaloVreme;
    if (produljitelnostEpizod <= ostanaloVreme) {
        console.log(`You have enough time to watch ${imeNaSerial} and left with ${Math.ceil(ostanaloVreme - produljitelnostEpizod)} minutes free time.`);

    } else {
        console.log(`You don't have enough time to watch ${imeNaSerial}, you need ${Math.ceil(nujnoVreme)} more minutes.`);
    }
}
start(["Game of Thrones",

    "60",

    "96"
])