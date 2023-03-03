// DON'T (arguments object is only available in regular functions, but not arrow functions)
function myFirstFunction () {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return total
}
console.log(myFirstFunction(1, 2, 5))

// DO
const mySecondFunction = (...numbers) => {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    return total
}
console.log(mySecondFunction(1, 2, 5))
