var footerScrolled = false;
var scrollLimit = false;

function handleScroll() {
  var contactSection = document.getElementById("contact-section");
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPos + windowHeight >= documentHeight && !footerScrolled) {
    // Desactivar el límite al llegar al final
    scrollLimit = false;
    contactSection.style.right = "180px";
    footerScrolled = true;
  } else if (
    scrollPos + windowHeight < documentHeight &&
    footerScrolled &&
    !scrollLimit
  ) {
    // Establecer un límite para evitar el desplazamiento a -300px
    scrollLimit = true;
    contactSection.style.right = "180px";
  } else if (
    scrollPos + windowHeight < documentHeight &&
    footerScrolled &&
    scrollLimit
  ) {
    contactSection.style.right = "-450px";
    footerScrolled = false;
  }
}

window.addEventListener("scroll", function () {
  // Desactivar el event listener temporalmente
  window.removeEventListener("scroll", handleScroll);

  // Ejecutar la lógica del scroll
  handleScroll();

  // Volver a activar el event listener después de un breve retraso
  setTimeout(function () {
    window.addEventListener("scroll", handleScroll);
  }, 100);
});

/*
var footerScrolled = false;
var scrollLimit = false;

function slowScrollTo(target, duration) {
  var start =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  var currentTime = 0;
  var increment = 20; // Ajusta este valor para controlar la velocidad de desplazamiento

  function animateScroll() {
    currentTime += increment;
    var scrollY = Math.easeInOutQuad(
      currentTime,
      start,
      target - start,
      duration
    );
    window.scrollTo(0, scrollY);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  }

  window.requestAnimationFrame(animateScroll);
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

function handleScroll() {
  var contactSection = document.getElementById("contact-section");
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPos + windowHeight >= documentHeight && !footerScrolled) {
    // Desactivar el límite al llegar al final
    scrollLimit = false;
    slowScrollTo(documentHeight - windowHeight, 1000); // Ajusta la duración según tus preferencias
    footerScrolled = true;
  } else if (
    scrollPos + windowHeight < documentHeight &&
    footerScrolled &&
    !scrollLimit
  ) {
    // Establecer un límite para evitar el desplazamiento a -300px
    scrollLimit = true;
    contactSection.style.right = "0px";
  } else if (
    scrollPos + windowHeight < documentHeight &&
    footerScrolled &&
    scrollLimit
  ) {
    contactSection.style.right = "-300px";
    footerScrolled = false;
  }
}

window.addEventListener("scroll", function () {
  // Ejecutar la lógica del scroll
  handleScroll();
});
*/
