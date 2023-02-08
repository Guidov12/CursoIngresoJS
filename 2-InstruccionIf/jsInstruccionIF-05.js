
	//Guido Varese, Ejercicio 5 If.
	function mostrar()
{
	//Declaramos variable.
	var edad;
	var mensaje;

	//Asignamos un valor.
	edad = document.getElementById("txtIdEdad").value;

	//Parsear.
	edad = parseInt(edad);

	//Sentencia If.
	if (edad < 13 || edad > 17) {
		mensaje = "No es adolescente"

		alert(mensaje);
	}
	if (!(edad < 13 || edad > 17)) {
		mensaje = "es adolescente"
	}
	
}