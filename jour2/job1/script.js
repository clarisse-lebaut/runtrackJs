
//création d'une fonction qui récupère la citation
function citation(){
    const element = document.getElementById("citation"); //récup l'emplacement de la citation
    const texte = element.textContent; //récup l'éléménet de la citation
    console.log(texte); //on demande d'impirmer dans la console la citation
}

let show = document.getElementById('button'); //on récupère ce qui se passe sur bouton

show.onclick = () => { //on demande de récupérer au clic de la souris ce qui se passe dans la fonction citation
    return citation() // --> important de mettre un return quand je veux appeler une fonction sans paramètre, on retourne la citaton dans la console
};