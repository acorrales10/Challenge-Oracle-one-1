var btnEncriptar = document.querySelector(".boton-encriptar");
var btnDesencriptar = document.querySelector(".boton-desencriptar");
var imagen_muneco = document.querySelector(".cja-imagen");
var text_parrafo = document.querySelector(".text-parrafo");
var resultado = document.querySelector(".resultado");
var contenedorResultado = document.querySelector(".contenedor-resultado");
var contenedorCopiar = document.querySelector(".copiar");
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    desaparecerDespues();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptacion(cajatexto);

}

function desencriptar(){
    desaparecerDespues();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptacion(cajatexto);

}

function recuperarTexto(){
    var cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value;
}

function desaparecerDespues(){
    imagen_muneco.classList.add("desaparecer");
    text_parrafo.classList.add("desaparecer");
    contenedorResultado.classList.remove("desaparecer");
    contenedorCopiar.classList.remove("desaparecer");
}

function encriptacion(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptacion(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".boton-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
    })
