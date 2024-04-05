let username;
let password;

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    username = document.getElementById('inputname').value;
    password = document.getElementById('inputpassword').value;

    try {
        const data = new URLSearchParams();

        data.append("inputname", username);
        data.append("inputpassword", password);

        fetch('/login', {
            method: 'POST',
            body: data
        }).then(x => {
            document.getElementById('loginForm').submit();
        });


        // Se tudo estiver OK, enviar o formulário
        
    } catch (error) {
        // Exibir mensagem de erro
        document.getElementById('error-message').innerText = error.message;
        document.getElementById('error-message').style.display = 'block';
    }
});