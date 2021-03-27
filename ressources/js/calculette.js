// publicité
setTimeout(function() {
	var pub = document.getElementById('closePop');
	pub.click();

}, 5000);

//affichage à l'écran 

$(function(){

	let boutton0  = document.createElement('button');
    boutton0.innerHTML = "<img src='img/number/0.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px; margin:0px'>";

	$("#zero").on('click',function(){

        $( "#ecran" ).append(boutton0);
    });

	let boutton1  = document.createElement('button');
    boutton1.innerHTML = "<img src='img/number/1.png' class='img img-responsive' style='max-width: 100%; width:100px; height:100px;'>";

	$("#un").on('click',function(){

        $( "#ecran" ).append(boutton1);
    });





});