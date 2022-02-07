/*
Cesar Schroder DIV E
ej3 If
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad<=17)
	{
		alert("usted es menor de edad");
	}

	if(edad>=18)
	{
		alert("usted es mayor de edad");
	}

	alert("usted tiene " + edad + " años");


}//FIN DE LA FUNCIÓN

//txtIdEdad