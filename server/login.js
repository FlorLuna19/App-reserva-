function validarUsuario(user, password){
    if (user == "user" && password == "123"){
        return true;

    }else {
        return false
    }
}

module.exports.validarUsuario = validarUsuario;