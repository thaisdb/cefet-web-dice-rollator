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
const quantidadeD = [4,6,8,10,12,20];


button.addEventListener('click', compute);

function compute(){
    
    document.getElementById('recipienteResultados').classList.remove('oculto');
    let dices = document.getElementsByClassName('dado');
    let index = 0;
    let html = '';
    for (let dice of dices){
        let sum = 0
        for (let i = 0; i < dice.children[1].value; i++){
            let rand = Math.ceil(Math.random() * quantidadeD[index]);
            sum += rand; 
            if (i < dice.children[1].value - 1){
                html += rand + ' + ';
            } else { 
                html += rand + ' = ' + sum + '<br>';
            }
        }
        index ++;
    }
    document.getElementById('resultado').innerHTML = html;
}

