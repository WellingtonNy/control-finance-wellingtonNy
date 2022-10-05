function criarCard(objeto) {
    
let li = document.createElement('li')
let lidiv= document.createElement('div')
let lidiv2= document.createElement('div')
let lispan= document.createElement('span')
let libot= document.createElement('button')
let liimg= document.createElement('img')

li.classList= 'card'
lispan.classList='tag'
libot.classList='lixeira'

lidiv.innerText=`R$:${objeto.value}`
if (objeto.categoryID === 1) {
    lispan.innerText='saida'
}else{
lispan.innerText= 'Entrada'
}
liimg.src="/assets/trash.png"



li.append(lidiv, lidiv2)
lidiv2.append(lispan, libot)
libot.append(liimg)

return li
}

function criador(elemento) {
   let ul = document.querySelector('ul')
let li = criarCard(elemento)
 ul.appendChild(li)
}

function gerador(arr) {
    for (let i = 0; i < arr.length; i++) {
        criador(arr[i])    
    }  
}
gerador(insertedValues)