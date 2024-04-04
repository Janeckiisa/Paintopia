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


//verificar se a senha é igual nos campos de 'senha' e 'confirme sua senha'
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;
    if (senha !== confirmaSenha) {
        document.getElementById('senhaError').style.display = 'block';
        event.preventDefault();
    } else {
        document.getElementById('senhaError').style.display = 'none';
    }
});

//verificar se usuário e email ja pertencem a uma conta 
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/verificar-usuario-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.userExists || response.emailExists) {
                    document.getElementById('error-message').innerText = 'Usuário ou email já existem.';
                    document.getElementById('error-message').style.display = 'block';
                } else {

                    document.getElementById('cadastroForm').submit();
                }
            } else {
                // Exibe uma mensagem de erro em caso de erro na solicitação
                document.getElementById('error-message').innerText = 'Erro ao verificar usuário e email.';
                document.getElementById('error-message').style.display = 'block';
            }
        }
    };
    // Envie dados JSON para o servidor
    xhr.send(JSON.stringify({ username: username, email: email }));
});