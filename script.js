function matchingPassword(){
    let password = document.getElementById("user_password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    console.log(password,confirmPassword);
    let message = document.getElementById("error");
     
    if (password.lenght != 0){
        if (password == confirmPassword){
            message.textContent = "";
        }
        else {
            message.textContent = "*Password do not match"
        }
    }
}
