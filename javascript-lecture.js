// For Homework you will:
// write a function that collects all the numbers in an array that are under 10
// test the function by running the file (using node) and console.logging the result
// write a function that given a car object (as an argument), changes it's make attribute to whatever is passed in (as an argument)
// test the function by running the file (using node) and console.logging the result



// write a function that collects all the numbers in an array that are under 10

function underTen(array) {
    const underTenNumbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            underTenNumbers.push(array[i])
        }
    }
    return underTenNumbers
}

const numbers = [1, 2, 3, 10, 20, 50]

// console.log("result of under ten function", underTen(numbers))


// write a function that given a car object (as an argument), changes it's make attribute to whatever is passed in (as an argument)


function changeMake(car, make) {
    car.make = make
    return car
}

function alternativeChangeMake(car, make) {
    car['make'] = make
    return car
}

function betterChangeMake(car, make) {
    const carWithNewMake = {}

    const carAttributes = Object.keys(car)

    for (let i = 0; i < carAttributes.length; i++) {
        const currentAttribute = carAttributes[i]
        if (currentAttribute === 'make') {
            carWithNewMake.make = make
        } else {
            carWithNewMake[currentAttribute] = car[currentAttribute]
        }
    }

    return carWithNewMake
}

function changeObjectValue(object, key, value) {
    const newObject = {}
    // newObject = []
    const objectAttributes = Object.keys(object)

    for (let i = 0; i < objectAttributes.length; i++) {
        const currentAttribute = objectAttributes[i]
        if (currentAttribute === key) {
            newObject[currentAttribute] = value
        } else {
            newObject[currentAttribute] = object[currentAttribute]
        }
    }

    return newObject
}

const car = {
    name: 'Flippy',
    make: 'Honda',
    model: 'XRV',
}

// const make = 'Acura'
// console.log('current car', car)
// console.log('result of changeModel', changeMake(car, make))

// const make = 'Acura'
// console.log('current car', car)
// console.log('result of changeModel', alternativeChangeMake(car, make))

// const make = 'Acura'
// console.log('current car', car)
// console.log('result of changeModel', betterChangeMake(car, make))

// const make = 'Acura'
// const key = 'make'
// console.log('current car', car)
// console.log('result of changeObjectValue', changeObjectValue(car, key, make))

const character = {
    name: 'Harry Potter',
    friends: ['ron', 'her'],
    year: 1
}

// characters = {}

// const year = 2
// const key = 'year'
// console.log('current character', character)
// console.log('result of changeObjectValue', changeObjectValue(character, key, year))


// let
// const 
// var

// function name() {

// }

// name()


// class UserComponent {

// }


// UserComponent