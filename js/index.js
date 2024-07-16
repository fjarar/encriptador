var textArea = document.getElementById("texto");
var imagen = document.getElementById("imagen");
var parrafo = document.getElementById("parrafo");
var subtitle = document.getElementById("subtitle");
var parrafoInicial = "Ingresa el texto que desees encriptar o desencriptar.";
var botonCopiar = document.getElementById("copiar");
var rightSection = document.getElementById("right-section");

textArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
    }
})

const encriptar = () => {
    if (textArea.value != "") {
        imagen.style.display = "none";
        subtitle.style.display = "none";
        botonCopiar.style.display = "flex";        
        parrafo.innerText = textArea.value;
        parrafo.innerText = parrafo.innerHTML.replaceAll("e", "enter");
        parrafo.innerText = parrafo.innerHTML.replaceAll("i", "imes");
        parrafo.innerText = parrafo.innerHTML.replaceAll("a", "ai");       
        parrafo.innerText = parrafo.innerHTML.replaceAll("o", "ober");
        parrafo.innerText = parrafo.innerHTML.replaceAll("u", "ufat");
        rightSection.style.justifyContent = "space-between";
        parrafo.style.margin = "auto";
    }else{
        imagen.style.display = "flex";
        subtitle.style.display = "block";
        let mql = window.matchMedia("(max-width: 900px");
        if (mql.matches) {
            imagen.style.display = "none";
        }
        botonCopiar.style.display = "none";
        parrafo.innerText = parrafoInicial;
        rightSection.style.justifyContent = "center";
        parrafo.style.margin = "0 1rem";    
    }
}

const desencriptar = () => {
    if (textArea.value != "") {
        imagen.style.display = "none";
        subtitle.style.display = "none";
        parrafo.innerText = textArea.value;
        parrafo.innerText = parrafo.innerHTML.replaceAll("enter", "e");
        parrafo.innerText = parrafo.innerHTML.replaceAll("imes", "i");
        parrafo.innerText = parrafo.innerHTML.replaceAll("ai", "a");       
        parrafo.innerText = parrafo.innerHTML.replaceAll("ober", "o");
        parrafo.innerText = parrafo.innerHTML.replaceAll("ufat", "u");
        botonCopiar.style.display = "flex";
        rightSection.style.justifyContent = "space-between";
        parrafo.style.margin = "auto";
    }else{
        imagen.style.display = "flex";
        subtitle.style.display = "block";
        let mql = window.matchMedia("(max-width: 900px");
        if (mql.matches) {
            imagen.style.display = "none";
        }
        botonCopiar.style.display = "none";
        rightSection.style.justifyContent = "center";
        parrafo.innerText = parrafoInicial;
        parrafo.style.margin = "0 1rem";      
    }
      
}

const copiarTexto = () => {
    var copiar = document.getElementById("parrafo").innerText;
    navigator.clipboard.writeText(copiar);
}