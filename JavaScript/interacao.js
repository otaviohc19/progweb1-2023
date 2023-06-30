// interacao.js
// Selecionar os elementos
let caixa = document.querySelector("#caixa");
let btnClique = document.querySelector("#btnClique");
let btnCliqueImg = document.querySelector("#carregaImg");

let foto = document.querySelector("#foto");
let btnTrocaImg = document.querySelector("#btnTrocaImg")

let txtMsg = document.querySelector("#txtMsg")
let btnEnviar = document.querySelector("#btnEnviar")

// Ações
// listener -> ouvinte (vigia)
// elemento.addEventListener("evento", funcaoDisparada);
// um listener vai vigiar o elemento btnClique
// e toda vez que o evento "click" acontecer
// ele deve chamar a função clicaBtnClique
btnClique.addEventListener("click", clicaBtnClique);
btnCliqueImg.addEventListener("click", clicaCarregaImg);
btnTrocaImg.addEventListener("click", clicaBtnTrocaImg);
btnEnviar.addEventListener("click", clicaBtnEnviar);

// Adicionar conteúdo de um input em uma caixa
function clicaBtnEnviar() {
    let msg = txtMsg.value;
    caixa.innerHTML += msg + "<br />";

    txtMsg.value = "";
}

// Manipular atributos
function clicaBtnTrocaImg() {
    foto.setAttribute('src', 'https://picsum.photos/100/100');
}

// Manipular conteúdo interno e estilo
function clicaBtnClique () {
    // escreva na caixa a mensagem "clicou"
    // Definir (set)
    caixa.innerHTML += "Clicou<br />"
    // Pegar (get)
    console.log(caixa.innerHTML);

    caixa.style.backgroundColor = 'yellow';
}


// Manipular conteúdo interno
function clicaCarregaImg() {
    // ao clicar, carrega a imagem
    // set
    caixa.innerHTML = "<img src='https://picsum.photos/400/200' />"
    // get
    console.log(caixa.innerHTML);


}