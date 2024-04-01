// on définit une variable qui récupère ce qui se passe sur le bouton
let bouton = document.getElementById('button')

// on crée un fonction qui va réaliser l'action de montrer le paragraphe
bouton.addEventListener('click', function showpara(){
    fetch("./expression.txt") // on récupère les informations du documents texte
        .then(response => response.text())
        .then(data => { // fonction qui permet de faire apparaitre le texte comme nouvel élément dans le HTML
            let newParagraphe = document.createElement('p');
            newParagraphe.textContent = data
            document.body.appendChild(newParagraphe)
            console.log(data)
        })
        .catch(error => console.error(error)); //apparait si il y une erreur dans la récupération
});
