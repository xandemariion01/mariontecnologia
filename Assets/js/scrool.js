window.addEventListener("load", function() {
    var lastScrollTop = 0;
    document.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            // Para baixo
            if (window.innerWidth <= 767 && st > 50) { // Condição para dispositivos móveis
                document.querySelector(".btn-header").classList.add("scrolled");
            }
        } else {
            // Para cima
            if (window.innerWidth <= 767 && st <= 50) {
                document.querySelector(".btn-header").classList.remove("scrolled");
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // Para dispositivos móveis, pode ser necessário ajustar
    }, false);
});