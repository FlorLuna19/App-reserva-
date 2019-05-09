/*function validarUsuario(user, password){
    if (user == "user" && password == "123"){
        return true;

    }else {
        return false
    }
}

module.exports.validarUsuario = validarUsuario;
*/


function validarUsuario(user, password){
    if (user == "user" && password == "user"){
        return true;

    }if (user == "maria" && password =="maria"){
        return true;
    }
    else {
        return false
    }
}

module.exports.validarUsuario = validarUsuario;