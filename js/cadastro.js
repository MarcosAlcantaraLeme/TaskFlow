const cadastro = document.querySelector('#formCadastro');
const url = 'https://69e80f392f51b534be5fb7f8.mockapi.io/Usuario';

cadastro.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
        dataNascimento: document.querySelector('#dataNascimento').value
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error('Falha ao cadastrar usuário');
        }

        const data = await response.json();

        console.log('Usuário cadastrado:', data);
        alert('Conta criada com sucesso!');
        cadastro.reset();

    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar usuário.');
    }
});