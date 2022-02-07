/*
Cesar Schroder DIV E
ej6 If
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*if(edad > 12 && edad < 17)
	{
		alert("usted es adolescente");
	}

	if(edad>=18)
	{
		alert("usted es mayor de edad");
	}

	if(edad<=12)
	{
		alert("usted es un niño");
	}
	*/

	alert("usted tiene " + edad + " años");
	

	if(edad >= 18)
	{
		alert("usted es mayor de edad")
	}
	else if(edad < 12)
	{
		alert("usted es un niño")
	}
	else
	{
		alert("usted es un adolescente")
	}



}//FIN DE LA FUNCIÓN

//txtIdEdad

