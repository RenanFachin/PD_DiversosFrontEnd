export const buscarPessoas = async () => fetch("https://jsonplaceholder.typicode.com/users")

export const transformarRespostaEmJson = res => res.json()

export const mostrarPessoasNoConsole = data => console.log(data)