function validarUsuario(user, password){
    if (user == "user" && password == "123"){
        return true;

    }else {
        return false
    }
}

module.exports.validarUsuario = validarUsuario;

//////

function validarUsuario(user, password){
    if (user == "user" && password == "123"){
        return true;

    }if (user == "user2" && password =="456"){
        return true;
    }
    else {
        return false
    }
}

module.exports.validarUsuario = validarUsuario;