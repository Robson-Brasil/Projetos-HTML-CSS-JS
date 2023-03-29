document.addEventListener("DOMContentLoaded", function () {

  function toggleCheckbox(element) {
    var xhr = new XMLHttpRequest();
    if (element.checked) { xhr.open("GET", "/update?relay=" + element.id + "&state=1", true); }
    else { xhr.open("GET", "/update?relay=" + element.id + "&state=0", true); }
    xhr.send();
}    


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

});
