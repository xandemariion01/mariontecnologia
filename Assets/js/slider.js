document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById('sliderWrapper');
  const cards = document.querySelectorAll('.novidades-slider-card');
  const container = document.querySelector('.slider-container');
  let position = 0;
  let lastTime = 0;
  const speed = 0.8; // Velocidade

  // Verifica se os elementos existem
  if (!wrapper || !container || cards.length === 0) {
    console.error('Erro: Elementos do slider não encontrados.');
    return;
  }

  // Seleciona todas as imagens dentro dos cards
  const images = document.querySelectorAll('.novidades-card-img-top');
  let imagesLoaded = 0;

  // Função para verificar se todas as imagens foram carregadas
  function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
      startSlider();
    }
  }

  // Adiciona um listener para cada imagem
  if (images.length > 0) {
    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', () => {
          console.warn(`Erro ao carregar a imagem: ${img.src}`);
          checkImagesLoaded();
        });
      }
    });
  } else {
    startSlider();
  }

  // Função para iniciar o slider
  function startSlider() {
    const cardWidth = cards[0].offsetWidth + 15; // Largura do card + margem
    const totalCards = cards.length / 2; // Metade dos cards (já que duplicamos)
    const totalCardsAll = cards.length; // Total de cards (originais + duplicados)
    const containerWidth = container.offsetWidth; // Largura do container visível

    // Log para depuração
    console.log('Iniciando slider...');
    console.log('cardWidth:', cardWidth);
    console.log('totalCards:', totalCards);
    console.log('totalCardsAll:', totalCardsAll);
    console.log('containerWidth:', containerWidth);

    // Garante que o wrapper seja visível
    wrapper.style.display = 'flex';

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

      // Novo cálculo do resetPoint: reseta quando o último card duplicado sair da tela
      const resetPoint = cardWidth * totalCardsAll; // Largura total de todos os cards (originais + duplicados)
      if (Math.abs(position) >= resetPoint) {
        // Ajusta a nova posição para emendar no primeiro card
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