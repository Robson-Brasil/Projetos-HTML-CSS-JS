document.addEventListener("DOMContentLoaded", function () {
  const modeSwitch = document.getElementById("mode-switch");
  const body = document.querySelector('body');

  modeSwitch.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('on');
    });
  });

});
