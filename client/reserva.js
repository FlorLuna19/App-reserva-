//app web
let divContenedorLugaresDisponibles = document.getElementById("lugaresDisponibles");
consultarLugarDisponible(asientosDisponibles => {
    test(asientosDisponibles);
})

//Función que consulta los lugares disponibles
function consultarLugarDisponible(callback) {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {
            
            console.log("Lugar disponible en transporte");
            
            let asientosDisponibles = JSON.parse(request.responseText);
         
            callback(asientosDisponibles);
            console.log(callback);

        }
    }
    
    request.open('GET','/lugaresDisponibles');
    
    request.send();
    
}

function test(callback){

console.log(callback);
}

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
}