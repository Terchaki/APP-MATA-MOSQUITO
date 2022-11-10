
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var  criaMosquitoTempoDificuldade = 1500

var nivel = window.location.search // propriedade 'search' ao invés de recupera a URL inteira, recupera apenas do '?' a direita do conteúdo.
nivel = nivel.replace('?', '') // propriedade 'replace' faz a troca do '?', no caso foi trocado para vazio.

// comparando com o value.
if (nivel === 'normal') {
	criaMosquitoTempoDificuldade = 1500

} else if ( nivel === 'dificil') {
	criaMosquitoTempoDificuldade = 1000

} else if (nivel === 'chucknorris') {
	criaMosquitoTempoDificuldade = 750

}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight //tamanho da altura em pixels
	largura = window.innerWidth //tamanho da largura em pixels

	console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -=1

	if (tempo < 0) {
		clearInterval(cronometro) // limpando a memória da funcao apos a vitória para a msg não entrar em looping.
		clearInterval(criaMosquito) // limpando a memória da funcao apos a vitória para os mosquitos nao aparecer mais.
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)


// criando posições randomicas
// "Math.floor" faz o arredondamento das casas decimais para baixo.

function posicaoRandomica() {

	//Remover o mosquito anterior caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if( vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" // faz a alteracao da img do caracao de vida p/coracao vazio apos o não clic no mosquito.
		vidas++

		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90 //Math.random produz um númwero que vai de 0 até próximo de 1.
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	// Criar o elemento html de forma programatica

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove() //Operador "this" Faz referencia ao proprio elemento html que executa a funcao.
	}

	document.body.appendChild(mosquito)


}

function TamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) //Math.random produz um número que vai de 0 até próximo de 3.

	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'

	}

}

//criado o lado A e B, definindo para qual lado o mosquito vai olhar.

function LadoAleatorio() {
	var classe = Math.floor(Math.random() * 2) //Math.random produz um númwero que vai de 0 até próximo de 3.

	switch(classe) {
		case 0:
			return 'LadoA'

		case 1:
			return 'LadoB'

	}

}