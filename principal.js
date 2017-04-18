// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

let button = document.getElementById('rolar');
let dices = document.getElementsByClassName('dado');
let result = document.getElementById('recipienteResultados');
let quantidadeD = [4,6,8,10,12,20];

button.addEventListener('click', compute);

function compute(){
    
    if (result.classList.contains('oculto')){
        result.classList.remove('oculto');
    }
    let index = 0;
    for (let dice of dices){
        let finalNumber = 0
        let html = ''
        for (let i = 0; i < dice.children[1].value; i++){
            let rand = Math.ceil(Math.random() * quantidadeD[index]);
            finalNumber += rand; 
            if (i < dice.children[1].value - 1){
                html += rand + ' + ';
            } else { 
                html +=  rand + ' = ' + finalNumber + '<br>';
            }
            result.innerHTML += html;
        }
        index ++;
    }
}

