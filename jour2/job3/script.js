
// -- on définit une variable qui récupère la string du contenue du paragraphe crée dans le HTML
let compter = document.getElementById('compteur')
// -- on initilaise un compteur commeençant à 1 lors du premier clic sur le bouton 
let compter_les_clics = 1
// -- création d'une fonction évenemetielle
// -> on demande à la fonction de récupérer ce qui se passe sur le bouton
// -> on lui demande d'écouter ce qui se passe comment évènement au moment du clic de la souris
document.getElementById("button").addEventListener('click', function() {
    // -- on demande à la fonction de changer le contenue récupérer dans le HTML
    // -- et on remplace le contenue de cette variable par l'augmentation du compteur_de_clic qu'on a dfinit comme Number
    compteur.textContent = compter_les_clics++;
});