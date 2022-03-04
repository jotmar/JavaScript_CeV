function Tabuada(){
    num = document.querySelector('input#num')
    res = document.querySelector('div#res')
    //Verificando se o número foi passado
    res.innerHTML = '<p><strong>Tabuada</strong><p>'
    if (num.value.length != 0){
        num = Number(num.value)
        for (var c = 1; c <= 10; c++){
            res.innerHTML += `${num} X ${c} = ${num*c}<br>`
        }
    }
    else{
        window.alert('Digite algum número!')
    }
}