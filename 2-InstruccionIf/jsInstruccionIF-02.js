/*
Cesar Schroder DIV E
ej2 If
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>=18)
	{
		alert("usted es mayor de edad");
	}

	alert("usted tiene " + edad + " años");
	

}//FIN DE LA FUNCIÓN