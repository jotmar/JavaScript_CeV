let num = [2, 3, 1, 9]
num[3] = 7
num.push(8)
num.pop()
tam = num.length
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do nosso vetor é ${num[0]}`)
console.log(`Tamanho do nosso vetor: ${tam}`)
num.sort()
console.log(`Nosso vetor em ordem crescente: ${num}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 3 está na posição ${pos}`)
}