/* -- première fonction -- */
function showMessage(){
    console.log("Test d'une fonction")
}
(showMessage()) // on appelle la fonction afin que l'action qui lui est désigné se réalise

/* -- fonction avec une condition_test : avec for -- */
function test_bisextile(){
    let year; // on initie une variable
    year = "2024"; // qu'on définit
    /* il faut changer la date manuellement pour pouvoir changer le résultat */
    if (year % 4 === 0) // si (année divisié par 4 est strictement égale à 0)
    /* on utilise 3 égals pour que le zéro soit strictement égal à 0 */
    console.log("année bisextile"); // imprime dans la console : année bisextille
    else // sinon
    console.log('pas une année bisextille') //imprime dans la console : pas une année bisextille
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