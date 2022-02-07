/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita"
*/

function mostrar()
{
	//declaro variables
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad==15)
	{
		alert("niña bonita");
	}

	alert("usted tiene " + edad + " años");


}//FIN DE LA FUNCIÓN

//txtIdEdad

