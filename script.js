const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const forms = Array.from(document.querySelectorAll("form"));
const inputs = Array.from(document.querySelectorAll("input"));
const button = document.querySelector("button");
const errorImgs = Array.from(document.querySelectorAll("form img"));
const errorTxt = Array.from(document.querySelectorAll("h5"));
const emailError = document.querySelector("h6");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    for(let i = 0; i < 4; i++){
        let input = inputs[i];
        if(input.value !== ""){
            errorImgs[i].style.display = "none";
            errorTxt[i].style.display = "none"
        }
        if(input.value == ""){
            errorImgs[i].style.display = "block";
            errorTxt[i].style.display = "block"
        }
        if(emailRegex.test(inputs[2].value)){
            emailError.style.display = "none";
            errorImgs[2].style.display = "none";
        }
        if(!emailRegex.test(inputs[2].value) && inputs[2].value !== ""){
            emailError.style.display = "block";
            errorImgs[2].style.display = "block";
        }
        if(!emailRegex.test(inputs[2].value) && inputs[2].value === ""){
            emailError.style.display = "none";
            errorImgs[2].style.display = "block";
        }
    }
});

