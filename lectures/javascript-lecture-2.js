function addsTwo(numbers) {
    const addedByTwo = []

    for (let i = 0; i < numbers.length; i++) {
        addedByTwo.push(numbers[i] + 2)
    }

    return addedByTwo
}

function addsTwoMap(numbers) {
    const addedByTwo = numbers.map((number) => {
        return number + 2
    })

    return addedByTwo
}


const integers = [1,2,3,4,5]
const otherIntegers = [10, 5, 4]

// console.log('result of adds Two', addsTwo(otherIntegers))
// console.log('result of adds Two with map', addsTwoMap(otherIntegers))

//foreach

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}

function printNumberswithForEach(numbers) {
    numbers.forEach((number) => {
        console.log(number)
    })
}

// console.log('result of adds Two', addsTwo(otherIntegers))
// printNumberswithForEach(integers)

function getEvens(numbers) {
    const evens = []
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number % 2 === 0) evens.push(number)
    }

    return evens
}

function getEvensWithFilter(numbers) {
    const evens = numbers.filter((number) => {
        if (number % 2 === 0) return number
    })
    return evens
}

// console.log('result of getEvens', getEvensWithFilter(integers))

function homemadeJoin(numbers) {
    let joined = ''
    for (let i = 0; i < numbers.length; i++) {
        joined += numbers[i]
    }

    return joined
}

function mdnJoin(numbers) {
    return numbers.join(', ')
}

console.log('result of join', mdnJoin(integers)) 