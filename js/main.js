var yourName = document.getElementById("name");
var yourEmail = document.getElementById("email");
var yourPassword = document.getElementById("password");
var registerButton = document.getElementById("regbtn")
var resultCheck = document.getElementById("rescheck");
var loginLink = document.getElementById("signIn");

var userArr = [];

if(localStorage.getItem("users") !=null){
    userArr = JSON.parse(localStorage.getItem("users"));
} 



function createUser(){
    var user ={
        name: yourName.value,
        email: yourEmail.value,
        password: yourPassword.value
    }

    userArr.push(user);
    localStorage.setItem("users", JSON.stringify(userArr));
    
}

function isEmailExist(email){
    for(var i=0; i<userArr.length; i++){
        if(userArr[i].email.toUpperCase() == email.toUpperCase()){
            return true; // email exists
        }else{
            return false; // email does not exist
        }
}
    }



registerButton.addEventListener("click", function(e){
    e.preventDefault(); 
    validateEmailAndPassword();
    
});




function validateEmailAndPassword() {
    var name = yourName.value;
    var email = yourEmail.value;
    var password = yourPassword.value;

    var nameRegExp = /^[a-zA-Z\s]+$/;
    var emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    var passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;


    if(yourName.value == "" || yourEmail.value == "" || yourPassword.value == "") {
        resultCheck.style.display="block";
        resultCheck.innerHTML = "All inputs are required.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return; 
    }
    
     else if(!nameRegExp.test(name)) {
        resultCheck.style.display="block";
        resultCheck.innerHTML = `Please enter a valid name.`;
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return; 
    }

          
    
    else if(!emailRegExp.test(email)) {
        resultCheck.style.display="block";
        resultCheck.innerHTML = `Please enter a valid email address.
                                example:rawanhossam@gmail.com`;
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return;
    }


    else if(!passwordRegExp.test(password)) {
        resultCheck.style.display="block";
        resultCheck.innerHTML = `Password must be at least 8 characters long, 
                                contain at least one uppercase letter, one lowercase letter, 
                                one digit, and one special character.`;
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return;
    }

    if (isEmailExist(email)) { // نستخدم الدالة isEmailExist اللي عملناها
        resultCheck.style.display="block";
        resultCheck.innerHTML = "This email is already registered. Please use another email or sign in.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return; // توقف التنفيذ هنا لو الإيميل موجود
    }

    createUser(); 

    window.location.href = "../loginPage.html";

}


loginLink.addEventListener("mousemove", function() {
    loginLink.classList.remove("text-decoration-none");
    loginLink.classList.add("text-decoration-underline");
    // loginLink.classList.add("text-decoration-underline-hover");
});

loginLink.addEventListener("mouseleave", function() {
    loginLink.classList.remove("text-decoration-underline");
    loginLink.classList.add("text-decoration-none");
    // loginLink.classList.add("text-decoration-underline-hover");
});

