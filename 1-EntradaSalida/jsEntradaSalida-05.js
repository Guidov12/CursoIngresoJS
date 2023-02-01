/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

//Guido Varese, Ejercicio 5

function mostrar()

{	
	//Declaramos las variables.
	var nombreIngresado;
	var edadIngresada;

	//Le damos el valor a las variables.
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//por ultimo se completan las variables agregandole palabras a la oración.

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + "años.")
}

