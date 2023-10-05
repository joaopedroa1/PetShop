import { clienteService } from "../service/clientes-service.js";
const form = document.querySelector ('[data-formulario]')
form.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const nomeProduto = evento.target.querySelector('[data-nomeProduto]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const desc = evento.target.querySelector('[data-desc]').value
    clienteService.cadastraProdutos(nomeProduto, preco, desc)
})