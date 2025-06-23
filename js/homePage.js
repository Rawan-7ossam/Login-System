
var mainTitle = document.getElementById("welcomeMessage");
var logoutButton = document.getElementById("logoutBtn");

var userArr = [];


if(localStorage.getItem("users")!== null) {
    userArr = JSON.parse(localStorage.getItem("users"));
}

var currentUser = localStorage.getItem("CurrentuserName");

if (mainTitle && currentUser) { 
    mainTitle.innerHTML = "Welcome, " + currentUser + "!";
} else if (mainTitle) { 
    mainTitle.innerHTML = "Welcome! Please log in.";
}

if (logoutButton) {
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("CurrentuserName");
        window.location.href = "loginPage.html";
    });
}