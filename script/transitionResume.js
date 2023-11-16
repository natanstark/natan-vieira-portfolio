document.addEventListener('DOMContentLoaded', function () {
    // Aguarde um breve momento e, em seguida, mova o overlay para cima
    setTimeout(function () {
      document.getElementById('overlay-resume').style.transform = 'translateY(-100%)';
    }, 500);
  });
  