function criarModal() {

const divmodal=document.createElement('div')
const divcaixa=document.createElement('div')
const div1=document.createElement('div')
const div2=document.createElement('div')
const div3=document.createElement('div')
const div4=document.createElement('div')
const div5=document.createElement('div')
const div1h2=document.createElement('h2')
const div1but=document.createElement('button')
const div2p=document.createElement('p')
const div3h4=document.createElement('h4')
const div3input=document.createElement('input')
const div4p=document.createElement('p')
const div4but=document.createElement('button')
const div4but2=document.createElement('button')
const div5but=document.createElement('button')
const div5but2=document.createElement('button')


divmodal.classList= 'mmodal'
divcaixa.classList= 'caixaModal'
div1.classList='MD1 MD'
div1but.classList='closeModal'
div2.classList='MD2 MD'
div3.classList='MD3 MD'
div3input.classList='IMD'
div3input.id='imputValor'
div4.classList='MD4 MD'
div4but.classList='butSelect'
div4but2.classList='butSelect'
div5.classList='MD5 MD'
div5but.classList='butSelect BCMD'
div5but2.classList='registrarValor'

div1h2.innerText= 'Registro de valor'
div1but.innerText='x'
div2p.innerText= 'Digite o valor e em seguida aperte o butão referente ao tipo do valor'
div3h4.innerText='Valor'
div3input.placeholder="R$:00,00"
div4p.innerText='Tipo de valor'
div4but.innerText='Entrada'
div4but2.innerText='Saida'
div5but.innerText='Cancelar'
div5but2.innerText='Inserir valor'

divmodal.append(divcaixa)
divcaixa.append( div1, div2, div3, div4, div5)
div1.append(div1h2, div1but)
div2.append(div2p)
div3.append(div3h4, div3input)
div4.append(div4p, div4but, div4but2)
div5.append(div5but, div5but2)

return divmodal
}

const localModal =document.querySelector('body')
const openBut = document.querySelector('#OpenMD')

function abirModal() {
    const newModal =criarModal()
openBut.addEventListener('click',()=>{

    localModal.appendChild(newModal)

    closeNewModal() 
})}
abirModal()

function closeNewModal() {
    const clo =document.querySelector('.closeModal')
    const dmo =document.querySelector('.mmodal')

    clo.addEventListener('click',() => {
  dmo.remove()
    }) 
}