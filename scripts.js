let resposta = document.getElementById("resposta")

function acao1(){
    resposta.innerHTML += `<p>Você clicou no primeiro botão`
}
function acao2(){
    resposta.innerHTML += `<p>Você clicou no segundo botão`
}
function acao3(){
    resposta.innerHTML += `<p>Você clicou no terceiro botão`
}
function acao4(){
    resposta.innerHTML += `<p>Você clicou no quarto botão`
}
function apagarRespostas() {
    resposta.innerHTML = "";
}