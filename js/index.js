//!==================--| global |--====================//
//----------- all data users
let arrayData=[];
//----------- variable Show And Hides --> View the user password
const forms = document.querySelector(".forms");
let pwshowHideLogin = document.querySelectorAll(".bi-eye-slash");
const formsSignUp = document.querySelector("formsSignUp")
let pwshowHideSignUp = document.querySelectorAll(".bi-eye-slash");
//----------- SignUp
let userNameSignUp = document.getElementById("userNameSignUp");
let userEmailSignUp = document.getElementById("userEmailSignUp");
let userPasswordSignUp= document.getElementById("userPasswordSignUp");
let validateRequiredSignUp = document.getElementById("validateRequiredSignUp")
let vRequiredSuccessSignUp = document.getElementById("vRequiredSuccessSignUp")
let vRequiredEmailSignUp = document.getElementById("vRequiredEmailSignUp")
let signUp = document.getElementById("signUp");
//----------- Login
let userEmailLogin = document.getElementById("userEmailLogin");
let userPasswordLogin = document.getElementById("userPasswordLogin");
let validateRequiredLogin = document.getElementById("validateRequiredLogin");
let vRequiredIncorrectLogin = document.getElementById("vRequiredIncorrectLogin");
let login = document.getElementById("login");
//-----------logout
let logout = document.getElementById("logout");
let welcomeName = document.getElementById("welcomeName");
//!==================--| start |--====================//
//----------- localStorage --> data is used to store

if (localStorage.getItem("DetaType") != null){
    arrayData = JSON.parse(localStorage.getItem("DetaType"));
}
//----------- Show And Hides Login --> View the user password
pwshowHideLogin.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=> {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".userPassword");
        pwFields.forEach(password =>{
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bi-eye-slash","bi-eye")
                eyeIcon.classList.replace("text-white-50","text-white")
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bi-eye","bi-eye-slash")
            eyeIcon.classList.replace("text-white","text-white-50")
        })
    })
})
//----------- Show And Hides SignUp --> View the user password
pwshowHideSignUp.forEach(eyeIcon => {
    eyeIcon.addEventListener("click",()=>{
        let pwFieldsSignUp = eyeIcon.parentElement.parentElement.querySelectorAll(".userPasswordSignUp");
        pwFieldsSignUp.forEach(password =>{
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bi-eye-slash","bi-eye")
                eyeIcon.classList.replace("text-white-50","text-white")
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bi-eye","bi-eye-slash")
            eyeIcon.classList.replace("text-white","text-white-50")
        })
    })
})
//!==================--| events |--====================//
//-----------login
if(login != null){
    login.addEventListener("click",()=>{
        if(userEmailLogin.value ==""|| userPasswordLogin.value ==""){
            validateRequiredLogin.classList.remove("d-none")
            vRequiredIncorrectLogin.classList.add("d-none")
        }
        else{
            dataInput()
            userEmailLogin.value="";
            userPasswordLogin.value="";
            validateRequiredLogin.classList.add("d-none")
        }
    })
}
//-----------signUp
if(signUp !=null){
    signUp.addEventListener("click",function(){
        if(userNameSignUp.value == "" || userEmailSignUp.value == "" || userPasswordSignUp.value == ""){
            validateRequiredSignUp.classList.remove("d-none");
        }
        else{
            revision()
        }
    })
}
//!==================--| functions |--====================//
//-----------login
var emptyName;
function dataInput(){
    let tags = false;
    for(let i=0;i<arrayData.length;i++){
        if(userEmailLogin.value == arrayData[i].email && userPasswordLogin.value == arrayData[i].password){
            emptyName = arrayData[i].name;
            localStorage.setItem("dataStorage",new String(emptyName));
            window.location.href = "smartLogin.html"
            tags = true;
        }
    }
    if(tags==false){
        vRequiredIncorrectLogin.classList.remove("d-none");
    }
}
//-----------signUp
function revision(){
    let tages = false;
    for(let x=0;x<arrayData.length; x++){
        if(userEmailSignUp.value == arrayData[x].email){
            vRequiredEmailSignUp.classList.remove("d-none");
            tages = true;
            vRequiredSuccessSignUp.classList.add("d-none");
            
        }
    }
    if(tages == false){
        boxData();
    }
}
function boxData(){
    vRequiredEmailSignUp.classList.add("d-none");
    var objData ={
        name: userNameSignUp.value,
        email: userEmailSignUp.value,
        password: userPasswordSignUp.value,
    }
    arrayData.push(objData);
    localStorage.setItem("DetaType" , JSON.stringify(arrayData));
    vRequiredSuccessSignUp.classList.remove("d-none")
    clearInput()
}
function clearInput(){
    userNameSignUp.value = "";
    userEmailSignUp.value = "";
    userPasswordSignUp.value ="";
    validateRequiredSignUp.classList.add("d-none")
}
//!==================--| validation |--====================//
if(logout != null){
    welcomeName.innerHTML = "Welcome =>" + localStorage.getItem("dataStorage");
}
if(logout != null){
    logout.addEventListener("click", function(){
        window.location.href = "index.html";
    })
}





