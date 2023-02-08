/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Guido Varese, Ejercicio 9.
	function mostrarAumento()
{
	//Declaro las variables.
	var importe;
	var aumento;
	var resultado;

	aumento = 1.10

	//Tomo el dato correspondiente.
	importe = document.getElementById("txtIdSueldo").value;

	//Parseo.
	importe = parseFloat(importe);

	//Realizo la operacion.
	resultado = importe * aumento;

	//Muestro el resultado por .value.
	document.getElementById("txtIdResultado").value = resultado;
}

//Guido Varese, Ejercicio 9 Bis.

//Declaro las variables.
	var importe;
	var aumento;
	var resultado;

	aumento = 1.10

	//Tomo el dato correspondiente.
	importe = Prompt("Ingrese el sueldo")
	//Parseo.
	importe = parseFloat(importe);

	//Realizo la operacion.
	resultado = importe * aumento;

	//Muestro el resultado por .value.
	document.getElementById("txtIdResultado").value = resultado;