function carregar(){
    var msg = document.querySelector('div#msg')
    var imagem = document.querySelector('img#imagem')
    //var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        imagem.src = "imagens/manha.png"
        document.body.style.background =  'rgb(255, 201, 22)'
    }
    else if (hora >= 12 && hora < 18) {
        imagem.src = "imagens/tarde.png"
        document.body.style.background =  'rgb(0, 245, 253)'
    }
    else {
        imagem.src = "imagens/noite.png"
        document.body.style.background = 'rgb(109, 54, 2)'
    }
}
