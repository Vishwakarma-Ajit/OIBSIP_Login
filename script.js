const formOpenBtn = document.querySelector("#open"),
home = document.querySelector(".home"),
container = document.querySelector(".container"),
closeBtn = document.querySelector(".close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
closeBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon =>{
    icon.addEventListener("click", () =>{
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
    })
})

signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    container.classList.add("active");
})
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    container.classList.remove("active");
})