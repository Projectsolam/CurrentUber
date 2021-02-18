import React from "react"
const driverID = 1
​
// const newRiders = [
//     {
//         name: 'Chris',
//         trip: {
//             from: '123 fake st',
//             to: '567 psedo st'
//         }
//     },
//     {
//         name: 'John',
//         trip: {
//             from: '962 queens st',
//             to: '412 brooklyn st'
//         }
​
//     },
//     {
//         name: 'Annette',
//         trip: {
//             from: '35 40th st',
//             to: '20 80th st'
//         }
​
//     },
// ]
​
​
class NewRiders extends React.Component {
    constructor() {
        super()
        this.state = {
            waitingTrips: [],
            driver: {},
            newChange: false,
            pickedUp: false,
            pickedUpRider: ''
        }
​
        this.handleSubmit = this.handleSubmit.bind(this)
    }
​
    componentDidMount() {
        this.getNewRiders()
    }
​
    componentDidUpdate() {
        if (this.state.newChange) this.getNewRiders()
    }
​
    getNewRiders() {
        // console.log('getting trips')
        // // setTimeout(() => {
        // //     this.setState({
        // //         trips,
        // //         newChange: false,
        // //         isLoaded: true
        // //     })
        // // }, 2000)
        fetch('http://localhost:3000/trips/waiting')
            .then((response) => {
                console.log('response', response)
                return response.json()
            })
            .catch((error) => {
                console.log("error", error)
            })
            .then((waitingTrips) => {
                this.setState({
                    waitingTrips,
                    newChange: false,
                    isLoaded: true
                })
            })
    }
    
    handleSubmit(name) {
        const pickedUpTrip = {
            riderName: name,
            driverID
        }
        this.setState({
            pickedUp: true,
            driver: {
                "id": 1,
                "driverLicenseNumber": null,
                "carMakeAndModel": null,
                "carLicensePlateNumber": null,
                "latitude": "56.5",
                "longitude": "40",
                "userID": null,
                "hasDrivenManyRiders": null,
                "createdAt": "2021-01-28T01:14:47.177Z",
                "updatedAt": "2021-01-28T01:14:47.177Z"
            },
            waitingTrips: [],
            pickedUpRider: name
        })
        // setTimeout(() => {
        //     this.setState({
        //         pickedUp: true,
        //         driver: {
        //             "id": 1,
        //             "driverLicenseNumber": null,
        //             "carMakeAndModel": null,
        //             "carLicensePlateNumber": null,
        //             "latitude": "56.5",
        //             "longitude": "40",
        //             "userID": null,
        //             "hasDrivenManyRiders": null,
        //             "createdAt": "2021-01-28T01:14:47.177Z",
        //             "updatedAt": "2021-01-28T01:14:47.177Z"
        //         },
        //         waitingTrips: [],
        //         pickedUpRider: name
        //     })
        // }, 2000)
        // console.log('trip', trip)
        // const url = "http://localhost:3000/trips/pickUp"
        // console.log('pickedUpTrip', pickedUpTrip)
        // const pickedUpResponse = fetch(url, {
        //     method: "PUT",
        //     body: JSON.stringify(pickedUpTrip)
        // }).then((response) => {
        //     const json = response.json()
        //     return json
        // }).then((driver) => {
        //     this.setState({
        //         pickedUp: true,
        //         driver,
        //         waitingTrip: [],
        //         pickedUpRider: name
        //     })
        // })
        // return pickedUpResponse
​
    }
​
    render() {
        if (this.state.pickedUp) {
            return (
            <div>
                <div>You're picking up: {this.state.pickedUpRider}</div>
                <div>Driver Location: {this.state.driver.latitude}</div>
            </div>
            )
        } else if (this.state.isLoaded) {
            return (
                <div className="Rider">
                    <ul>
                        {this.state.waitingTrips.map((waitingTrip) => {
                            const tripStyle = {
                                color: "white",
                                backgroundColor: "DodgerBlue",
                                padding: "10px",
                                fontFamily: "Arial",
                                margin: "20px"
                            }
                            // <div style={tripStyle}>
                            return (
                                <div style={tripStyle} key={waitingTrip.riderName}>
                                    <div>{waitingTrip.riderName}</div>
                                    <div>from latitude: {waitingTrip.fromLatitude}</div>
                                    <div>Destination latitude: {waitingTrip.toLatitude}</div>
​
                                    <button onClick={() => this.handleSubmit(waitingTrip.riderName)}>Pick Up</button>
​
                                </div>
​
                            )
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default NewRiders;