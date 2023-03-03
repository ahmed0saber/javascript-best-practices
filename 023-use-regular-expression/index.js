// DON'T (sometimes)
const validateEmailWithoutRegex = (email) => {
    if(email === ""){
        console.log("Email is required")
    }else if(email.trim() === ""){
        console.log("Email can't be just spaces")
    }else if(email.indexOf("@") === -1){
        console.log("Email must contain @")
    }else if(email.length < 8){
        console.log("Email can't be less than 8 characters")
    }else{
        console.log("Email is valid")
    }
}

// DO
const validateEmailWithRegex = (email) => {
    const EMAIL_PATTERN = /^[a-z]\w{2,}@\w{2,}\.\w{2,}$/
    if(EMAIL_PATTERN.test(email)){
        console.log("Email is valid")
    }else {
        console.log("Email is not valid")
    }
}
