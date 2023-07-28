
var tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

var lista = document.getElementById('lista');
var tarefa = document.getElementById('tarefa');

lista.setAttribute('class', 'list-group');
//Programando o evento quando a arvore DOM for carregada
document.addEventListener('DOMContentLoaded', function (e) {
    var btnAddTask = document.getElementById('btn-add-task');
    btnAddTask.addEventListener('click', (ev) => addTask(tarefa.value));

    var btnRemoveTask = document.getElementById('btn-remove-task');
    btnRemoveTask.addEventListener('click', (ev) => removeTask(tarefa.value));

    loadToList();

});

//adiciona tarefa na lista
function addTask(task) {
    tarefas.push(task);

    loadToList();

}

//remover uma tarefa da lista
function removeTask(task) {

    //verifica se o  elemento existe no vetor 
    if (tarefas.indexOf(task) >= 0) {
        
        //se existir, então...
        let indice = tarefas.indexOf(task);
        
        //elimine o elemento do vetor
        tarefas.splice(indice, 1);

        loadToList();
    }
}

//Carrega os elementos do vetor para a lista criada.
function loadToList() {

    //Número do item..
    let itemNum = 0;

    //esvalzia a lista
    lista.innerHTML = "";

    //obtem o tamanho do vetor - ser for maior que zero
    //então adicionar a o vetor na lista.
    if (tarefas.length > 0) {

        tarefas.forEach(el => {

            //cria um elemento option na caixa de listagem
            let opt = document.createElement('div');

            let label = document.createElement('label');
            label.setAttribute('class', 'p-2');
            label.textContent = el;

            var checkbox = document.createElement('input');

            //atribuindo o tipo dinamicamente.
            checkbox.setAttribute('checked', false);
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('value', 'feito');

            //atribui o valor do textNode ao atributo value 
            checkbox.setAttribute("value", el);
            checkbox.setAttribute("checked", false);

            opt.appendChild(checkbox);
            opt.appendChild(label);

            opt.setAttribute('class', 'list-group-item p-2 m-1');

            //adiciona a opção criada como filho da lista
            lista.appendChild(opt);

            //limpa a entrada da campo tarefa.
            tarefa.value = "";

            
            if (itemNum % 2 === 0) {
                opt.classList.add('.opt-over')
                opt.classList.remove('.opt-out');
            } else {
                opt.classList.remove('.opt-over')
                opt.classList.add('.opt-out');
            }

            //adiciona um evento para quando o botão do mouse for liberado 
            //quando o item da lista for selecionado mostrar o valor atual da lista
            //ser exibido no campo tarefa
            opt.addEventListener("mouseup", function (e) {
                e.preventDefault();
                tarefa.value = opt.textContent;
            }, false);

            itemNum++;
        });
    }
}