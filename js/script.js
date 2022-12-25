'use strict';

(function () {
  const colorRadioBtns = document.querySelectorAll('.color-radio-btn');

  //functions
  colorRadioBtns.forEach(btn => {
    btn.classList.add('radio-btn-color-border');
    btn.classList.remove('border-dark');
    btn.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('radio-btn-color-border')) {
        colorRadioBtns.forEach(butn => butn.classList.remove('border-dark'));
        btn.classList.add('border-dark');
      } else {
        return;
      }
    });
  });
})();
