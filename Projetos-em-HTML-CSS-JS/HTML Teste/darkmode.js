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