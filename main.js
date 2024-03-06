const anterior = document.getElementById("ant")
const proximo = document.getElementById("prox")

const imagemElement = document.getElementById("StartIMG")

const imagens = [
  "Midia/CAPA.jpg",
  "Midia/IMG1.jpg", 
  "Midia/IMG-20240305-WA0070.jpg", 
  "Midia/IMG-20240305-WA0071.jpg" 
] 

var ImagemAtual = 0

function ProximaImagem() {
  
  imagemElement.src = imagens[ImagemAtual]
  
}

proximo.addEventListener("click", function() {
  if (ImagemAtual < imagens.length - 1) {
    
    ImagemAtual += 1
    ProximaImagem()
    
  } 
}) 

anterior.addEventListener("click", function() {
  if (ImagemAtual > 0) {
  
    ImagemAtual -= 1
    ProximaImagem()
  
  } 
}) 
