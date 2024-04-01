
// définir une variable qui récupère les élément dans le textarea
let textarea = document.getElementById("keylogger");

// fonction qui écoute les évènement qui se passe sur le clavier
window.addEventListener('keydown', (e) => {
    //définir une variable qui définit l'évènement (e) du clavier
    let keyPressed = e.key;
    // condition pour garder uniquement les lettres a-z de l'alphabet dans l'évènement rattaché au clavier
    if (/^[a-z]$/.test(keyPressed)){
        // on demande d'ajouter dans le textarea les élements récupérer du clavier
        textarea.value += keyPressed;
    }
    //on définit une variable qui englobe l'ensemble du document pour le focus
    let pointer = document.body;
    // on détermine le focus en focntion du mouvement de la souris avec un paramètre event
    pointer.addEventListener('mousemove', function(event) {
        // suite de variable pour récupérer la positions de la souris sur l'axe X et Y du body
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let placement_souris = document.elementFromPoint(mouseX, mouseY);
        // si le placement de la souris et l'élément qui doit être focus concordent
        if (placement_souris && placement_souris.focus){
            //alors le placement de la souris permet de faire un focus sans avoir a cliqué dessus
            placement_souris.focus();
        }
    })
});


// --> avant les varaibles et conditions de la souris focus --> le focus se fait uniquement quand je clique sur le textearea
// quand le textarea est selection avec la souris, les lettres s'affiche en double
// quand le textarea n'est pas selection, je ne tape qu'une seule lettre dans le texte area
/* --> le phénomène de double/simple lettre se fait également sans le focus iniatliser */


/*  -------- EXPLICATION DE L'EXPRESSION ENTRE CROCHET POUR CHOISIR LES ELEMENTS DE L'ALPHABET

/^[a-z]$/ --> expression régulière 

^ : "début de la chaîne"

[a-z] : groupe correspond à n'importe quelle lettre de l'alphabet

$ : "fin de la chaîne".

Les slashes au début et à la fin de l'expression régulière 
servent à délimiter l'expression. Ils servent à indiquer le début et 
la fin de l'expression régulière, comme pour les guillemets 
pour les chaînes de caractères. 
Les slashes ne font pas partie de l'expression régulière, ils servent 
à indiquer le début et la fin de l'expression régulière.

*/

