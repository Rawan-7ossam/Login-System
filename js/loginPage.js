var yourEmail = document.getElementById("email");
var yourPassword = document.getElementById("password");
var resultCheck = document.getElementById("rescheck");
var loginBtn = document.getElementById("loginbtn");
var signUpLink = document.getElementById("signUp");


var userArr = [];

if(localStorage.getItem("users")!== null) {
    userArr = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    login();
})



function login() {
    var email = yourEmail.value;
    var password = yourPassword.value;

    
    if(yourEmail.value == "" || yourPassword.value == "") {
        resultCheck.classList.remove("d-none");
        resultCheck.classList.add("d-block");
        resultCheck.innerHTML = "All inputs are required.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return; 
    }


var emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    var passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;


    if(!emailRegExp.test(email)) {
    
        resultCheck.classList.remove("d-none");
        resultCheck.classList.add("d-block");
        resultCheck.innerHTML = "Please enter a valid email address.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return;
    
    }

    if(!passwordRegExp.test(password)) {
    
        resultCheck.classList.remove("d-none");
        resultCheck.classList.add("d-block");
        resultCheck.innerHTML = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
        return;
    
    }
    

    var userFound = false;
    for(var i = 0; i < userArr.length; i++) {
        if(userArr[i].email.toLowerCase() == email.toLowerCase() && userArr[i].password == password) {
            userFound = true;
            localStorage.setItem("CurrentuserName" , userArr[i].name);
            break;
        }
    }

    if(userFound) {
        window.location.href = "../homePage.html";
    }else{
        resultCheck.classList.remove("d-none");
        resultCheck.classList.add("d-block");
        resultCheck.innerHTML = "Incorrect email or password. Please try again or Sign Up.";
        resultCheck.classList.remove("text-success");
        resultCheck.classList.add("text-danger");
    }


}

signUpLink.addEventListener("mousemove", function() {
    signUpLink.classList.remove("text-decoration-none");
    signUpLink.classList.add("text-decoration-underline");
    
});

signUpLink.addEventListener("mouseleave", function() {
    signUpLink.classList.remove("text-decoration-underline");
    signUpLink.classList.add("text-decoration-none");
    
});
