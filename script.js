function mostrarEsconder() {
  let toggle = this.nextElementSibling;
  let nav = document.getElementById("nav");

  if (nav.style.display == "flex" || $(nav).is(":visible")) {
    $(nav).slideUp();
  } else {
    $(nav).slideDown();
  }
}

let menuToggle = document.querySelector('.toggle');
  menuToggle.onclick = function() {
  menuToggle.classList.toggle('active')
    
}  

// add an eventListener scroll
window.addEventListener("scroll", function() {
  // hide menu and red (x) when scroll
  nav.style.display = "none";
  menuToggle.classList.remove('active');
});

let toggleElements = document.querySelectorAll('.toggle');
    for (let i = 0; i < toggleElements.length; i++) {
    toggleElements[i].addEventListener('click', mostrarEsconder);
}