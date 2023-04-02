const evento = document.getElementById('send')

const enviarForms = () => {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let mensagem = document.getElementById('msg').value
    let numero = [your-number]

    var win = window.open(`https://wa.me/${numero}?text=Olá,%20meu%20nome%20é%20${nome}%20${sobrenome}, assunto: %20${mensagem}`,'_blank')
}

evento.addEventListener('click', enviarForms)
