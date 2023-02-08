/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	
	//Guido Varese, TP 1.
	function Sumar () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var resultado;

	primerPrecioIngresado = document.getElementById("txtIdPrecioUno").value;
	segundoPrecioIngresado = document.getElementById("txtIdPrecioDos").value;
	tercerPrecioIngresado = document.getElementById("txtIdPrecioTres").value;

	primerPrecioIngresado = parseFloat(primerPrecioIngresado);
	segundoPrecioIngresado = parseFloat(segundoPrecioIngresado);
	tercerPrecioIngresado = parseFloat(tercerPrecioIngresado);

	resultado = primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado;

	alert("El resultado de la suma es " + resultado);
}

	function Promedio () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var resultado;

	primerPrecioIngresado = document.getElementById("txtIdPrecioUno").value;
	segundoPrecioIngresado = document.getElementById("txtIdPrecioDos").value;
	tercerPrecioIngresado = document.getElementById("txtIdPrecioTres").value;

	primerPrecioIngresado = parseFloat(primerPrecioIngresado);
	segundoPrecioIngresado = parseFloat(segundoPrecioIngresado);
	tercerPrecioIngresado = parseFloat(tercerPrecioIngresado);

	resultado = (primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado) /3;

	alert("El resultado del promedio es " + resultado);
}

	function PrecioFinal () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var resultado;

	primerPrecioIngresado = document.getElementById("txtIdPrecioUno").value;
	segundoPrecioIngresado = document.getElementById("txtIdPrecioDos").value;
	tercerPrecioIngresado = document.getElementById("txtIdPrecioTres").value;

	primerPrecioIngresado = parseFloat(primerPrecioIngresado);
	segundoPrecioIngresado = parseFloat(segundoPrecioIngresado);
	tercerPrecioIngresado = parseFloat(tercerPrecioIngresado);

	resultado = (primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado) * 1.21;

	alert("El resultado del precio es " + resultado);
}