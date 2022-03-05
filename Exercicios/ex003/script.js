function contar(){
    var ini = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#res')
    //Verificando se as opções estão preenchidas
    if (ini.value.length != 0 && fim.value.length != 0){
        ini = Number(ini.value)
        fim = Number(fim.value)
        res.innerHTML = 'Contando:<br>'
        //Verificando se o passo é válido
        if (passo == 0){
            passo = 1
            window.alert('Não é possivel utilizar o passo 0. Considerando 1')
        }else if (passo < 0){
            passo *= -1
        }
        // Se o inicio for menor que o fim
        if (ini < fim){
            for (ini; ini <= fim; ini += passo){
                res.innerHTML += ` ${ini} 👉`
            }
        }
        // Se o inicio for maior que o fim
        else if (ini > fim){
            for (ini; ini >= fim; ini -= passo){
                res.innerHTML += ` ${ini} \u{1F449}`
            }
        }
        else {
            res.innerHTML += ` ${ini} \u{1F449}`
        }
        res.innerHTML += ' 🏁'
    }
    else {
        res.innerHTML = 'Impossível Contar'
    }
}
