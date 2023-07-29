// Tu código JavaScript
var menu = document.querySelector(".hamburger");
var menuPanel = document.querySelector(".menuppal");
var menuLinks = document.querySelectorAll(".menuOpstions li a");

function toggleMenu(event) {
  menu.classList.toggle("is-active");
  menuPanel.classList.toggle("is_active");

  if (menuPanel.classList.contains("is_active")) {
    menuPanel.style.transform = "translate3d(0px, 0px, 0px)";
  } else {
    menuPanel.style.transform = "translate3d(0px, -100%, 0px)";
  }

  event.preventDefault();
}

function closeMenu(event) {
  toggleMenu(event); // Cerrar el menú cuando se hace clic en un enlace del menú

  // Desplazarse a la sección correspondiente cuando se hace clic en un enlace del menú
  var target = event.target;
  if (target.tagName.toLowerCase() === "a") {
    var href = target.getAttribute("href");
    if (href === "#home") {
      // Si el enlace es "#home", desplazarse al inicio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      var targetSection = document.querySelector(href);
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function updateMenuOnLoadAndResize() {
  if (window.innerWidth <= 767) {
    // Agregar el código para ocultar el menú si el ancho es menor o igual a 768 píxeles
    menuPanel.style.transform = "translate3d(0px, -100%, 0px)";
  } else {
    // Agregar el código para mostrar el menú normalmente si el ancho es mayor que 768 píxeles
    menuPanel.style.transform = "translate3d(0px, 0px, 0px)";
  }
}

// Función para desplazarse hasta arriba con una animación suave
function scrollToTop() {
  const scrollDuration = 500; // Duración de la animación en milisegundos
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Event listener para mostrar u ocultar el botón cuando se hace scroll
window.onscroll = toggleButtonVisibility;

// Función para mostrar u ocultar el botón dependiendo del desplazamiento vertical
function toggleButtonVisibility() {
  const btnScrollToTop = document.getElementById("btnScrollToTop");
  if (document.documentElement.scrollTop > 300) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

// Event listener para desplazarse hasta arriba cuando se hace clic en el botón
document
  .getElementById("btnScrollToTop")
  .addEventListener("click", scrollToTop);

// Evento para abrir y cerrar el menú cuando se hace clic en el ícono del menú
menu.addEventListener("click", toggleMenu, false);

// Evento para cerrar el menú cuando se hace clic en un enlace del menú
menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu, false);
});

// Evento de carga para ocultar el menú al inicio si es un dispositivo móvil
window.addEventListener("load", function () {
  if (window.innerWidth <= 767) {
    // Puedes ajustar este valor según tus necesidades para determinar qué se considera un dispositivo móvil

    menuPanel.style.transform = "translate3d(0px, -100%, 0px)";
  }
});

window.addEventListener("resize", updateMenuOnLoadAndResize);
