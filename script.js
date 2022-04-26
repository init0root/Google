var colors = [
"#ee6123", 
"#000000", 
"#20a4f3", 
"#502274", 
"#72b01d", 
"#7e57a0", 
"#fec920", 
"#6f1a07", 
"#38135c", 
"#2dc8b6", 
"#3a0ca3", 
"#003049",
"#046dc8",
"#fb5607",
"#9b5de5",
"#f94144",
"#90be6d",
"#7678ed",
"#bfd200",
"#affc41"]

var pdr = "Cada vez que você recarregar essa página, o conteúdo presente nela ira mudar, porquê assim como o meu amor por você, essa página se renova a cada toque que você da nela."
const frases  = [
"A força da paixão que tem dois corações e a nossa história.",
"Existem pessoas que dedicam suas vidas a obter fama, fortuna, reconhecimento. Se eles tivessem você como namorada, perceberiam que tudo isso é pura efemeridade.",
"Eu só quero que você me deixe fazer parte do seu futuro. Quero te fazer a cada dia mais feliz! ",
"Se você quiser, a gente casa ou namora, a gente fica ou enrola, oque eu mais quero é que você me queira!",
" Eu nem sabia que era possível amar alguém tanto assim, até você aparecer em minha vida. É inexplicável e infinito, meu amor. ",
"Tudo oque eu queria agora era roubar teu beijo, ter você de volta, matar meu desejo, que vontade louca, juro, não estou aguentando",
"O desenvolvedor desse site te ama pra car@lho",
"'Guria, eu ainda vou namorar você",
"02/05/2022",
"Se você fosse uma música seria as melhores notas.",
"Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura.",
"Mesmo estando longe um do outro, você me faz muito bem",
"Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.",
"Agora, para tudo pra me ouvir , Tenho duas notícias, uma boa, outra ruim, Qual você quer primeiro?, A que a gente se casa no susto e partiu pro cruzeiro, Ou sumir por um tempo, E pegar uma praia de boa no mês de janeiro",
"Se eu ganhar o mundo sem você estou perdendo",
"Nosso match foi em uma padaria, nossa música? Pão de mel",
"Você é minha luz, estrada, meu caminho",
"Sabe aquele amor que se multiplica, quem nunca sonhou em ter isso na vida? Ser herói de alguém e melhor ainda, ter do lado a mulher maravilha.",
"Talvez você ainda não saiba o quanto, mas eu te amo!",
"Nós estavámos no lugar certo, na hora certa.",
"A vida é uma constante saudade de você!",
"Talvez algumas frases se repitam, perdão, meu algoritmo é falho. Mas sabe oque não tem falhas? Meu amor por você.",
"O que é que você viu em mim?",
"Após tantos desencontros, eu amei encontrar você.",
"Amo acordar com o seu bom dia",
"Amo a sua voz",
"02/05/2022",
"Você tem carta branca no meu coração", 
"Não é querendo apressar as coisas não, mas qual vai ser o nome dos nossos cahorros?",
"E a igrejinha azul, só trocou de padre, nosso corpo envelheceu, mas a alma tem a mesma idade, o amor continua igual ao nosso nome no tronco da árvore",
"Bora fugir?",
"É Jads & Jadson, eu tô sentindo na pele a falta que essa moça faz...",
"O NOSSO SANTO BATEU",
"Leptosplove",
"Amo quando você fala que me ama",
"Fala alguma coisa aleatória no meu WhatsApp",
"O universo conspirou pra gente se encontrar"
]




document.body.style.background = colors[Math.floor(Math.random() * colors.length)]

var phrase = document.querySelector('.mainText');


if(localStorage.getItem('reload') == "true"){
    phrase.innerText = frases[Math.floor(Math.random() * frases.length)]
    typeWrite(phrase, 110)

}else{
    typeWrite(phrase, 120)
}


function typeWrite(e, time) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, time * i);
    });
}



function cas(){
    localStorage.setItem("reload", true)
    window.location.reload()
}
