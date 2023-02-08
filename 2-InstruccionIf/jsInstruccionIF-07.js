
	
	//Guido Varese, Ejercicio 7 If.
	function mostrar()
{
	//Declaro Variables.
	var edadIngresada;
	var estadoCivil;
	var mensaje;

	//Capturo los datos de la pagina.
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo.
	parseInt = (edadIngresada);

	//Asigno al If su tarea correspondiente.
	if (edadIngresada < 18 && estadoCivil !== "Soltero") {
		mensaje = "Es muy pequeño para no ser soltero"
		alert(mensaje);
	}	



}