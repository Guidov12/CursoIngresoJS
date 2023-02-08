
	//Guido Varese, Ejercicio 4 If.
	function mostrar()
{
	
	//Declaramos variable.
	var edad;

	//Asignamos un valor.
	edad = document.getElementById("txtIdEdad").value;

	//Parsear.
	edad = parseInt(edad);

	//Sentencia If.
	if (edad < 18 && edad > 12) {
	alert("El usuario es adolescente");
	}


}