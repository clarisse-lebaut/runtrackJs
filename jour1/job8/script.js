function NombresPremiers(variable1){
  for (var i =2 ; i < variable1; i++)
    if(variable1%i === 0)
    console.log("c'est pas un nombre premier");
    else if (variable1 > 1)
    console.log("C'est un nombre premier");
}
(NombresPremiers(12))



// fonction qui permet de savoir si un nombre est premier ou pas
// récupérer sur internet
function nbrPremier(nbr) {// fonction 
  for(var i = 2; i < nbr; i++)
  //pour la variable i, tant que i est inférieur à nbr, on arrête le compteur
    if(nbr%i === 0) return false;
    // si modulo de nbr est strictement égale à 0, retourne faux
  return nbr > 1; //retourne true si le modulo est supérieur à 1
}
console.log(nbrPremier(13));
