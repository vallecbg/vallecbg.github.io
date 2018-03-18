
function validatePassword(){
    let password = document.getElementById("inputPassword");
    let confirmpassword = document.getElementById("inputConfirmPassword");
    if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmpassword.setCustomValidity('');
    }
    password.onchange = validatePassword;
    confirmpassword.onkeyup = validatePassword;
}