// Realizar um código para que seja perguntado ao usuário, via prompt, o nome ou código de um alimento. 
//Após o código informado, identificar o preço deste alimento via switch e mostrá-lo ao usuário.
// Exemplo: morango ou ‘Morango’ como input e a saída mostrar R$ 5,99.

//A execução do algoritmo deve ser contínua e o número 0 ou ‘sair’ é a flag para parar a execução.

const inputProduto = document.getElementById('produto')

const respostah4 = document.getElementById('resposta')

function consultarPreco() {
    // transformar para minusculo e remover acentos.
    const produto = inputProduto.value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const resposta = precos(produto)
    respostah4.innerText = resposta
}

function precos(produto) {
    switch (produto) {
        case 'morango':
        case '1':
            return 'R$ 5,99'

        case 'laranja':
        case '2':
            return 'R$ 7,99'

        case 'sair':
        case '0':
            return 'Programa encerrado'

        default:
            return 'Produto não cadastrado.'
    }
}

// console.log('main.js')
// Execução contínua só via JS
// let continua = true;
// while (continua) {
//     const input = prompt('Digite nome ou código do produto. Digite 0 ou sair para encerrar')
//     switch (input.toLocaleLowerCase()) {
//         case 'morango':
//         case '1':
//             alert('R$ 5,99')
//             break;
//         case 'laranja':
//         case '2':
//             alert('7,99')
//             break;

//         case 'sair':
//         case '0':
//             alert('Programa encerrado')
//             continua = false
//             break;

//         default:
//             alert('Produto não cadastrado.')
//             break;
//     }
// }