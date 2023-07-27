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
      // Si el enlace es "#id2", desplazarse al inicio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      var targetSection = document.querySelector(href);
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Evento para abrir y cerrar el menú cuando se hace clic en el ícono del menú
menu.addEventListener("click", toggleMenu, false);

// Evento para cerrar el menú cuando se hace clic en un enlace del menú
menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu, false);
});

// Evento de carga para ocultar el menú al inicio
window.addEventListener("load", function () {
  menuPanel.style.transform = "translate3d(0px, -100%, 0px)";
});
