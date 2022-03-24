'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
	document.getElementById('modal').classList.remove('active')
	clearFields()
}




const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (db_client) => localStorage.setItem("db_client", JSON.stringify(db_client))

// CRUD Creat Read Update Delete

const deleteClient = (index) => {
	const db_client = readClient()
	db_client.splice(index, 1)
	setLocalStorage(db_client)
}

const updateClient = (index, client) => {
	const db_client = readClient()
	db_client[index] = client
	setLocalStorage(db_client)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
	const db_client = getLocalStorage()
	db_client.push (client)
	setLocalStorage(db_client)
}

const isValidFields = () => {
	return document.getElementById('form').reportValidity()
}

// Interação com o Layout

const clearFields = () => {
	const fields = document.querySelectorAll('.modal-field')
	fields.forEach(field => field.value = "")
}

const saveClient = () => {
	if (isValidFields()){
		const client = {
			nome: document.getElementById('nome').value,
			raca: document.getElementById('raca').value,
			celular: document.getElementById('celular').value,
			cidade: document.getElementById('cidade').value
		}
		const index = document.getElementById('nome').dataset.index
		if (index == 'new'){
			createClient(client)
			updateTable()
			closeModal()
		}else{
			updateClient(index, client)
			updateTable()
			closeModal() 
		}
		
	}
}

const createRow = (client, index) => {
	const newRow = document.createElement('tr')
	newRow.innerHTML = `	
		<td>${client.nome}</td>
	    <td>${client.raca}</td>
	    <td>${client.celular}</td>
	    <td>${client.cidade}</td>
	    <td>
	       <button type="button" class="button green" id="edit-${index}">Editar</button>
	       <button type="button" class="button red" id="delete-${index}">Excluir</button>
	    </td>

	`
	document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
	const rows = document.querySelectorAll('#tableClient>tbody tr')
	rows.forEach(row => row.parentNode.removeChild(row) )
	
}

const updateTable = () => {
	const db_client = readClient()
	clearTable()
	db_client.forEach(createRow)
}

const fillFields = (client) => {
	document.getElementById('nome').value = client.nome
	document.getElementById('raca').value = client.raca
	document.getElementById('celular').value = client.celular
	document.getElementById('cidade').value = client.cidade
	document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
	const client = readClient()[index]
	client.index = index
	fillFields(client)
	openModal()
}

const editDelete = (event) => {
	if (event.target.type == 'button'){
		const [action, index] = event.target.id.split('-')
		if (action == 'edit'){
			editClient(index)
		}else{
			const client = readClient()[index]
			const response = confirm (`Deseja mesmo excluir o Pet ${client.nome}`)
			if (response){
				deleteClient(index)
				updateTable()
			}
		}
	}
}

updateTable()

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)    

document.getElementById('salvar')
	.addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
	.addEventListener('click', editDelete)