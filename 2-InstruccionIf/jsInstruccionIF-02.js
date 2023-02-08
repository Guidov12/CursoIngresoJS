
	//Guido Varese, Ejercicio 2 If.
	function mostrar()
{
	//Declaramos variable.
	var edad;

	//Asignamos un valor.
	edad = document.getElementById("txtIdEdad").value;

	//Parsear.
	edad = parseInt(edad);

	//Sentencia If.
	if (edad > 17 ) {
	alert("Es mayor de edad");
}
}