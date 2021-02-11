  // Ocultar boton al hacer scrooll
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $('#scroll-top, .nav-secondary').slideDown(100);
    } else {
      $('#scroll-top, .nav-secondary').slideUp(100);
    }
  } // Fin ocultar boton

  // Agregar desplazamiento suave a todos los links dependiendo del navegador
  $("a").on('click', function (event) {
    if (window.navigator.vendor == 'Apple Computer, Inc.') {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    } else {
      $('html').css('scroll-behavior', 'smooth');
    }
  });

  $('document').ready(function () {
    $('textarea').each(function () {
      $(this).val($(this).val().trim());
    });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Ejemplo de JavaScript de inicio para deshabilitar los envíos de formularios si hay campos no válidos
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);