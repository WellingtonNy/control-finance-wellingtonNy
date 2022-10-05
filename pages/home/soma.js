function mostrarTotal() {
    let arraysoma = [0]
    let arraysubtracao = [0]
    insertedValues.forEach(elemento => {
        if (elemento.categoryID === 0) {
            arraysoma.push(elemento.value)
        } else {
            arraysubtracao.push(elemento.value)
        }
    })
    let somaTotal = arraysoma.reduce((prev, elemento) => prev + elemento)
    let subtracaoTotal = arraysubtracao.reduce((prev, elemento) => prev + elemento)
    let totalTotal = somaTotal - subtracaoTotal

    let total = document.querySelector('#SomaValor')
    total.innerText = `R$: ${totalTotal}`
}
mostrarTotal()