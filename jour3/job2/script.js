// trouver la fonction pour mélanger les images
    // math random ?

// les affilier au bouton "mélanger"
    
    //(document).ready(function() {
    //$('#changeImage').click(function() {

// pouvoir selectionner les images avec drag and drop

    //récupérer la librairie JQuerry UI

// IL FAUT 2 CONTENEURS 
// --- une pour pouvoir mettre les images <div id=contenaire2>
// --- une dans laquelle on récupère les images pour les placer dans le contenaire supérieur <div id=contenaire1>

// conditions de réussites
// -- faux = Vous avez perdu
// les deux doivent prendre les bons emplacements dans le contenaire 1, si toutes les images sont à la bonne place, alors on est bon
// -- vrai = Vous avez gagné



// trouver la fonction pour mélanger les images
    // math random
// les affilier au bouton "mélanger"

// pouvoir selectionner les images avec drag and drop

// IL FAUT 2 CONTENEURS 
// --- une pour pouvoir mettre les images
// --- une dans laquelle on récupère les images pour les placer dans le contenaire supérieur

// conditions de réussites
// -- faux = Vous avez perdu
// -- vrai = Vous avez gagné

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

/* ------------ changer une image en cliquant dessus !!!!
$('#arc1').on({
'click': function() {
var src = ($(this).attr('src') === '../job2/images/arc1.png')
? '../job2/images/arc2.png'
: '../job2/images/arc1.png';
$(this).attr('src', src);
}
});
*/

/*
$('button').click(function() {
	shuffleElements( $('li') );
});

function shuffleElements($elements) {
	var i, index1, index2, temp_val;

	var count = $elements.length;
	var $parent = $elements.parent();
	var shuffled_array = [];


	// populate array of indexes
	for (i = 0; i < count; i++) {
		shuffled_array.push(i);
	}

	// shuffle indexes
	for (i = 0; i < count; i++) {
		index1 = (Math.random() * count) | 0;
		index2 = (Math.random() * count) | 0;

		temp_val = shuffled_array[index1];
		shuffled_array[index1] = shuffled_array[index2];
		shuffled_array[index2] = temp_val;
	}

	// apply random order to elements
	$elements.detach();
	for (i = 0; i < count; i++) {
		$parent.append( $elements.eq(shuffled_array[i]) );
	}
}
*/


