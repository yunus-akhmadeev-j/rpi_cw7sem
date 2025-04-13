const signInBtn =document.querySelector('.signin-btn');
const signUpBtn =document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const logReg = document.querySelector('.log-reg');

signUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    logReg.classList.add('active');
});
signInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    logReg.classList.remove('active');
});