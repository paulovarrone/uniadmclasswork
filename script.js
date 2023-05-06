let nav = document.getElementById("nav");
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function() {
  menuToggle.classList.toggle('active');
  if ($(nav).is(":visible")) {
    $(nav).slideUp();
  } else {
    $(nav).slideDown();
  }
};

window.addEventListener('scroll', function() {
  if ($(nav).is(":visible")) {
    $(nav).slideUp();
    menuToggle.classList.remove('active');
  }
});




