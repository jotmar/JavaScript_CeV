let numbers = []
let select = document.querySelector('select#num_list')
let res = document.querySelector('div#res')

function Add_Number(){
    let num = document.querySelector('input#num')
    let n = Number(num.value)
    if (num.value.length == 0){
        window.alert('Digite algum número!')
    
    }else if (n > 100 || n < 1){
        window.alert('Digite um número entre 1 e 100!')
    
    }else if (numbers.indexOf(n) != -1) {
        window.alert('Este valor já foi adicionado!')
    
    }else{
        numbers.push(n)
        let add = document.createElement('option')
        add.innerHTML = `Valor ${n} adicionado`
        select.appendChild(add)
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function Verify(){
    if (numbers.length != 0){
        for (n in numbers){
            if (n == 0){
                var max = numbers[n]
                var min = numbers[n]
                var soma = numbers[n]
            }
            else {

                if (max < numbers[n]){
                    max = numbers[n]
                }

                if (min > numbers[n]){
                    min = numbers[n]
                }
            soma += numbers[n]
            }
        
        }
    media = soma / numbers.length

    res.innerHTML = `<p>Ao todo temos ${numbers.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${max}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${min}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
    
    else {
        window.alert('Você não adicionou nenhum número!')
    }

}