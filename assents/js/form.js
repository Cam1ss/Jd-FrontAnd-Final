const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const feedback = document.getElementById('feedback');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const showPasswordInput = document.getElementById('showPassword');

function validarFormulario(event) {
    event.preventDefault();

    let valid = true;

    if (!usernameInput.value || usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        usernameError.textContent = "Username é um campo obrigatório";
        usernameInput.classList.add('error');
        valid = false;
    } else {
        usernameError.style.display = 'none';
        usernameInput.classList.remove('error');
    }

    if (!emailInput.value || emailInput.value.trim() === '') {
        emailError.style.display = 'block';
        emailError.textContent = "Email é um campo obrigatório";
        emailInput.classList.add('error');
        valid = false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('error');
    }

    if (valid) {
        feedback.style.display = 'block';
        feedback.textContent = "Formulário enviado com sucesso!";
        feedback.classList.add('success');
        form.reset();
    } else {
        feedback.style.display = 'block';
        feedback.textContent = "Formulário inválido!";
        feedback.classList.add('error');
    }
}

function mostrarSenha() {
    console.log('showPasswordInput', showPasswordInput.checked);
    if (showPasswordInput.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function validateSenha() {
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        passwordError.textContent = "Senha deve ter no mínimo 8 caracteres";
        passwordInput.classList.add('error');
    } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('error');
    }
}

form.addEventListener('submit', validarFormulario);
showPasswordInput.addEventListener('change', mostrarSenha);
passwordInput.addEventListener('blur', validateSenha);
