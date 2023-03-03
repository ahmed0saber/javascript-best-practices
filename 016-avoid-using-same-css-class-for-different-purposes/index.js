// DON'T
const toggleModal = () => {
    document.querySelector(".modal").classList.toggle("active")
    document.body.classList.toggle("overflow")
}

const toggleDropdown = () => {
    document.querySelector(".dropdown").classList.toggle("active")
    document.body.classList.toggle("overflow")
}



// DO
const toggleModal2 = () => {
    document.querySelector(".modal").classList.toggle("active")
    document.body.classList.toggle("overflow--modal")
}

const toggleDropdown2 = () => {
    document.querySelector(".dropdown").classList.toggle("active")
    document.body.classList.toggle("overflow--dropdown")
}
