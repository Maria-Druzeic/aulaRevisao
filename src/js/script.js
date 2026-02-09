//criar um array vazio para armazenar as tarefas 
let tarefas = [];
//console.log(typeof tarefas)

//criar função que verifica se o campo de texto esta vazio 
function validarCampo(input){
return input.value.trim() === "";
// trim remove espaços 
}

//Função que vai adicionar a tarefa no array

function adicionarTarefa(){
    //busca o elemento de input pelo id e guarda na variavel
    const tarefa= document.getElementById("task")

    //chama a função validarCampos passando o elemento capturado
    if(validarCampo(tarefa)){
        alert("Campo não pode estar vazio")
    }else{
        tarefas.push(tarefa.value.trim());
        console.log(tarefa)
    }

    // chamando a função listar tarefas
    listarTarefas();


}

//função listar tarefas
function listarTarefas(){
    // buscando o id com a lista usando DOM 9document object Model)
    const listarElemento= document.getElementById("lista")
    // Transforma o array em uma string
    listarElemento.innerHTML= tarefas

    .map((tarefa,index)=>`<li>${tarefas} <button onclick="removerItem(${index})">X</button></li>`)
    //junta todos os itens do map em uma unica string sem virgulas entre elas 
    .join('');
}
// função remover tarefa
function removerItem(index){
    //splice remove 1 elemento a partir da posição informada
    tarefas.splice(index,1)
    // atualiza a lista de tarefas
    listarTarefas();


}