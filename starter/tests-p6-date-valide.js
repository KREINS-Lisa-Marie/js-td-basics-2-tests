/*
TESTS - PRÉPA 6 : Date valide

Écrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas.

AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
- le 31 janvier 2019 est une date valide
- le 28 février 2019 est une date valide
- le 29 février 2019 n'est PAS une date valide
- le 29 février 2020 est une date valide
- le 30 février 2020 n'est PAS une date valide
- le 30 avril 2020 est une date valide
- le 31 avril 2020 n'est PAS une date valide

Étapes :
1. Demandez à l'utilisateur d'entrer une date sous forme de jour, mois et année, puis stockez ces valeurs dans des variables (par exemple, day, month, year).
2. Initialisez une variable maxDays pour stocker le nombre maximum de jours autorisés pour le mois.
3. Utilisez une série de conditions pour déterminer maxDays en fonction du mois (y compris le cas de février avec gestion bissextile).
4. Utilisez une autre condition pour vérifier si la date est valide en comparant le jour entré par l'utilisateur avec maxDays.
5. Affichez dans la console si la date est valide ou non : "La date … est valide" ou "La date … n'est PAS valide".

N'oubliez pas de tester votre programme avec diverses dates pour vous assurer qu'il fonctionne correctement.

Vous pouvez utiliser les exemples que vous avez fournis comme point de départ.
*/


const date= day month year = prompt("Entrez une date en format: jour mois année (p. ex. 21 octobre 2019)");
let day;
let month;
let year;
maxDays= 31;

month31= "janvier", "mars", "mai" , "juillet", "août", "octobre", "décembre"

let annee4 = year%4 === 0 ;
const annee400 = ((year%400) === 0);
const annee100 = ((year%100) === 0);

if (month === month31 ){
    maxDays = 31;
} else if (month === "février"){
    if (estBissextile === true){
        maxDays = 29;
    } else {
        maxDays = 28;
    }
} else {
    maxDays = 30;
}


if (annee4 === true || annee400 === true){
    console.log(`${year} est une année bissextile.`);
    estBissextile = true;
} else if (annee100 === true){
    console.log(`${year} est une année non bissextile.`);
    estBissextile = false;
} else {
    console.log(`${year} est une année non bissextile.`);
    estBissextile = false;
}


console.log(`La date ${date} est valide`);
console.log(`La date ${date} n'est PAS valide`);