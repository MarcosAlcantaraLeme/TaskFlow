const login = document.querySelector('#formLogin');
const url = 'https://69e80f392f51b534be5fb7f8.mockapi.io/Usuario';

login.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    const response = await fetch(url);
    const dados = await response.json();

    const usuario = dados.find(usuario => usuario.email === email);
    if (usuario ){
        if (usuario.senha === senha){
            alert('Login Realizado com sucesso');

            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

            window.location.href = 'dashboard.html';
        } else {
            alert('Senha Inválida');
        }
    } else {
        alert('Usuario Não cadastrado');
    }
});