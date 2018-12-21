//CHAT
(function() {

	$('#livechat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#livechat').fadeOut(300);
		document.getElementById("myModal").style.display = "block";

		setTimeout(function(){ 
			document.getElementById("immagine1").style.display = "block";
		}, 2000);

	});

}) ();

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			 'scrollTop': $target.offset().top
		}, 900, 'swing');
		});
});

//APPARIZIONE AVATAR AL PRIMO SCROLL
window.onscroll = function scrollFunction() {
	if(document.getElementById("immagine"))
		document.getElementById("myModal").style.display =
			(document.documentElement.scrollTop > 120) ?
				"block" :
				"none";
				
}

// ALLA PARTENZA DEL SITO LA CHAR RIMANE OSCURATA
$(document).ready(function() {
	//modal.style.display = "block";
	livechat.style.display = "none";
	immagine1.style.display = "none";
	
});

// SE CLICCHI SULL'AVATR SPARICE E SI APRE LA CHAT
document.getElementById("immagine").onclick = function(e){
	document.getElementById("immagine").style.display = "none";
	document.getElementById("myModal").style.display = "none";
	livechat.style.display = "block";
}
document.getElementById("immagine1").onclick = function(e){
	livechat.style.display = "block";
	document.getElementById("immagine1").style.display = "none";
}
function scrollDown(){
	$("#message_list").animate({scrollTop:$(document).height()}, "fast");
}

/*
button.onclick = function(){
	content = document.getElementById("message_list");

	function set() {
		content.style.top = String(content.clientHeight - content.clientHeight) + "px";
	}

	window.onload = set;
	window.onresize = set;

	set();
}
button.onclick = function(e){
	var mexList = document.getElementById("message_list");
	var isScrolledToBottom = mexList.scrollHeight - mexList.clientHeight <= mexList.scrollTop +1;
	if(isScrolledToBottom){
		setTimeout(out.scrollTop = out.scrollHeight - out.clientHeight, 4000);
	}
}*/
onElementHeightChange(document.getElementById("message_list"), function(){
    alert('Body height changed');
});

var button = document.getElementById("bottone");
button.onclick = function(e){
	setTimeout(function(){

		scrollDown()

	}, 1500);
}

