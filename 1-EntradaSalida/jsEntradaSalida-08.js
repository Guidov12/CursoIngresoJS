/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

	//Guido Varese, Ejercicio 8
	
	function SacarResto()
{
	//Declaro las variables.

	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Les doy el valor correspondiente.
	primerNumeroIngresado = document.getElementById("txtIdNumeroDividendo").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDivisor").value;

	//Agrego parseInt para que las variables puedan convertir los numero en enteros.
	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	//Se realiza la operacion.
	resultado = primerNumero / segundoNumero;
	
	//Por ultimo se da el resultado.
	alert("el resto es " + resultado);	

}
