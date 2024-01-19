import Modal from './modal.js'

const modal = Modal()

//pegar todos os botoes que existe com  a class check
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        //abrir modal
        modal.open()
    })
})

const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        //abrir modal
        modal.open()
    })
})

//pegar quando o marcar como lindo for clicado 

modal.open()