/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    //Guido Varese, TP 2.
    function Rectangulo () 
{
 	var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var totalAlambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno + anchoTerreno) * 2;

    totalAlambre = perimetro * 3;

    alert("Cantidad de alambre necesaria: " + totalAlambre);

}
    function Circulo () 
{
	var radio;
	var alambre;
	var perimetro;
	var pi;

	pi = 3.14;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio)

    perimetro = 2 * pi * radio;

    alambre = perimetro * 3;

    alert("Cantidad de alambre necesaria: " + alambre);
}
    function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
    var area;
	var cemento;
    var cal;

    cemento = 2;
    cal = 3;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    area = largoTerreno * anchoTerreno;

    cemento = area * cemento;
    cal = area * cal;

    alert("Para un contrapiso de " + area + " m2 cuadrados se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal.");
}