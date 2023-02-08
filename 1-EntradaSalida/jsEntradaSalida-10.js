/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Guido Varese, Ejercicio 10.
	function mostrarAumento()
{
	//Declaro las variables.
	var importe;
	var descuento;
	var porcentaje;
	var resultado;

	porcentaje = 25;

	//Tomo el dato correspondiente.
	importe = document.getElementById("txtIdImporte").value;

	//Parseo.
	importe = parseFloat(importe);

	//Realizo la operacion.
	descuento = importe * porcentaje / 100;
	resultado = importe - descuento;

	//muestro el resultado por .value.
	document.getElementById("txtIdResultado").value = resultado;

}

//Ejercicio 10 Bis.

//Declaro las variables.
	var importe;
	var descuento;
	var porcentaje;
	var resultado;

	porcentaje = 25;

	//Tomo el dato correspondiente.
	importe = prompt("Ingrese el importe")

	//Parseo.
	importe = parseFloat(importe);

	//Realizo la operacion.
	descuento = importe * porcentaje / 100;
	resultado = importe - descuento;

	//muestro el resultado por .value.
	document.getElementById("txtIdResultado").value = resultado;
