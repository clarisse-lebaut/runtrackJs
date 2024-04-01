
/* -- on définit une variable dans laquelle les jours de la semaine sont répertoriés sous forme de liste -- */
let dailyWeek
dailyWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

/* -- on procédee à différentes impression de la variable - */
console.log(dailyWeek) //imprime la liste comme écrite dans la variable + l'index
console.log(dailyWeek.length) //me dit le nombre sous forme nuémrique d'éléments présent dans la liste
console.log(dailyWeek.length -1) //le nombre total d'éléments - 1

/* -------------------------------------------------------------------------------- */

/* -- test d'impression sans fonctions -- */
let jours
jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

for (let i = 0; i < jours.length; i++){
    console.log(jours[i])
}

/* -------------------------------------------------------------------------------- */

/* -- réalisation de la fonction de l'exercice -- */
function afficherJoursSemaines(){
    let joursSemaines // on crée un variable
    joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"] // on définit la variable
    for (let i = 0; i < jours.length; i++) { // on dit : pour le compteur dans la variable on commence à 0, le compteur doit compter tant qu'il n'a pas vu tous les éléments de la liste, une fois arriver a +1 c'est la fin
    console.log(jours[i]) // on lui demande d'imprimer ce que le compteur a compter 
    }
}
(afficherJoursSemaines()) // on appelle la fonction dans la console du navigateur