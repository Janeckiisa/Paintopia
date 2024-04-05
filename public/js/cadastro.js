let photo = document.getElementById('imgFoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {

    if (file.files.length == 0) {
        return;
    }

    let reader = new FileReader();

    reader.readAsDataURL(file.files[0]);

    reader.onload = () => {
        photo.src = reader.result
    }
});

let email;
let senha;

document.getElementById('cadastroForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    var username = document.getElementById('usuario').value;
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        document.getElementById('senhaError').style.display = 'block';
        return;
    } else {
        document.getElementById('senhaError').style.display = 'none';
    }

    try {
        const data = new URLSearchParams();

        data.append("usuario", usuario);
        data.append("email", email);
        data.append("senha", senha);

        fetch('/cadastro', {
            method: 'POST',
            body: data
        }).then(x => {
            document.getElementById('cadastroForm').submit();
        });


        // Se tudo estiver OK, enviar o formulário
        
    } catch (error) {
        // Exibir mensagem de erro
        document.getElementById('error-message').innerText = error.message;
        document.getElementById('error-message').style.display = 'block';
    }
});