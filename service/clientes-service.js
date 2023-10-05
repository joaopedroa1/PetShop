const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta =>{
        return resposta.json()
    })
}

const criarClientes= (nome,email)=>{
return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        nome: nome,
        email: email
    })
})
    .then(resposta =>{
        return resposta.json()
    })
}

const excluiCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
    method: 'DELETE'
    })
}

const detalhaCliente = (id)=>{  
    return fetch(`http://localhost:3000/profile/${id}`)
    .then (resposta =>{
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
    method: 'PUT',
    headers:{
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        nome: nome,
        email: email
    })
    })
    .then(resposta => {
        return resposta.json()
    })
}

const cadastraProdutos = (nomeProduto, preco, desc) =>{
    return fetch(`http://localhost:3000/produto`,{
    method :'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        nomeProduto: nomeProduto,
        preco: preco,
        desc: desc
    })   
})
    .then (resposta =>{
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes, criarClientes, excluiCliente, detalhaCliente, atualizaCliente, cadastraProdutos
}


