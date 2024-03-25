/* -- première fonction -- */
function showMessage(){
    console.log("Test d'une fonction")
}
(showMessage())

/* -- fonction avec condition_test avec for -- */
function test_bisextile(){
    let year;
    year = "2024";
    /* il faut changer la date manuellement pour pouvoir changer le résultat */
    if (year % 4 === 0)
    /* on utilise 3 égals pour que le zéro soit strictement égal à 0 */
    console.log("année bisextile");
    else
    console.log('non')
}
(test_bisextile())

/* - focntion bisextile avec affichage true -- */
function bisextile(){
    let année;
    année = "2021"
    if (année % 4 === 0)
    console.log(true);
    else
    console.log(false)
}

(bisextile())