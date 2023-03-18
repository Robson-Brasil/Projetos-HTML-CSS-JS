document.addEventListener("DOMContentLoaded", function () {

  const darkModeSwitch = document.getElementById("dark-mode-switch");
  const darkModeImg = document.querySelector(".dark-mode-image");
  const lightModeImg = document.querySelector(".light-mode-image");
  const body = document.querySelector('body');

  body.classList.add('light-mode'); // adiciona a classe 'light-mode' ao body quando a página é carregada

  darkModeSwitch.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      lightModeImg.style.display = 'inline-block'; // exibe a imagem do modo claro
      darkModeImg.style.display = 'none'; // oculta a imagem do modo escuro
    } else {
      lightModeImg.style.display = 'none'; // oculta a imagem do modo claro
      darkModeImg.style.display = 'inline-block'; // exibe a imagem do modo escuro
    }
  });

  // outras funções...// seleciona todos os botões de alternância
const toggleButtons = document.querySelectorAll('.toggle-button');

// adiciona um evento de clique a cada botão de alternância
toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // alterna a classe do botão entre "on" e "off"
    button.classList.toggle('on');
    button.classList.toggle('off');
  });
});

});
