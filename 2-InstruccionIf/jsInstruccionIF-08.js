

	//Guido Varese, Ejercicio 8 If.
	function mostrar()
{
	//Declaro variables.
	var edadIngresada;
	var estadoCivil;
	var mensaje;

	//Capturo los datos de la pagina.
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo.
	edadIngresada = parseInt(edadIngresada);

	//Asigno al If su tarea correspondiente.
	if (edadIngresada > 17 && estadoCivil == "Soltero") {
		mensaje = "Es Soltero y no es menor"
		alert(mensaje);
	}


}