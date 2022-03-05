//Formatando na tela
var num = [1, 4, 2, 6, 12, 9]

for (let c = 0; c < num.length; c++){
    console.log(`Indice ${c} = ${num[c]}`)
}
console.log('================')

// Utilizando o in
for (let pos in num){
    console.log(`Indice ${pos} = ${num[pos]}`)
}
