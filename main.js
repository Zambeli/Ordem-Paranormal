const section = document.querySelector('.elementos')
const botaoSangue = document.querySelector('#sangue')
const botaoEnergia = document.querySelector('#energia')
const botaoMorte = document.querySelector('#morte')
const botaoConhecimento = document.querySelector('#conhecimento')
const botaoMedo = document.querySelector('#medo')

botaoSangue.addEventListener('click', elementoSangue)
botaoEnergia.addEventListener('click', elementoEnergia)
botaoMorte.addEventListener('click', elementoMorte)
botaoConhecimento.addEventListener('click', elementoConhecimento)
botaoMedo.addEventListener('click', elementoMedo)

function elementoSangue () {
    section.style.backgroundImage = "url(./sangue.jpg)";
    section.innerHTML = `
    <div class="imagens">
    <img class="criatura" src="./diabotrono.webp" alt="">
</div>
<div class="texto">
    <h1>Elemento <strong>Sangue</strong></h1>
    <p>O Sangue é a entidade do sentimento. Ele busca a intensidade: dor, obsessão, paixão, amor, fome, ódio - tudo que envolve sentir uma emoção extrema agrada a entidade de Sangue.</p>
    <p>Os sentimentos extremos do Sangue superam a razão e a calmaria do Conhecimento.</p>
    <p>Esse elemento está relacionado a emoções extremas, como dor, obsessão, paixão, amor, fome e ódio. As cores que representam o Sangue são tons de vermelho. O Sangue é efetivo contra o elemento de Conhecimento, porque os sentimentos extremos do Sangue superam a razão e a calmaria do Conhecimento, enquanto o elemento de Morte é efetivo contra o Sangue, pois a distorção temporal da Morte arruína a percepção carnal do Sangue.</p>
    <p>O comportamento da entidade de Sangue parece devorar toda a carne e sangue disponível na Realidade, causando o máximo de dor da maneira mais extrema e intensa possível.</p>
</div>
`
}

function elementoEnergia () {
    section.style.backgroundImage = "url(./fundoanfitriaopf.webp)";
    section.innerHTML = `<div class="imagens">
    <img class="criatura anfitriao" src="./anfitriaoquadro.webp" alt="">
</div>
<div class="texto">
    <h1>Elemento <strong>Energia</strong></h1>
    <p>A Energia é a entidade do caos. Tudo que não pode ser explicado, o intangível, a anarquia. A constante mudança, o calor e o frio, a luz e as trevas. Tudo que envolve a imprevisibilidade e a transformação agrada a entidade de Energia.</p>
    <p>A transformação da Energia sobrecarrega os efeitos da Morte.</p>
    <p>Esse elemento é caracterizado por tudo que não pode ser explicado, o intangível, a anarquia e pela transformação. Uma das manifestações mais marcantes desse elemento é em uma forma etérea fantasmagórica, descrita como uma matéria que está em constante transformação entre os estados sólido, liquido e gasoso que adquire uma aparência de "chama líquida", nas cores que representam a Energia, sendo elas tons de roxo, azul, ciano, verde e rosa. A Energia é efetiva contra o elemento de Morte, porque a transformação da Energia sobrecarrega os efeitos da Morte, enquanto o elemento de Conhecimento é efetivo contra a Energia, pois a razão e lógica do Conhecimento reintegram e suprimem o caos da Energia.</p>
</div>`
}

function elementoMorte () {
    section.style.backgroundImage = "url(./fundomorte2.png)";
    section.innerHTML = `<div class="imagens">
    <img class="criatura morteg" src="./deusdamorte.webp" alt="">
</div>
<div class="texto">
    <h1>Elemento <strong>Morte</strong></h1>
    <p>A Morte é a entidade do tempo. Ela busca os momentos vivenciados, distorcendo a percepção egóica da existência de cada indivíduo para seu próprio agrado.</p>
    <p>A distorção temporal da Morte arruína a percepção carnal do Sangue.</p>
    <p>Esse elemento está relacionado à diversas características como espirais, repetição, Lodo Preto e distorção temporal, além de distorcer a percepção egóica da existência de cada indivíduo. As cores que representam esse elemento são preto e tons de cinza. A Morte é efetiva contra o elemento de Sangue, porque a distorção temporal da Morte arruína a percepção carnal do Sangue, enquanto o elemento de Energia é efetivo contra a Morte, pois a transformação da Energia sobrecarrega os efeitos da Morte.</p>
</div>`
}

function elementoConhecimento () {
    section.style.backgroundImage = "url(./fundoconhecimento.png)";
    section.innerHTML = `<div class="imagens">
    <img class="criatura magistrada" src="./magistrada.webp" alt="">
</div>
<div class="texto">
    <h1>Elemento <strong>Conhecimento</strong></h1>
    <p>O Conhecimento é a entidade da consciência. Descobrir, aprender, conhecer, decifrar. Ter a própria percepção do Outro Lado e suas entidades agrada o elemento de Conhecimento.</p>
    <p>A razão e lógica do Conhecimento reintegram e suprimem o caos da Energia.</p>
    <p>Esse elemento é caracterizado por descobrir, aprender, conhecer e decifrar, além de estar ligado diretamente aos "Sussurros do Conhecimento". As cores que representam esse elemento são branco e tons de amarelo. O Conhecimento é efetivo contra o elemento de Energia, porque a razão e lógica do Conhecimento reintegram e suprimem o caos da Energia, enquanto o elemento de Sangue é efetivo contra o Conhecimento, pois os sentimentos extremos do Sangue superam a razão e a calmaria do Conhecimento.</p>
</div>`
}

function elementoMedo () {
    section.style.backgroundImage = "url(./fundomedo.png)";
    section.innerHTML = `<div class="imagens">
    <img class="criatura medoo" src="./simbolomedooo.png" alt="">
</div>
<div class="texto">
    <h1>Elemento <strong>Medo</strong></h1>
    <p>O Medo é a entidade do desconhecido e do infinito. Presente desde os primórdios da humanidade, modifica a natureza do universo. A sua existência diferenciada é um mistério.</p>
    <p>Apesar disso tudo, acredita-se que a névoa misteriosa encontrada em locais com a Membrana danificada é a manifestação do Medo mais presente dentro da Realidade.</p>
    <p>O Medo é a Entidade do próprio Outro Lado e o elemento mais misterioso. Nada nele pode ser classificado como nos outros elementos. Todas as manifestações paranormais são geradas pelo Medo. A manifestação física do Medo na Realidade é incompreensível e impossível, como se fosse uma chama transparente, distorcendo toda a realidade em sua volta. Os poucos que presenciaram tamanha manifestação, também descreveram ter visto "um vislumbre de Deus", como se o próprio cérebro humano não pudesse processar um evento impossível como este.</p>
</div>`
}

elementoSangue()
