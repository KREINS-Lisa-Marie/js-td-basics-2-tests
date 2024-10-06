/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/


// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.





const scoreMoyenJohn = ((89 + 120 + 103)/3);
const scoreMoyenMike = ((116 + 94 + 123)/3);
const scoreMoyenMary = ((97 + 134 + 105)/3);

if (scoreMoyenJohn > scoreMoyenMike && scoreMoyenJohn > scoreMoyenMary){
    console.log(`L\'équipe de John a une meilleure moyenne. Moyenne: ${scoreMoyenJohn}`);
} else if (scoreMoyenJohn === scoreMoyenMike && scoreMoyenJohn === scoreMoyenMary)
    console.log(`Les équipes ont la même moyenne. Moyenne équipe Mike: ${scoreMoyenMike} Moyenne équipe John: ${scoreMoyenJohn} Moyenne équipe Mary: ${scoreMoyenMary}`);
else if (scoreMoyenMike > scoreMoyenJohn && scoreMoyenMike > scoreMoyenMary){
    console.log(`L\'équipe de Mike a une meilleure moyenne. Moyenne: ${scoreMoyenMike}`);
} else {
    console.log(`L\'équipe de Mary a une meilleure moyenne. Moyenne: ${scoreMoyenMary}`);
}



/* Code sans Mary


if (scoreMoyenJohn>scoreMoyenMike){
    console.log(`L\'équipe de John a une meilleure moyenne. Moyenne: ${scoreMoyenJohn}`);
} else if (scoreMoyenJohn===scoreMoyenMike)
    console.log(`Les équipes ont la même moyenne. Moyenne: ${scoreMoyenMike} Moyenne: ${scoreMoyenJohn}`);
else {
    console.log(`L\'équipe de Mike a une meilleure moyenne. Moyenne: ${scoreMoyenMike}`);
}
*/