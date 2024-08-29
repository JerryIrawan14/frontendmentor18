const emailEmpty = 'Looks like this is not an email';
const errorEmpty = 'cannot be empty';

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const error1 = document.getElementById('error-1');
const error2 = document.getElementById('error-2');
const error3 = document.getElementById('error-3');
const error4 = document.getElementById('error-4');

const inputs = document.querySelectorAll('input');
const btnTrigger = document.querySelector('button');


inputs.forEach(input => {
    input.dataset.defaultValue = input.value;
    
    input.addEventListener('focus', function() {
        if (this.value === this.dataset.defaultValue) {
            this.value = "";
            this.classList.remove("placeholder");
        }
    });
});

btnTrigger.addEventListener('click',function(){
  
    inputs.forEach(input =>{
        input.addEventListener('blur',function(){
            if(this.value === ""){
                error1.classList.remove('hidden');
                error2.classList.remove('hidden');
                error3.classList.remove('hidden');
                error4.classList.remove('hidden');
            }
        })
    })

});