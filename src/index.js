const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
input.addEventListener('focus',function(){form.classList.add('form__active');})
input.addEventListener('blur',function(){form.classList.remove('form__active');})