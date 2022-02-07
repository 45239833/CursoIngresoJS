/*
Cesar Schroder DIV E
ej5 If
Al ingresar una edad solo debemos informar si la persona NO es adolescente. 
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13 || edad >17)
	{
		alert("usted no es adolescente");
	}

	alert("usted tiene " + edad + " años");

	
}//FIN DE LA FUNCIÓN

//txtIdEdad