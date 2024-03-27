
// création et ajout du nouveau paragraphe dans le corps de la page web
/* on instancie la nouvelle phrase */
let newP = $("<p>");
/* on détermine le texte qui doit être crée et ajouté */
newP.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les constuit, ensuite, on prie.");
/* on ajoute cette phrase avec le JQuery */
$("body").append(newP);


// creation de la fonction affichier / masquer
/* on dit que le docuement est prêt */
$(document).ready(function() {
    /* on appelle le bouton hide lorsqu'on click */
    $("#hide").click(function(){
        /* on demande de caché le paragraphe ajouté */
       $(newP).hide(); 
    });
     /* on appelle le bouton show lorsqu'on click */
    $("#show").click(function(){
        /* on demande de montrer le paragraphe ajouté */
       $(newP).show(); 
    });
})