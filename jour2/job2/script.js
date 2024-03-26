
// ----- création de l'emplacement d'un nouvel élément textuelle à afficher dans la page web
let newArticle = document.createElement('article'); //entre parenthèse on indique l'emplacement sémantique correspondant au HTML
// ---- paramètre de ce nouvel éléments
newArticle.id = 'nouveau'; // on donne un id
// --- on crée le contenue de ce nouvel élément textuelle
let texte = document.createTextNode(" 'L'important n'est pas la chute, mais l'atterissage' ");
// -- on ajoute l'éléménent nommé par sa variable avec appendChild 
newArticle.appendChild(texte);

// on définit une variable qui va récupérer ce qui se passe sur le bouton
let bouton = document.getElementById("button");
// on définit une variable concernant l'alternance d'un bouton qui retourne faux en point de départ 
let alterner = false;

// création de la fonction d'appartion / disparition du nouvel élément au clic du bouton
bouton.addEventListener('click', function showide() {
    // si la valeur de la variable alterner
    if (alterner){
        // texte du bouton est = 'string choisis par dev' pour indiquer à l'utilisateur ce qu'il va faire
        bouton.textContent = 'Afficher la citation';
        // alors le nouvel élément est retiré
        newArticle.remove();
    }
    //autrement (ou si le valeur de la variable alterner est vrai)
    else {
        // texte du bouton est = 'string choisis par dev' pour indiquer à l'utilisateur ce qu'il va faire
        bouton.textContent = 'Retirer la citation';
        // alors le nouvel élément est ajouté
        document.body.appendChild(newArticle);
    }
    // ici on produit l'évènement d'alternance entre les affichage textuelle du bouton
    alterner =! alterner;
});






