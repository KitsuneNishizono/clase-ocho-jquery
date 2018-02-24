$(document).ready(function(){
	console.log("Estoy listo");
	$("#my_button").on("click", function(){
		alert("me dieron click con jquery");
	})
});
//igual a object.addEventListener("event_name", function(){
//}); se dispara cuando terminó de leerse el documento. Todo menos videos.
$(window).on("load",function(){
	console.log("Ya me cargué");
})
//este evento se dispara cuando termino de cargarse la página.