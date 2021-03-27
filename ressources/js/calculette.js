// publicité
setTimeout(function() {
	var pub = document.getElementById('closePop');
	pub.click();

}, 5000);

//affichage à l'écran 

$(function(){

	let zero = document.querySelector('#zero');
	let zero2 = zero;

	$("#zero").on('click',function(){

        $( "#ecran" ).append(zero2);
    });


});