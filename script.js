function aplicarTransformacao(element) {
    element.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    element.style.transformStyle = "preserve-3d";
}

// Adiciona um evento de carregamento à janela (página)
window.addEventListener('load', function() {
    // Obtém o elemento pelo ID e aplica a transformação quando a página é carregada
    var seuElemento = document.getElementById('seuElemento');
    if (seuElemento) {
        aplicarTransformacao(seuElemento);
    }
});