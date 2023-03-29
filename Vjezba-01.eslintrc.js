
// -------------------------------------- Zadaci za Vjezbu I ------------------------------------------------- //

//POZIVE FUNKCIJA ODKOMENTIRAJ, PRATI KOMENTARE ZA POTPUN PROGRAMERSKI DOZIVLJAJ

//##########
//ZADATAK 1. FizzBuzz

/*
function FizzBuzz() {
    for(let i = 0; i < 100; i++) {
        if(i % 15 == 0) {
            console.log("FizzBuzz");
        } else if(i % 5 == 0) {
            console.log("Fizz");
        } else if(i % 3 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
*/

//FizzBuzz();

//FizzBuzz();
//  Q: Ima li razlike izmedu dva izraza: (i % 5 == 0) i (i % 3 === 0)
//  A: Ima, (i % 5 == 0): ovaj uvjet usporeduje vrijednosti sa automatskom konverzijom tipova podataka
//          (i % 3 === 0): ovaj uvjet usporeduje vrijednosti i tipove podataka

//  Q: Zasto postoji razlika u JS-u, a u C++ ne? Misli se na: (==) i (===) - Just in case :)
//  A: Zato jer se radi o 2 razlicita programa, tj svaki program se sastoji od svojih tipova podataka,
//     C++ ne podrzava oprerator '===', on se sastoji 4 tipa podatka i obicno ce zbog toga uvjeti biti zadovoljavajuci,
//     stoga se koristi operator '==', dok JS se sastoji od više tipova podatka, što znači  da podaci unutar 
//     tog programa mogu biti fleksibilni, tj podaci se mogu uporedivati po njihovoj vrijednosti i tipu podatka

//CTRL + R za pokretanje
//CTRL + K, CTRL + C za komentiranje
//CTRL + K, CTRL + U za odkomentiranje

//##########
//ZADATAK 2. Broji do 100, koristeći jednu varijablu. (Zapravo su dvije, podsjetite me da vam pokazem s jednom)

/*
function CountToHundred() {
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("Sum: ", sum);
}
*/


//CountToHundred();

//##########
//ZADATAK 3. NAPISI FUNKCIJU KOJA KVADRIRA, ALI PAZI DA JE PARAMETAR OK
//1. POKUSAJ 

/*
function SquareMe(param) {
    return param * param;
}
*/

//  Q: Koja je razlika izmedu funkcije koja ima povratnu vrijednost i one koja ispisuje?
//  A: Recimo da je zasad fora u tome sto poziv funkcije moras ispisati da bi se "vidjela" vrijednost,
//     a kod povratne to sto se vrati vrijednost ovisno o tipu podatka

//Probaj maknuti console.log, pa vidi sto je s ispisom
// console.log(SquareMe(2));

//Sto ce se dogoditi sada? 
//console.log(SquareMe("2")); 
//  Q:Kako i pobogu zasto?
//  A:Msm, program će rezultat funkcije učitati, ali neće moći prikazati na zaslon

//Probaj i ovo
//console.log(null);
//console.log(NaN);

//Zakljucak: Sve radi i bio je potreban jedan pokusaj?

//##########
//ZADATAK 4. Napisi rekurzivnu funkciju koja iterira sve dok ne dostigne vrijednost drugog parametra
//Ovaj zadatak je fora samo za isprobati debugger
//Stavi crvenu tocku na 65 liniju i stisni F5

/*
function IWillSayWhenYouCanStop(step, base) {
    if(step == base) {
        return;
    }
    step++;
    return IWillSayWhenYouCanStop(step, base);
}
IWillSayWhenYouCanStop(0, 100);
*/
/*
function Gregor_voli_med(step, base) {
    if(step == base) {
        return;
    }
    step++; 
    return Gregor_voli_med(step, base);
}
console.log(Gregor_voli_med(0, 100));
*/
