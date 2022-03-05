function Tabuada(){
    var num = document.querySelector('input#num')
    var res = document.querySelector('div#res')
    var selec = document.querySelector('select#selec')
    //Verificando se o número foi passado
    //res.innerHTML = '<p><strong>Tabuada</strong><p>'
    if (num.value.length != 0){
        num = Number(num.value)
        selec.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            //res.innerHTML += `${num} X ${c} = ${num*c}<br>`
            var item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `selec${c}`
            selec.appendChild(item)
        }
    }
    else{
        window.alert('Digite algum número!')
    }
}