document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Validação simples
    if (email === '' || password === '') {
        messageDiv.textContent = 'Por favor, preencha todos os campos.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = `Bem-vindo, ${email}! Você está logado.`;
        messageDiv.style.color = 'green';
        // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário
    }
});