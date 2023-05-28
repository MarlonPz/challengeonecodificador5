const textArea = document.querySelector(".textarea");
const menensaje = document.querySelector(".mensaje"); 

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    menensaje.value = textoEncriptado
    textArea.value = "";
    menensaje.style.backgroundImage = "none"
    copyButton.style.display = "block"
}

function encriptar(stringEncriptada){
    let martrizCodigo = [["e","enter",],["i" , "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < martrizCodigo.length; i++){
        if(stringEncriptada.includes(martrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(martrizCodigo[i][0], martrizCodigo[i][1])
        }
    }
    return stringEncriptada
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    menensaje.value = textoEncriptado
    textArea.value = "";

}
function desencriptar(stringDesencriptada){
    let martrizCodigo = [["e","enter",],["i" , "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < martrizCodigo.length; i++){
        if(stringDesencriptada.includes(martrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(martrizCodigo[i][1], martrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copyText() {
    var textToCopy = document.querySelector('.mensaje');
    
    // Seleccionar el texto dentro del textarea
    textToCopy.select();
    // Copiar el texto al portapapeles
    document.execCommand('copy');
    
    // Deseleccionar el texto
    textToCopy.blur();
    
    // Cambiar el texto del botón después de copiar
    var copyButton = document.getElementById('copyButton');
    copyButton.innerHTML = '¡Copiado!';

    setTimeout(function() {
        copyButton.innerHTML = `copiar`;
    }, 2000);
}


