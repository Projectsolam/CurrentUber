const cars = [
    
]


// function go(to) {

// }
// const car1 = {
//     make: 'Honda',
//     model: 'Civic',
//     go: (to) => {
//         // car1.location = to
//         this.location = to
//     }
// }

const car2 = {
    make: 'Jeep',
    model: 'Cherokee',
    go: (to) => {
        car1.location = to
    }
}

// const car3 = {
//     make: 'Nissan',
//     model: 'Rogue',
//     go: (to) => {
//         car1.location = to
//     }
// }

// console.log('car1', car1)
// car1.go('New York')
// console.log('car1', car1)


// class Car {
//     constructor(make, model) {
//         this.make = make 
//         this.model = model
//     }

//     go(to) {
//         this.location = to
//     }
// }




// const car1 = new Car('Honda', 'Civic')
// const car3 = new Car('Nissan', 'Rogue')

// console.log('car1', car1)
// // console.log('car3', car3)

// car1.go('New York')
// console.log('car1', car1)

// function CarCreator(make, model) {
//     const newCar = {}
//     function go(to) {
//         newCar.location = to
//     }

//     newCar.make = make 
//     newCar.model = model
//     return {
//         make: make,
//         model: model,
//         go: go
//     }
// }
// const car10 = CarCreator('Toyota', 'Sienna')
// console.log('car10', car10)
// car10.go('New York')
// console.log('car10', car10)


class Component {
    constructor(state) {
        this.state = state
    }

    setState(newState) {
        this.state = newState
        this.render()
        // setTimeout(() => this.state = newState, 0)
    }

    render() {
        const html = this.state.join(', ')

        console.log(html)
    }
}

const userList = new Component(['john', 'joe', 'jim', 'bob'])
console.log('userList before setstate', userList)
userList.render()
userList.setState(['sally', 'peggy', 'sue'])
// setTimeout(() => console.log('userLlist after setState', userList), 3000)
// userList.render()