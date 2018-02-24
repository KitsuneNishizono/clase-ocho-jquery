/*hay una propieded css. ej:
$("#my_button").css("width","value");
*/
$(document).ready(function(){
	console.log("Estoy listo");
	$("#color").on("keyup", function(){
		$("#my_box").css("backgroundColor", $("#color").val());
	});
	$("#Altura").on("keyup",function() {
		$("#my_box").css("height", $("#Altura").val());
	});
	$("#Ancho").on("keyup",function(){
		$("#my_box").css("width", $("#Ancho").val());	
	});
});