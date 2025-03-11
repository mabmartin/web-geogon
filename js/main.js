
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(document).ready(function() {
        // Sticky Navbar
        var navbar = $('.sticky-top'); // Referencia al navbar
    
        // Asegúrate de que el navbar esté visible al inicio
        navbar.css('top', '0px');
    
        $(window).scroll(function () {
            var scrollPosition = $(this).scrollTop(); // Posición actual del scroll
            if (scrollPosition > 300) {
                // Cuando el usuario hace scroll hacia abajo, el navbar se mueve hacia abajo
                navbar.css('top', '0px');
            } else if (scrollPosition <= 0) {
                // Cuando el usuario está en la parte superior de la página, el navbar está visible
                navbar.css('top', '0px');
            } else {
                // Ajustes para mantener el navbar visible
                navbar.css('top', '0px');
            }
        });
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });




})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav a"); // Todos los enlaces del menú
    const navbarToggler = document.querySelector(".navbar-toggler"); // Botón hamburguesa
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Contenedor del menú
    const dropdownToggle = document.querySelector(".dropdown-toggle"); // Botón "Servicios"
    const dropdownMenu = document.querySelector(".dropdown-menu"); // Menú de "Servicios"

    // Cerrar el menú hamburguesa al hacer clic en cualquier opción (excepto "Servicios")
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (!this.classList.contains("dropdown-toggle")) { // Si no es el botón de "Servicios"
                if (navbarCollapse.classList.contains("show")) {
                    navbarToggler.click(); // Cierra el menú hamburguesa
                }
            }
        });
    });

    // Hacer que el dropdown de "Servicios" funcione con clic en móviles
    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Alternar la visibilidad del dropdown sin cerrar el menú hamburguesa
        dropdownMenu.classList.toggle("show");
        this.parentElement.classList.toggle("show");
    });

    // Cerrar el dropdown de "Servicios" si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            dropdownToggle.parentElement.classList.remove("show");
        }
    });
});




const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_taw95hd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR MENSAJE';
      alert('Mensaje enviado correctamente!');
      this.reset();
    }, (err) => {
      btn.value = 'ENVIAR MENSAJE';
      alert(JSON.stringify(err));
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");
    const body = document.body;

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (window.matchMedia("(max-width: 1024px) and (orientation: landscape)").matches) {
            if (currentScroll > lastScrollTop) {
                navbar.style.top = "-80px"; // Oculta el navbar al hacer scroll arriba
            } else {
                navbar.style.top = "0"; // Muestra el navbar al hacer scroll abajo
            }
        } else {
            navbar.style.top = "0"; // En otros modos, el navbar sigue visible
        }

        lastScrollTop = currentScroll;
    });
});
