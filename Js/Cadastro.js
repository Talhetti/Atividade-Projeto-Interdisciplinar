document.addEventListener('DOMContentLoaded', function() {
    const enviarBotao = document.getElementById('enviarBotao');
    const inputs = document.querySelectorAll('.containerInput input');

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

        if (!allFilled) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        } else {
            window.location.href = 'perguntas.html';
        }
    });
});