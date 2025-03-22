
  document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('sliderWrapper');
    const cards = document.querySelectorAll('.novidades-slider-card');
    const container = document.querySelector('.slider-container');
    let position = 0;
    let lastTime = 0;
    const speed = 0.8; // Velocidade

    // Seleciona todas as imagens dentro dos cards
    const images = document.querySelectorAll('.novidades-card-img-top');
    let imagesLoaded = 0;

    // Função para verificar se todas as imagens foram carregadas
    function checkImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        // Todas as imagens foram carregadas, agora podemos calcular a largura e iniciar o slider
        startSlider();
      }
    }

    // Adiciona um listener para cada imagem
    images.forEach((img) => {
      if (img.complete) {
        // Se a imagem já está carregada (ex.: em cache), incrementa diretamente
        checkImagesLoaded();
      } else {
        // Se a imagem ainda não foi carregada, espera o evento 'load'
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', checkImagesLoaded); // Caso a imagem falhe ao carregar
      }
    });

    // Função para iniciar o slider
    function startSlider() {
      const cardWidth = cards[0].offsetWidth + 15; // Largura do card + margem
      const totalCards = cards.length / 2; // Metade dos cards (já que duplicamos)
      const containerWidth = container.offsetWidth; // Largura do container visível

      // Função para atualizar a posição do slider
      function slide(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        // Ajusta a posição com base no tempo para um movimento suave
        position -= speed * (deltaTime / 16);
        wrapper.style.transform = `translateX(${position}px)`;

        // Calcula quantos cards cabem na tela
        const visibleCards = Math.floor(containerWidth / cardWidth);

        // Quando o último card duplicado sair completamente da tela, resetar a posição
        const resetPoint = cardWidth * (totalCards + visibleCards - 1);
        if (Math.abs(position) >= resetPoint) {
          position = -(cardWidth * (totalCards - visibleCards + 1));
          wrapper.style.transition = 'none';
          wrapper.style.transform = `translateX(${position}px)`;
          wrapper.offsetHeight;
          wrapper.style.transition = 'transform 0.5s linear';
        }

        requestAnimationFrame(slide); // Continua a animação
      }

      // Inicia o deslizamento
      requestAnimationFrame(slide);
    }
  });
