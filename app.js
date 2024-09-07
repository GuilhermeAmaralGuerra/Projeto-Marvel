// Pega o ID de uma Section
let filme = document.getElementById("filmes");

// Variavel de concatenação
let filmes = "";

// Pegar os dados de dados.js
for(dado of dadosFilmes){
    filmes += `
        <div class="item-filmes">
            <div class="texto-filmes">
                <h2>${dado.titulo}</h2>
                <p>${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
            <img src="${dado.imagem}" alt="Homem de Ferro">
        </div>
    `
}

// imprimir o resultado 
filme.innerHTML = filmes;

// a função pesquisa() é ativada apertando enter
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        document.getElementById("botaoPesquisa").click();
    }
})

//função para pesquisar um filme ou fase
function pesquisa() {
    let nomeFilme = document.getElementById("pesquisar").value.toLowerCase();
    let resultadoPesquisa = "";
    let encontrado = false;

    //verifica se o campo de pesquisa está vazio
    if (nomeFilme.trim() == "") {
        resultadoPesquisa = "<p>Nada inserido no campo de busca!</p>";
        encontrado = true;

    } else {
        //imprime o resultado de pesquisa
        for (let dado of dadosFilmes) {
            if (dado.titulo.toLowerCase().includes(nomeFilme) || dado.fase.toLowerCase().includes(nomeFilme)) {
                resultadoPesquisa += `
                    <div class="item-filmes">
                        <div class="texto-filmes">
                            <h2>${dado.titulo}</h2>
                            <p>${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Saiba mais</a>
                        </div>
                        <img src="${dado.imagem}" alt="${dado.titulo}">
                    </div>
                `;
                encontrado = true;
            } 
        }
    }

    // imprime na tela caso o filme não esteja nos dados.js
    if(encontrado == false){
        resultadoPesquisa  = "<p>Filme não encontrado.</p>";
    }

    document.getElementById("resultado").innerHTML = resultadoPesquisa;
}

let heroi = document.getElementById("conjuntoHeroi");
let conjuntoHeroi = "";

// imprime os herois
for(dado of dadosHerois){
    conjuntoHeroi += `
        <div class="personagem" id="personagem">
            <h3>${dado.apelido}</h3>
            <h3>${dado.nome}</h3>
            <p class= "descricaoHeroi" >${dado.descricao}</p>
        </div>
    `
}

heroi.innerHTML = conjuntoHeroi;

