const myArray = []
for (let i = 0; i < 1000; i++) {
    myArray.push(i)
}

// DON'T
console.time("Not Optimized Loop")
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = i
}
console.timeEnd("Not Optimized Loop") // Not Optimized Loop: 0.274ms

// DO
console.time("Optimized Loop")
const arrayLength = myArray.length
for (let i = 0; i < arrayLength; i++) {
    myArray[i] = i
}
console.timeEnd("Optimized Loop") // Optimized Loop: 0.083ms
