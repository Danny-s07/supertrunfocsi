var cartaGill = {
    nome: "Gill Grisson",
    imagem: "https://i.pinimg.com/originals/f7/53/f4/f753f4ee4ca1df9d36aa15f83570375b.jpg",
    atributos: {
        nivel:  3,
        peso:  87,
        temporada: 16
    }
}

var cartaSara = {
    nome: "Sara Sidle",
    imagem: "https://i.pinimg.com/originals/1c/db/d5/1cdbd5d52ffbc389b295dd91f5af4210.jpg",
    atributos: {
        nivel: 3,
        peso:  60,
        temporada: 16
    }
}

var cartaWarrick = {
    nome: "Warrick Brown",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/59/Warrick_Brown.jpg",
    atributos: {
        nivel:  3,
        peso:  82,
        temporada:  9
    }
}

var cartaCathe = {
    nome: "Catherine Willows",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/PDVDCatherineWillows.jpg/220px-PDVDCatherineWillows.jpg",
    atributos: {
        nivel:   3,
        peso:   55,
        temporada:  14
    }
}

var cartaNick = {
    nome: "Nick Stocks",
    imagem: "https://i.pinimg.com/originals/2b/89/9b/2b899bb29d3210b3ad742210e7484e44.jpg",
    atributos: {
        nivel:  3,
        peso:   77,
        temporada:  15
    }
}

var cartaBrass = {
    nome: "Jim Brass",
    imagem: "https://i.pinimg.com/originals/2e/6e/aa/2e6eaa2040f7938132b554d1ee8eb9f9.jpg",
    atributos: {
        nivel:  3,
        peso:  82,
        temporada: 15
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaGill, cartaSara, cartaWarrick, cartaCathe, cartaNick, cartaBrass]
   

var pontosJogador = 0
var pontosMaquina = 0 

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de Cartas no Jogo: "  + cartas.length 
  divQuantidadeCartas.innerHTML = html
}


function atualizaPlacar(){
  var divPlacar = document.getElementById("placar")
   var html = "Jogador" + pontosJogador  +  "/"  + pontosMaquina  +     "Maquina"
   divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina] 
   cartas.splice(numeroCartaMaquina, 1)
  

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
   
    cartaJogador = cartas[numeroCartaJogador]
   cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    //var moldura = '<img src="">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML =  nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    } 
  
   if(cartas.length == 0){
     
     alert("Fim de Jogo")
     if(pontosJogador > pontosMaquina){
       htmlResultado = '<p class="resultado-final">Venceu</p>'
     }else if (pontosMaquina > pontosJogador){
       htmlResultado = '<p class="resultado-final">Perdeu</p>' 
      }else{
       htmlResultado = '<p class="resultado-final">Empatou</p>'
     }
   }else{
     document.getElementById("btnProximaRodada").disabled = false
     
   }

    divResultado.innerHTML = htmlResultado
   document.getElementById("btnJogar").disabled= true
   
       
     atualizaPlacar()
    exibeCartaMaquina() 
   atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    /*var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';*/
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = nome + html + opcoesTexto + '</div>'
}  

function proximaRodada(){
  var divCartas = document.getElementById("cartas") 
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta  esquema1"></div> <div id="carta-maquina" class="carta esquema1"></div>` 
  
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled= true
  document.getElementById("btnProximaRodada").disabled = true 
  
  var divResultado = document.getElementById("resultado") 
  
  divResultado.innerHTML = ""
}