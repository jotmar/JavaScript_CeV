function MostrarFoto(){
    var year = new Date()
    year = year.getFullYear()
    var nasc = document.querySelector("input#nasc")
    var res = document.querySelector("div#res")
    
    if (nasc.value.length == 0 || nasc.value > year){
        window.alert("ERRO! Verifique os dados e Tente Novamente.")
    } else {
        nasc = Number(nasc.value)
        var idade = year - nasc
        var sex = document.getElementsByName('sexo')
        var img = document.createElement('img')
        var detect = ""
        img.setAttribute('id', 'foto')
        if (idade <= 8 && sex[0].checked){
            detect = `Detectamos um menino de ${idade} anos`
            img.setAttribute('src', 'imagens/menino.png')
        }
        else if (idade <= 8 && sex[1].checked){
            detect = `Detectamos uma menina de ${idade} anos`
            img.setAttribute('src', 'imagens/menina.png')
        }
        else if (idade <= 20 && sex[0].checked){
            detect = `Detectamos um jovem de ${idade} anos`
            img.setAttribute('src', 'imagens/jovemhomem.png')
        }
        else if (idade <=20 && sex[1].checked){
            detect = `Detectamos uma jovem de ${idade} anos`
            img.setAttribute('src', 'imagens/jovemmulher.png')
        }
        else if (idade <= 40 && sex[0].checked){
            detect = `Detectamos um homem de ${idade} anos`
            img.setAttribute('src', 'imagens/homem.png')
        }
        else if (idade <= 40 && sex[1].checked){
            detect = `Detectamos uma mulher de ${idade} anos`
            img.setAttribute('src', 'imagens/mulher.png')
        }
        else if (idade >= 50 && sex[0].checked){
            detect = `Detectamos um idoso de ${idade} anos`
            img.setAttribute('src', 'imagens/idoso.png')
        }
        else if (idade >= 50 && sex[1].checked){
            detect = `Detectamos uma idosa de ${idade} anos`
            img.setAttribute('src', 'imagens/idosa.png')
        }
        res.innerHTML = detect
        res.appendChild(img)
}}
