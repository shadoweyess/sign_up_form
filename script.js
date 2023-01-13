        
        const pwd = document.getElementById("user_password");
        const pwdReapit = document.getElementById("confirm_password");
        const email = document.getElementById("user_email");

        email.addEventListener("input",(event)=>{
            if (email.validity.valid){
                email.setCustomValidity("Kurwaaaaaa dzialaj!!!");
            } else {
                email.setCustomValidity("");
            }
        })

        function checkPassword(){
                if (pwd == ""){
            document.getElementById("pwdMessage").innerHTML="*Please, fill the password field";
            return false;
        }

        if (pwdReapit ==""){
            document.getElementById("pwdMessage2").innerHTML="*Please, confirm your password";
            return false;
        }

        if (pwd.lenght < 7){
            document.getElementById("pwdMessage").innerHTML="*Must be at least 7 characters long";
            return false;
        }

        if (pwd.lenght > 25){
            document.getElementById("pwdMessage").innerHTML="Must not exceed 25 characters"
            return false
        }
    
    
    
    
    
        if (pwd != pwdReapit){
            document.getElementById("pwdMessage2").innerHTML="*Password do not match";
            return false;            
        } else{
            document.getElementById("pwdMessage").innerHTML="*Password created succesfully";
            
        }
    }
    