function calcularMedia(notas){
    let soma = 0;
    for (c = 0; c < notas.length; c++){
        soma += notas[c];
        console.log(soma);
    }

    media = soma / notas.length
    return media;
}
let media ;
function aprovacao(notas){
    let media = calcularMedia(notas);
    let condicao = media > 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + " Resultado: " + condicao;
}

//funções recursivas 
function contagemRegresiva(numero){
    console.log(numero);

    return numero == 0 ? console.log(numero) : contagemRegresiva(numero - 1);
}
// contagemRegresiva(50);



document.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let formulario = document.getElementById('form01');
    let dados = new FormData(formulario);

    let objeto = {};
    let notas = [];
    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);
        notas.push(parseInt(dados.get(key)));
    }
    console.log(notas);
    console.log(objeto);
    texto = aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto;
});