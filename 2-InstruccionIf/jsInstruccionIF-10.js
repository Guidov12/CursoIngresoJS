

	//Guido Varese, Ejercicio 10 If.
	function mostrar()
{
	//Declaro variables.
	var notaDelExamen;
	var mensaje;

	//Pongo math. para generar un numero aleatorio.
	notaDelExamen = Math.floor(Math.random() * 11);

	//Le asigno al if la tarea correspondiente.
	if (notaDelExamen > 8) {
		mensaje = "EXCELENTE"
	} else {
		if (notaDelExamen > 3 && notaDelExamen < 9) {
			mensaje = "APROBÓ"
		} else
		if (notaDelExamen < 4) {
			mensaje = "Vamos, la proxima se puede"
		}

		
		alert(notaDelExamen + " " + mensaje);
	}

	


}