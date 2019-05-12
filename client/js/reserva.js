//app web
let divContenedorLugares = document.getElementById("divContenedorLugares");

verConsultaLugares();

function verLugares(datos) {

	// Se vacía el div por si hay elementos previos.
	divContenedorLugares.innerHTML = "";
  
	// Se crea variable para guardar el array de datos, se llena con la función de consulta
	pedirDatosLugares(datos, function callback(lugares) {
	  // Se recorre el array de lugares disponibles y para cada uno se crea el elemento en pantalla
	  for (let i = 0; i < lugares.length; i++) {
	
        let divNuevo = document.createElement("div");
        divNuevo.setAttribute("class", "asientos");
        
		var divTexto = document.createTextNode(JSON.stringify(lugares[i].title));
		divNuevo.append(divTexto);

		divNuevo.addEventListener("click", function(){

			verLugaresDisponibles(lugares[i].id, lugares[i].body)
		})
		divContenedorLugares.appendChild(divNuevo);
	  }
	})
  }


function verLugaresDisponibles() {

}


/*

//Función que consulta los lugares disponibles
function consultarLugares(verConsultaLugares) {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {
            
            console.log("Lugar disponible en transporte");
            
            let asientosDisponibles = JSON.parse(request.responseText);
         
            verConsultaLugares(asientosDisponibles);
            console.log(callback);

        }
    }
    
    request.open('GET','../server/lugaresDisponibles.json');
    
    request.send();
    
}

function verConsultaLugares(asientosDisponibles){

    //divContenedorLugares.innerHTML = "";

    let listaLugares = consultarLugares(asientosDisponibles);

    for (let i = 0; i < listaLugares.length; i ++) {
        let divLugares = document.createElement("div");

        divLugares.setAttribute("class", "zz");

        divLugares.appendChild(document.createTextNode(listaLugares[i].lugares));

        divContenedorLugares.appendChild(boton-consulta);

        divContenedorLugares.addEventListener('click', function() {
            verConsultaLugares()
        })
    }

}



/*
//Función para reservar el transporte
function reservaOk(lugaresDisponibles, id){

    if(asientoDisponible > 0 ) {

        let reservaSatisfactoria = true;

        for(let i = 0; i < lugaresDisponibles.length; i++){

            confirmarReserva(lugaresDisponibles[i].dia, lugaresDisponibles[i].id);
        }

    }else{
        return (console.log("No hay lugares disponibles"))
    }

    console.log("Reserve un lugar")
}*/