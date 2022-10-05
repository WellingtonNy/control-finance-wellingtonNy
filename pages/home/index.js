function criarCard(objeto) {

    let li = document.createElement('li')
    let lidiv = document.createElement('div')
    let lidiv2 = document.createElement('div')
    let lispan = document.createElement('span')
    let libot = document.createElement('button')
    let liimg = document.createElement('img')
    libot.addEventListener('click', (event) => apagarCard(event, objeto.id))

    li.classList = 'card'
    lispan.classList = 'tag'
    libot.classList = 'lixeira'

    lidiv.innerText = `R$:${objeto.value}`
    if (objeto.categoryID === 1) {
        lispan.innerText = 'saida'
    } else {
        lispan.innerText = 'Entrada'
    }
    liimg.src = "/assets/trash.png"
    liimg.id = objeto.id


    li.append(lidiv, lidiv2)
    lidiv2.append(lispan, libot)
    libot.append(liimg)

    return li
}


function apagarCard(event, id) {
    event.preventDefault()
    const arr = insertedValues.filter((element) => {
        return element.id !== id
    })
    insertedValues = arr
    listarCard(insertedValues)
    mostrarTotal()
}


function listarCard(array) {
    const ul = document.querySelector('ul')
    ul.innerText = ''
    array.forEach(element => {
        ul.appendChild(criarCard(element))
    });
}
listarCard(insertedValues)