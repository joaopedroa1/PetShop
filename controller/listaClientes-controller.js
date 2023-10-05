import { clienteService } from "../service/clientes-service.js"

const criarNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td class = "td">${email}</td>
        <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    console.log(linhaNovoCliente)
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click',(evento)=>{
    let eBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(eBotaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.excluiCliente(id)
        .then(() =>{
            linhaCliente.remove()
        })
    }
})


clienteService.listaClientes()
.then(data => {
    data.forEach(element => {
        tabela.appendChild(criarNovaLinha(element.nome, element.email, element.id))
    })
})
