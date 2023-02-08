/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

	//Guido Varese, TP 3.
	function FahrenheitCentigrados () 
{
	//Declaro las variables.
	var temperatura;
	var numeroIngresado;
	var resultado;
	
	//Les asigno el valor correspondiente.
	numeroIngresado = document.getElementById("txtIdTemperatura").value;

	//Parseo
	numeroIngresado = parseFloat(numeroIngresado);

	//Se realiza la operacion.
	temperatura = (numeroIngresado - 32) * 0.5;

	//Se da el resultado.
	alert( + numeroIngresado + " grados Fahrenheit son " + temperatura + " grados Celcius.");

}

function CentigradosFahrenheit () 
{
	//Declaro las variables.
	var temperatura;
	var numeroIngresado;
	var resultado;
	
	//Les asigno el valor correspondiente.
	numeroIngresado = document.getElementById("txtIdTemperatura").value;

	//Parseo
	numeroIngresado = parseFloat(numeroIngresado);

	//Se realiza la operacion.
	temperatura = (numeroIngresado * 1.8) + 32;

	//Se da el resultado.
	alert( + numeroIngresado + " grados Celcius son " + temperatura + " grados Fahrenheit.");
}
