// DON'T
const isEvenNumber = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

// DO
const isEvenNumber2 = (number) => {
    if (number % 2 === 0) {
        return true
    }
    return false
}
