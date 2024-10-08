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


/* Avant de commencer
1. vérifier si on a des nombres pour le jour, le mois et l'année. (parseInt)
2.  vérifier que les nombres sont positifs
3. Tester si les mois sont compris entre 1 et 12
4. Tester si les jours sont dans le bon intervalle (nb Maximum)
5.

*/


const day = parseInt(prompt("Entrez une date sous forme de jour"));
const month= parseInt(prompt("Entrez une date sous forme de mois"));
const year= parseInt(prompt("Entrez une date sous forme d'année"));
console.log(`${day} ${month} ${year}`);

let maxDays = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        maxDays = 31;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        maxDays = 30;
        break;
    case 2: maxDays = 28;   // cas par défaut
        if (year%4 === 0 && year %100 !== 0){
            maxDays =  29;          // année bissextile
        }

        if ( year % 400 === 0){
            maxDays =  29;      // année bissextile
        }
        break;
}


if (day && month && year){         // if (day) si day vaut un nombre alors = true si NaN alors c'est false
    if (day> 0 && month > 0 && year > 0){
        if (month>= 1 && month<= 12){
            if (day <= maxDays){
               console.log(`La date ${day}--${month}--${year} est valide`);
            }else{
                console.log(`Le nombre de jours du mois (${month}) doit être <= (${maxDays})`);
            }
        }else {
            console.log(" Le mois doit être compris entre 1 et 12.");
        }
    }else {     // quand on a entré un nombre négatif
        console.log(" Le jour, le mois et l'année doivent être positifs.");
    }
} else{         // quand le parseInt n'a pas fonctionné
    console.log(" Le jour, le mois et l'année doivent être des nombres positifs.");
}















//const date= day month year = prompt("Entrez une date en format: jour mois année (p. ex. 21 octobre 2019)");
//maxDays= 31;






























/*
const date= day month year = prompt("Entrez une date en format: jour mois année (p. ex. 21 octobre 2019)");
let day;
let month;
let year;
maxDays= 31;
*/




/*
let day = Number(prompt("Entrez un jour (en chiffres)."));
let month= String(prompt("Entrez un mois (en lettres minuscules)."));
let year= Number(prompt("Entrez une année (en chiffres)."));
let maxDays= 31;

let ismonthPossible= ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const month31= ["janvier","mars","mai","juillet","août","octobre","décembre"];

let annee4 = year%4 === 0 ;
const annee400 = ((year%400) === 0);
const annee100 = ((year%100) === 0);

//if (ismonthPossible === "janvier" )

if (annee4 === true || annee400 === true){
    //console.log(`${year} est une année bissextile.`);
    estBissextile = true;
} else if (annee100 === true){
    //console.log(`${year} est une année non bissextile.`);
    estBissextile = false;
} else {
    //console.log(`${year} est une année non bissextile.`);
    estBissextile = false;
}

if(day <= 31 && ismonthPossible === month && year > 0){
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
    console.log(`La date ${day} ${month} ${year} est valide`);
} else {
    console.log(`La date ${day} ${month} ${year} n'est PAS valide`);
}



/*

/*
if (day ===true && month === true && year === true){
    console.log(`La date ${day} ${month} ${year} est valide`);
} else {
    console.log(`La date ${day} ${month} ${year} n'est PAS valide`);
}
*/




/*

Copie pour moi


let day = Number(prompt("Entrez un jour (en chiffres)."));
let month= String(prompt("Entrez un mois (en lettres minuscules)."));
let year= Number(prompt("Entrez une année (en chiffres)."));
let maxDays= 31;


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


if (day ===true && month31 === true && year === true){
    console.log(`La date ${day} ${month} ${year} est valide`);
} else {
    console.log(`La date ${day} ${month} ${year} n'est PAS valide`);
}
 */