
	//Guido Varese, Ejercicio 6 If.
	function mostrar()
{
	//Declaramos variable.
	var edad;
	var mensaje;

	//Asignamos un valor.
	edad = document.getElementById("txtIdEdad").value;

	//Parsear.
	edad = parseInt(edad);

	//Asigno al If su tarea correspondiente.
	if (edad > 17) {
		mensaje = "Es mayor de edad."
	} else {
		if (edad < 13) {
			mensaje = "Es un niño."
		}
		else {
			mensaje = "Es adolescente."
		}
		
}
	alert(mensaje);
}
