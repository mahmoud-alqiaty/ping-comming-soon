var input_box = document.querySelector('.input-box')
var email = document.querySelector('.email')
var subsceibe_form = document.querySelector('.subsceibe-form')
var valaid_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

subsceibe_form.addEventListener('submit', function(e){
    if(!email.value.match(valaid_pattern) || (email.value === "") ){
        e.preventDefault();
        email.focus();
        input_box.classList.add('invalaid')
    }
    else{
        input_box.classList.remove('invalaid')
    }
})