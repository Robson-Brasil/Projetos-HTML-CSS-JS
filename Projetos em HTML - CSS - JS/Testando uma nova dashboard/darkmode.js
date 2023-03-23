document.addEventListener("DOMContentLoaded", function() {

  const modeSwitch = document.getElementById("mode-switch");
  modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  const body = document.querySelector('body');
  const buttons = document.querySelectorAll('button');

  modeSwitch.addEventListener('change', function() {
    if(this.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('on');
    });
  });

});

// chamar a função de atualização dos botões quando a página carregar
window.onload = updateButtons;

// função para atualizar o estado dos botões quando um botão é clicado
function toggleCheckbox(element) {
        var xhr = new XMLHttpRequest();
        if (element.checked) { xhr.open("GET", "/update?relay=" + element.id + "&state=1", true); }
        else { xhr.open("GET", "/update?relay=" + element.id + "&state=0", true); }
        xhr.send();
    }