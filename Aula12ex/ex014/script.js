function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //bom dia!
    img.src ='fotomanha.png'
} else if (hora >= 12 && hora < 18){
    //boa tarde!
    img.src = 'fototarde.png'
} else {
    //boa noitee!
    img.src = 'fotonoite.png'
}

}

