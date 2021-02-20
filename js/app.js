const selectArrow = document.querySelector('.form__item_arrow');
const navLinks = document.querySelectorAll('.nav__link');
const menuBtn = document.querySelector('.menu__burger');
const navMenu = document.querySelector('nav');
const body = document.body;


selectArrow.addEventListener('click', function () {
   selectArrow.classList.toggle('form__item_active');

});


navLinks.forEach(function (item) {
   item.addEventListener('click', function () {
      menuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('lock');
   });
});