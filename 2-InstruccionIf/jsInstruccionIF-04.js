/*
Cesar Schroder DIV E
ej4 If
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) 
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>=13)
	if(edad<=17)
	{
		alert("usted es adolescente");
	}

	
	
	alert("usted tiene " + edad + " años");


}//FIN DE LA FUNCIÓN

//txtIdEdad