
function fizzbuzz(){
    for (let i = 1; i <=151; i++) { // on dit : pour le compteur dans la variable on commence à 0, le compteur doit compter tant qu'il n'a pas vu tous les éléments de la liste, une fois arriver a +1 c'est la fin
        if (i % 3 === 0 && i % 5 === 0){ // bien ouvrir les accolades pour fermer la condition et passer à la suivante
            console.log("FizzBuzz")
        }
        else if(i % 3 === 0){ // il faut mettre else if parce que le if rend tout obligatoire et ne permet pas de faire apparaitre correctement la liste complète
            console.log("Fizz")
        }
        else if (i % 5 === 0){
            console.log("Buzz")
        }
        else{ // ne pas oublier le else pour appeler le reste des nombres de la liste
        console.log(i) // on appele le i qui correspond au compteur qui compte entre 1 et 151
        }   
    }
}
(fizzbuzz()) // on imprime l'action demandé par la fonction
