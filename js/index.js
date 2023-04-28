var form = document.querySelector("form");
var emailField = form.querySelector(".field");
var emailInput = emailField.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
})

function checkEmail()
{
    var emailError   = document.querySelector(".error-txt");
    var emailCorrect = document.querySelector(".correct");
    var submit       = document.querySelector(".submit");
    var mail         = document.querySelector(".mail");
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.value == "")
    {
        emailField.classList.add("error");
        emailError.textContent = "Whoops, you forgot to enter your email address!";
    }
    else if(!emailInput.value.match(emailPattern))
    {
        emailField.classList.add("error");
        emailError.textContent = "❌ Please provide a valid email address"
    }
    else{
        emailCorrect.textContent = "✅ You will be notified";
        emailField.classList.add("correct");
        emailField.classList.remove("error");
        submit.classList.add("invisible");
        mail.classList.add("invisible");
        
    }
}