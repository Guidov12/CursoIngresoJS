/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

//Guido Varese, Ejercicio 6

function sumar()

{
	//declaro las variables.
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Asigno los valores correspondientes.
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	//agrego parseInt para que las variables puedan transformar numeros a enteros.
	primerNumero = parseInt(primerNumeroIngresado);
	segundoNumero = parseInt(segundoNumeroIngresado);

	//Se suman las variables.
	resultado = primerNumero + segundoNumero;

	//Por ultimo se le da el resultado.
	alert("La suma es: " + resultado);

}

