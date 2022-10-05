console.log('funcionando');


const buttonTodos = document.querySelector('#Todos')
const buttonEntrada = document.querySelector('#Entrada')
const buttonSaida = document.querySelector('#Saida')

buttonEntrada.addEventListener('click', (event) => SelectEnt(event))

function SelectEnt(event) {
  event.preventDefault()
  const arr = insertedValues.filter((element) => {
    return element.categoryID === 0
  })
  listarCard(arr)
}


buttonSaida.addEventListener('click', (event) => SelectSai(event))

function SelectSai(event) {
  event.preventDefault()
  const arr = insertedValues.filter((element) => {
    return element.categoryID === 1
  })
  listarCard(arr)
}


buttonTodos.addEventListener('click', (event) => SelectAll(event))

function SelectAll(event) {
  event.preventDefault()
  listarCard(insertedValues)
}
