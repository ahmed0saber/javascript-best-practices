// DON'T
document.querySelector(".validation-message").textContent = "username is required"
document.querySelector(".validation-message").classList.add("text-danger")
document.querySelector(".validation-message").classList.remove("d-none")

// DO
const validationMessage = document.querySelector(".validation-message")
validationMessage.textContent = "username is required"
validationMessage.classList.add("text-danger")
validationMessage.classList.remove("d-none")
