/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	//Guido Varese, Ejercicio 7

	//En este ejercicio se realiza la funcion sumar, se copia y pega en las otras funciones y se cambian los signos.

	function sumar()	
{	
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseFloat(primerNumeroIngresado);
	segundoNumero = parseFloat(segundoNumeroIngresado);

	resultado = primerNumero + segundoNumero;

	alert("El resultado de la suma es " + resultado);
}

	
	function restar()
{
	//Declaro las variables.
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	//Capturo los datos de la pagina.
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	//Convierto los datos para poder operar.
	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	//Realizo la operacion.
	resultado = primerNumero - segundoNumero;
	
	//Realizo la operacion.
	alert("el resultado de la resta es " + resultado);	
}

	
	function multiplicar()
{ 
	//Declaro las variables.
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	//Capturo los datos de la pagina.
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	//Convierto los datos para poder operar.
	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	//Realizo la operacion.
	resultado = primerNumero * segundoNumero;
	
	//Realizo la operacion.
	alert("el resultado de la multiplicacion es " + resultado);	
}

	
	function dividir()
{
	//Declaro las variables.
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Capturo los datos de la pagina.
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	//Convierto los datos para poder operar.
	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	//Realizo la operacion.
	resultado = primerNumero / segundoNumero;
	
	//Realizo la operacion.
	alert("el resultado de la division es " + resultado);	
}

