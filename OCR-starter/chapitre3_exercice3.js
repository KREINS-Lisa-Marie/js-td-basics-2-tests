// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.




 let heure = 01;
 let minutes = 59;
 let secondes = 59;


 secondes ++;

 if (secondes >= 59){
     secondes = 0;
} else {
    secondes ++;
}
 if (minutes >=59){
     minutes = 0;
 } else {
     minutes ++;
 }

 if (heure >= 23){
     heure = 0;
 } else{
     heure ++;
 }
 console.log(`${heure} h ${minutes} min. ${secondes} sec.`);


/*

secondes ++;

 if ( secondes >= 59){
      secondes = 0;
      if ( minutes >=59){
            minutes = 0;
            if (heure >= 23){
                heure = 0;
            }
      }
} else{
  heure ++;
}
 console.log(`${heure} h ${minutes} min. ${secondes} sec.`);

*/