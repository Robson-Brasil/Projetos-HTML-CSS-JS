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

  function toggleButton(button) {
    var checkbox = button.querySelector('input[type="checkbox"]');
    button.classList.toggle("active", checkbox.checked);
    if (!checkbox.checked) {
      button.classList.remove("active");
    }
  }

  function toggleCheckbox(checkbox) {
    var button = checkbox.parentNode;
    toggleButton(button);
  }

});
