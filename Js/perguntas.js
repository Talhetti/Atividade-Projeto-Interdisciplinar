document.addEventListener('DOMContentLoaded', function() {
    const enviarBotao = document.getElementById('enviarBotao');
    const inputs = document.querySelectorAll('.containerPerguntas input[type="text"]');
    const botaoSim = document.getElementById('meuBotao');
    const botaoNao = document.getElementById('botao2');
    let botaoSelecionado = null;

    botaoSim.addEventListener('click', function() {
        botaoSim.classList.add('selected');
        botaoNao.classList.remove('selected');
        botaoSelecionado = 'sim';
    });

    botaoNao.addEventListener('click', function() {
        botaoNao.classList.add('selected');
        botaoSim.classList.remove('selected');
        botaoSelecionado = 'nao';
    });

    enviarBotao.addEventListener('click', function(event) {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.border = '2px solid red';
                allFilled = false;
            } else {
                input.style.border = '';
            }
        });

        if (!allFilled || !botaoSelecionado) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos e selecione uma opção.');
        } else {
            window.location.href = 'listaTreino.html';
        }
    });
});