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
    // else if(nameRegExp.test(name) && emailRegExp.test(email) && passwordRegExp.test(password)) {
    //     window.location.href = "../loginPage.html";
    //     localStorage.setItem("users", JSON.stringify(userArr));
    //     // resultCheck.innerHTML = "Success";
    //     // resultCheck.classList.remove("text-danger");
    //     // resultCheck.classList.add("text-success");
    //     // resultCheck.style.display="block";
    //     //  yourEmail.value = "";
    //     //  yourPassword.value = "";
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










// var yourName = document.getElementById("name");
// var yourEmail = document.getElementById("email");
// var yourPassword = document.getElementById("password");
// var registerButton = document.getElementById("regbtn")
// var resultCheck = document.getElementById("rescheck");
// var loginLink = document.getElementById("signIn");

// var userArr = [];

// // ===> تم التصحيح هنا: تحميل البيانات عند بداية تشغيل الصفحة
// // ده بيضمن ان userArr فيها كل المستخدمين المخزنين من المرة اللي فاتت
// if(localStorage.getItem("users") != null){
//     userArr = JSON.parse(localStorage.getItem("users"));
// }


// function createUser(){
//     var user ={
//         name: yourName.value,
//         email: yourEmail.value,
//         password: yourPassword.value
//     }

//     userArr.push(user);
//     // ===> تم التصحيح هنا: حفظ البيانات بعد إضافة المستخدم الجديد مباشرة
//     localStorage.setItem("users", JSON.stringify(userArr));
// }

// // ===> تم التصحيح هنا: دالة isEmailExist تم تعديلها لترجع true/false
// // وتم تصحيح toUpperCase() وإضافة return true;
// function isEmailExist(email){
//     for(var i = 0; i < userArr.length; i++){
//         // ===> تصحيح toUpperCase() وإضافة return true;
//         if(userArr[i].email.toUpperCase() === email.toUpperCase()){
//             // لا تعرض رسالة الخطأ هنا مباشرة
//             return true; // الإيميل موجود
//         }
//     }
//     return false; // الإيميل غير موجود
// }
// // ===> تم التصحيح هنا: القوس ده كان ناقص في الكود بتاعك
// // القوس ده بيقفل الـ function isEmailExist
// // <== هذا القوس يخص دالة isEmailExist


// registerButton.addEventListener("click", function(e){
//     e.preventDefault(); // يمنع إعادة تحميل الصفحة
//     validateEmailAndPassword();
// });


// function validateEmailAndPassword() {
//     // يفضل استخدام trim() لإزالة المسافات البيضاء الزائدة من الاسم والإيميل
//     var name = yourName.value.trim();
//     var email = yourEmail.value.trim();
//     var password = yourPassword.value; // لا يتم trim() للباسورد عادةً

//     var nameRegExp = /^[a-zA-Z\s]+$/;
//     var emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
//     var passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;


//     // ===> تم التعديل هنا: ترتيب الفحوصات (مهم جداً للتدفق الصحيح للمنطق)

//     // 1. التحقق من أن جميع الحقول مملوءة
//     if(name === "" || email === "" || password === "") {
//         resultCheck.style.display="block";
//         resultCheck.innerHTML = "All inputs are required.";
//         resultCheck.classList.remove("text-success");
//         resultCheck.classList.add("text-danger");
//         return; // توقف التنفيذ هنا
//     }

//     // 2. التحقق من صحة الفورمات باستخدام RegEx (لكل حقل على حدة)
//     if(!nameRegExp.test(name)) {
//         resultCheck.style.display="block";
//         resultCheck.innerHTML = "Please enter a valid name (letters and spaces only).";
//         resultCheck.classList.remove("text-success");
//         resultCheck.classList.add("text-danger");
//         return;
//     }
//     if(!emailRegExp.test(email)) {
//         resultCheck.style.display="block";
//         resultCheck.innerHTML = `Please enter a valid email address.
//                                  example: rawanhossam@gmail.com`;
//         resultCheck.classList.remove("text-success");
//         resultCheck.classList.add("text-danger");
//         return;
//     }
//     if(!passwordRegExp.test(password)) {
//         resultCheck.style.display="block";
//         resultCheck.innerHTML = `Password must be at least 8 characters long,
//                                  contain at least one uppercase letter, one lowercase letter,
//                                  one digit, and one special character.`;
//         resultCheck.classList.remove("text-success");
//         resultCheck.classList.add("text-danger");
//         return;
//     }

//     // ===> تم التصحيح هنا: 3. التحقق مما إذا كان الإيميل موجودًا بالفعل
//     // هذا الفحص يأتي بعد التأكد من أن الإيميل نفسه صحيح التنسيق
//     if (isEmailExist(email)) { // نستخدم الدالة isEmailExist اللي عملناها
//         resultCheck.style.display="block";
//         resultCheck.innerHTML = "This email is already registered. Please use another email or sign in.";
//         resultCheck.classList.remove("text-success");
//         resultCheck.classList.add("text-danger");
//         return; // توقف التنفيذ هنا لو الإيميل موجود
//     }

//     // 4. لو كل الشروط اللي فاتت تمام: إنشاء المستخدم وحفظه والانتقال للصفحة التالية
//     createUser(); // سيتم إضافة المستخدم لـ userArr وتحديث localStorage داخل هذه الدالة

//     // عرض رسالة النجاح
//     resultCheck.style.display="block";
//     resultCheck.innerHTML = "Registration successful!";
//     resultCheck.classList.remove("text-danger");
//     resultCheck.classList.add("text-success");

//     // ===> تم التعديل هنا: استخدام setTimeout لتأخير الانتقال ليرى المستخدم رسالة النجاح
//     setTimeout(function() {
//         window.location.href = "../loginPage.html";
//         // إذا كنتي تريدي تغيير نص الزر لـ "Login" على نفس الصفحة قبل الانتقال (غالباً لن تظهر لأنها ستنتقل)
//         // registerButton.innerHTML = "Login";
//     }, 1500); // 1.5 ثانية تأخير

//     // مسح الحقول بعد التسجيل الناجح (اختياري)
//     yourName.value = "";
//     yourEmail.value = "";
//     yourPassword.value = "";
// }


// loginLink.addEventListener("mousemove", function() {
//     loginLink.classList.remove("text-decoration-none");
//     loginLink.classList.add("text-decoration-underline");
// });

// loginLink.addEventListener("mouseleave", function() {
//     // ===> تم التصحيح هنا: كان في اختلاف في اسم الكلاس (text-underline vs text-decoration-underline)
//     loginLink.classList.remove("text-decoration-underline");
//     loginLink.classList.add("text-decoration-none");
// });