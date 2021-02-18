import React from "react"
​
​
const myRiderID = 5
​
class Trip extends React.Component {
    constructor() {
        super()
        this.state = {
            trips: [],
            isLoaded: false,
            trip: {
                riderID: '',
                fromLatitude: '',
                fromLongitude: '',
                driverID: '',
                toLatitude: '',
                toLongitude: '',
                price: ''
            },
            newChange: false
        }
        this.handleTripChange = this.handleTripChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
​
    }
​
    componentDidMount() {
        this.getTrips()
    }
​
    componentDidUpdate() {
        if (this.state.newChange) this.getTrips()
    }
​
    getTrips() {
        console.log('getting trips')
        // setTimeout(() => {
        //     this.setState({
        //         trips,
        //         newChange: false,
        //         isLoaded: true
        //     })
        // }, 2000)
        fetch('http://localhost:3000/trips/rider/' + myRiderID)
            .then((response) => {
                console.log('response', response)
                return response.json()
            })
            .catch((error) => {
                console.log("error", error)
            })
            .then((trips) => {
                this.setState({
                    trips,
                    newChange: false,
                    isLoaded: true
                })
            })
    }
​
    handleTripChange(event) {
        const newTrip = {}
        newTrip[event.target.name] = event.target.value
        this.setState({
            trip: Object.assign(
                {},
                this.state.trip,
                newTrip
            )
        })
    }
​
    handleSubmit() {
        console.log('Hello Rider')
        const trip = {
            riderID: this.state.trip.riderID,
            driverID: this.state.trip.driverID,
            fromLatitude: this.state.trip.fromLatitude,
            fromLongitude: this.state.trip.fromLongitude,
            toLatitude: this.state.trip.toLatitude,
            tolongitude: this.state.trip.toLongitude
        }
​
        console.log('trip', trip)
        const url = "http://localhost:3000/trips"
        const tripResponse = fetch(url, {
            method: "POST",
            body: JSON.stringify(trip)
        }).then((response) => {
            const json = response.json()
            return json
        }).then((json) => {
            this.setState({
                newChange: true
            })
        })
        return tripResponse
        // riders.push(rider)
​
​
        // return riders
​
    }
​
    render() {
        if (this.state.isLoaded) {
            return (
                <div className="Rider">
                    <label>price
                    <input type="text" name="price" value={this.state.trip.price} onChange={this.handleTripChange} />
                    </label>
​
                    <label>riderID
                    <input type="text" name="riderID" value={this.state.trip.riderID} onChange={this.handleTripChange} />
                    </label>
​
                    <label>driverID
                    <input type="text" name="driverID" value={this.state.trip.driverID} onChange={this.handleTripChange} />
                    </label>
​
                    <label>fromLongitude
                    <input type="text" name="fromLongitude" value={this.state.trip.fromLongitude} onChange={this.handleTripChange} />
                    </label>
​
                    <label>fromLatitude
                    <input type="text" name="fromLatitude" value={this.state.trip.fromLatitude} onChange={this.handleTripChange} />
                    </label>
​
                    <label>toLatitude
                    <input type="text" name="toLatitude" value={this.state.trip.toLatitude} onChange={this.handleTripChange} />
                    </label>
​
                    <label>toLongitude
                    <input type="text" name="toLongitude" value={this.state.trip.toLongitude} onChange={this.handleTripChange} />
                    </label>
​
​
                    <button onClick={this.handleSubmit}>Sign up</button>
​
                    <ul>
                        {this.state.trips.map((trip) => {
                            const tripStyle = {
                                color: "white",
                                backgroundColor: "DodgerBlue",
                                padding: "10px",
                                fontFamily: "Arial",
                                margin: "20px"
                            }
​
​
                            return (
                                <div style={tripStyle}>
                                    <div>
                                        <div>Price:</div>
                                        <div>{trip.price}</div>
​
                                    </div>
                                    <div>
                                        <div>Rider ID:</div>
                                        <div>{trip.riderID}</div>
                                    </div>
                                    <div>
                                        <div>From Latitude:</div>
                                        <div>{trip.fromLatitude}</div>
                                    </div>
                                    <div>
                                        <div>From Longitude:</div>
                                        <div>{trip.fromLongitude}</div>
                                    </div>
                                    <div>
                                        <div>Driver ID:</div>
                                        <div>{trip.driverID}</div>
                                    </div>
                                    <div>
                                        <div>To Latitude:</div>
                                        <div>{trip.toLatitude}</div>
                                    </div>
                                    <div>
                                        <div>To Longitude:</div>
                                        <div>{trip.toLongitude}</div>
​
                                    </div>
                                </div>
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
​
export default Trip