
// trie dans l'ordre ascendant sans fonction
let nombres = [3,15,56,74,4,2,5,996,48,596];
let ascendant = (a,b) => a - b; // si a est supérieur à b, alors a - b retrounera un nb posisitf et b sera trier en premier
let trie = [...nombres].sort(ascendant);
console.log(trie)

// trie dans l'ordre descendant sans fonction
let nombres1 = [3,15,56,74,4,2,5,996,48,596];
let descnedant = (b,a) => a - b; // si b est supérieur à a, alors a - b retrounera un nb négatif et a sera trier en premier
let trie1 = [...nombres1].sort(descnedant);
console.log(trie1)



/* --- trie avec des fonctions --- */
// ascendant
function tri(numbers, order){
    numbers = new Array;
    asc = (a,b) => a - b;
    order = asc;
    if (numbers === asc);
        console.log([...numbers].sort(order))
}
(tri())// me sort un tableau vide a cause de numbers



function tri2(nbr, order){
    nbr = []; // le paramètre nbr est un tableau vide
    order = (asc=((a,b) => a - b)) || (desc=((b,a) => a - b)); // le paramètre order est la forumul qui permet de trier d'une manière ou d'une autre
    for (i = 1; i < nbr; i++){
        nbr.push(i)
    }; // le compteur d'incrémentation part de 0, tant que le compteur n'a compter toute la liste, il doit ajouter un élément
    trier = ([...nbr].sort(asc)) // la variable asc est égale à la liste plus au trie demander par .sort()
    return trier //on stock ce que la variable asc trouve avec les indications précédante
}
console.log(tri2([3,15,56,74,4,2,5,996,48,596], asc))
// me sort un tableau vide a cause de nbr
