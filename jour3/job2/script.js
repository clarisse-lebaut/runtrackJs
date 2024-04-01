// fonction pour mélanger les cartes
$(document).ready(function (){
        $("#mix_cards").click(function (){

    let originalIamgesSources = [
        "../job2/images/arc1.png",
        "../job2/images/arc2.png",
        "../job2/images/arc3.png",
        "../job2/images/arc4.png",
        "../job2/images/arc5.png",
        "../job2/images/arc6.png",
    ];

    let shuffledArrayImagessources = shuffleArray(originalIamgesSources.slice());

    function shuffleArray(array){
        for (var i = array.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temp = array [i];
            array[i] = array [j];
            array[j] = temp;
        }

        return array;
    }

    $("#contenaire2 img").each(function(index){
        $(this).attr('src', shuffledArrayImagessources[index])
    });
});
});


// variable pour définir l'ordre des cartes
let order = [
	{src: "../job2/images/arc1.png", order: 1},
	{src: "../job2/images/arc2.png", order: 2},
	{src: "../job2/images/arc3.png", order: 3},
	{src: "../job2/images/arc4.png", order: 4},
	{src: "../job2/images/arc5.png", order: 5},
 	{src: "../job2/images/arc6.png", order: 6},
];

// fonction pour vérifier l'ordre des cartes
// la verification ne se fait pas dans le bon contenaire
// mais l'odre est bien vérifier
$(document).ready(function (){
    $("#check_cards").click(function (){

		function check_ordre(){
			let imagesDeposes = $("#contenaire1 .img");
			let ordreCorrect = true;
			
			imagesDeposes.each(function(index){
			let ordreAttendu = index + 1;
			let ordreImage = parseInt($(this).attr('data-ordre'));
			
			if (ordreImage !== ordreAttendu) {
				ordreCorrect = false;
				return false;
			}
		});

		if (ordreCorrect){
			alert("Bonne réponse !");
		}
		else {
			alert ("Mauvaise réponse !");
		}
	}
	check_ordre();
	});
});

// fonction qui permet de rafrachir la page pour repositioner les éléments par défaut
$(document).ready(function(){
	$("#reset").click(function() {
		location.reload();
	})
})

// fonction qui permet de rendre les éléments attrapable et deposable
$(function(){
    $(".img").draggable();
    $(".depot").droppable({
        accept : ".img",
        drop: function(event, ui) {
			ui.draggable.appendTo($(this));
			ui.draggable.css({top: 0, left :0});
        }
    })
});
