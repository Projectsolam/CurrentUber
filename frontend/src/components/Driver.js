import React from "react"

const drivers = [

]


class Driver extends React.Component {
    constructor() {
        super()
        this.state = {
            drivers: [],
            isLoaded: false,
            driver: {
                driverLicenseNumber: '',
                userID: '',
                carLicensePlateNumber: '',
                latitude: '',
                longitude: '',
                carMakeAndModel: '',
                hasDrivenManyRiders: '',
            },
            newChange: false
        }

        this.handleDriverLicenseNumberChange = this.handleDriverLicenseNumberChange.bind(this)
        this.handleUserIDChange = this.handleUserIDChange.bind(this)
        this.handleCarLicensePlateNumberChange = this.handleCarLicensePlateNumberChange.bind(this)
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.handleCarMakeAndModelChange = this.handleCarMakeAndModelChange.bind(this)
        this.handleHasDrivenManyRidersChange = this.handleHasDrivenManyRidersChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)



    }

    componentDidMount() {
        this.getDrivers()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getDrivers()
    }
    getDrivers() {
        console.log('getting drivers')
        // setTimeout(() => {
        //     this.setState({
        //         drivers,
        //         newChange: false,
        //         isLoaded: true
        //     })
        // }, 2000)
        fetch('http://localhost:3000/drivers')
        .then((response) => {
            console.log('response', response)
            return response.json()
        })
        .catch((error) => {
            console.log ("error", error)
        })
        .then((drivers) => {
            this.setState({
                drivers,
                newChange: false,
                isLoaded: true
            })
        })

        
    }

    handledriverLicenseNumberChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    driverLicenseNumber : event.target.value
                }
            )
        })

    }

    handleUserIDChange(event) {
        this.setState({
            userID: Object.assign(
                {},
                this.state.driver,
                {
                    userID: event.target.value
                }
            )
        })

    }
    handleCarLicensePlateNumberChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    carLicensePlateNumber: event.target.value
                }
            )
        })

    }
    handleLatitudeChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    latitude: event.target.value
                }
            )
        })

    }
    handleLongitudeChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    longitude: event.target.value
                }
            )
        })

    }
    handleCarMakeAndModelChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    carMakeAndModel: event.target.value
                }
            )
        })

    }
    handleHasDrivenManyRidersChange(event) {
        this.setState({
            driver: Object.assign(
                {},
                this.state.driver,
                {
                    HasDrivenManyRiders: event.target.value
                }
            )
        })

    }

    handleSubmit() {
        console.log('Hello Driver')
        const user = {
            driverLicenseNumber: this.state.driver.driverLicenseNumber,
            userID: this.state.driver.userID,
            carLicensePlateNumber: this.state.driver.carLicensePlateNumber,
            latitude: this.state.driver.latitude,
            longitude: this.state.driver.longitude,
            carMakeAndModel: this.state.driver.carMakeAndModel,
            hasDrivenManyRiders: this.state.driver.hasDrivenManyRiders,
        }
        console.log('driver', driver)
        const url = "http://localhost:3000/drivers"
        const driverResponse = fetch(url, {
            method: "POST",
            body: JSON.stringify(driver)
        }).then((response) => {
            const json = response.json()
            return json
        }).then((json) => {
            this.setState({
                newChange: true
            })
        })
            return driverResponse
        // drivers.push(driver)
        
    
        // return drivers
    
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="Driver">
                    <label >driverLicenseNumber
                    <input type="text" name="driverLicenseNumber" value={this.state.driver.driverLicenseNumber} onChange={this.handleDriverLicenseNumberChange} />
                    </label>
                    <label>userID
                    <input type="text" name="userID" value={this.state.driver.userID} onChange={this.handleUserIdChange} />
                    </label>
                    <label>carLicensePlateNumber
                    <input type="text" name="carLicensePlateNumber" value={this.state.driver.carLicensePlateNumber} onChange={this.handleCarLicensePlateNumberChange} />
                    </label>
                    <label>latitude
                    <input type="text" name="latitude" value={this.state.driver.latitude} onChange={this.handleLatitudeChange} />
                    </label>
                    <label>carMakeAndModel
                    <input type="text" name="carMakeAndModel" value={this.state.driver.carMakeAndModel} onChange={this.handleCarMakeAndModelChange} />
                    </label>
                    <label>hasDrivenManyRiders
                    <input type="text" name="hasDrivenManyRiders" value={this.state.driver.hasDrivenManyRiders} onChange={this.handleHasDrivenManyRidersChange} />
                    </label>
                    <label>longitude
                    <input type="text" name="longitude" value={this.state.driver.longitude} onChange={this.handleLongitudeChange} />
                    </label>

                    <button onClick={this.handleSubmit}>Sign up</button>

                    <ul>
                        {drivers.map((driver) => {
                            return (
                                <div>
                                    <div>{driver.driverLicenseNumber}</div>
                                    <div>{driver.userID}</div>
                                    <div>{driver.carLicensePlateNumber}</div>
                                    <div>{driver.latitude}</div>
                                    <div>{driver.carMakeAndModel}</div>
                                    <div>{driver.hasDrivenManyRiders}</div>
                                    <div>{driver.longitude}</div>
                                </div>
                            )})}
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


export default Driver;