document.querySelector('.whatsapp-btn').addEventListener('click', function (event) {
    // Verifica se o navegador pode abrir o WhatsApp
    var canOpenWhatsApp = navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);

    if (canOpenWhatsApp) {
       
        event.preventDefault();
        
        try {
            window.open(this.href, '_blank');
        } catch (e) {
            // Se houver erro ao tentar abrir o link, redireciona para a versão web do WhatsApp
            window.location.href = 'https://web.whatsapp.com/send?phone=554998218134&text=Olá!%20Gostaria%20de%20mais%20informações.';
        }
    } else {
        // Se não for um dispositivo móvel, redireciona para o WhatsApp Web
        window.location.href = 'https://web.whatsapp.com/send?phone=554998218134&text=Olá!%20Gostaria%20de%20mais%20informações.';
    }
});