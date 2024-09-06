document.addEventListener('DOMContentLoaded', function() {
    const botaoLogin = document.getElementById('BotaoLogin');
    const emailInput = document.querySelector('.email input');
    const senhaInput = document.getElementById('senha1');

    botaoLogin.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do botão

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        let valid = true;

        if (email === '') {
            emailInput.style.border = '2px solid red';
            valid = false;
        } else {
            emailInput.style.border = '';
        }

        if (senha === '') {
            senhaInput.style.border = '2px solid red';
            valid = false;
        } else {
            senhaInput.style.border = '';
        }

        if (valid) {
            // Redireciona para a página de lista de treino
            window.location.href = 'listaTreino.html';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});