

function verificarSenha(){
    
}

function verificarCamposVazios() {
    var inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
    var erro = false;
    var mensagemErro = "";

    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            erro = true;
            mensagemErro += "O campo " + input.placeholder + " está vazio. Por favor, preencha-o.\n";
        }
    });

    if (erro) {
        alert(mensagemErro);
        return false; // Impede a ação do botão
    } else {
        // Redireciona para outra página se todos os campos estiverem preenchidos
        window.location.href = "perguntas.html";
        return true; // Permite a ação do botão
    }
}   