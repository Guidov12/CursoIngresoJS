/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

//Guido Varese, Ejercicio 4

function mostrar()

{
	//Declaramos la variable.
	var nombreIngresado;

	//Asignamos un valor a la variable.
	nombreIngresado = prompt("Ingrese su nombre");

	//Se muestra el valor.
	document.getElementById("txtIdNombre").value = nombreIngresado;
	
}

