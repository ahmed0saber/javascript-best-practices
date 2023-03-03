// if you want to change the text content of an element, use the specific property that can do that

// DON'T
document.querySelector(".error").innerHTML = "username is required"

// DO
document.querySelector(".error").textContent = "username is required"



// if you want to hide the x-direction overflow of an element, use the specific property that can do that

// DON'T
document.querySelector(".container").classList.add("hide-overflow") // hides x and y

// DO
document.querySelector(".container").classList.add("hide-overflow-x")
