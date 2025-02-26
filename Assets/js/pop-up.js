document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const closeButton = document.querySelector(".close-popup-btn");

  // Verifica se o dispositivo é mobile (largura da tela ≤ 768px)
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Mostra o pop-up após 2 segundos, mas apenas em desktop
  if (!isMobile()) {
    setTimeout(() => {
      popup.style.display = "flex";
    }, 2000);
  }

  // Fecha o pop-up ao clicar no botão de fechar (span)
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Fecha o pop-up ao clicar no botão de fechar (button)
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Opcional: Fechar ao clicar fora do pop-up
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});