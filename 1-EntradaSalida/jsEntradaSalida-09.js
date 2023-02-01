/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var primerNumeroIngresado
	var segundoNumeroIngresado
	var primerNumero
	var segundoNumero
	var resultado

	primerNumeroIngresado = document.getElementById("txtIdSueldo").value;
	segundoNumeroIngresado = document.getElementById("txtIdResultado").value;

	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	resultado = primerNumero  segundoNumero;

	alert("El resultado del importe es " + resultado)
}
