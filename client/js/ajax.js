function pedirDatos(cbRequest) {
    var request = new XMLHttpRequest();

    request.onload = function() {
        var datosLugares = JSON.parse(request.responseText);

        cbRequest(datosLugares);
    }
    request.open('GET', 'server/lugaresDisponibles')
}
