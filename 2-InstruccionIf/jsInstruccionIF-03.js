
	//Guido Varese, Ejercicio 3 If.
	function mostrar()
{
	//Declaramos variable.
	var edad;


	//Asignamos un valor.
	edad = document.getElementById("txtIdEdad").value;

	//Parsear.
	edad = parseInt(edad);

	//Sentencia If.
	if (edad < 18 ) {
	mensaje = "Es menor de edad"
	alert(mensaje);
	}

	if (edad > 17) {
	mensaje = "Es mayor de edad"
	alert(mensaje);
	}

}