import React from 'react';

const users = []
import React from "react"
class RiderIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            riders: [], 
            isLoaded: false,
            user: {
                driversLicenseNumber: "", 
                userid: "", 
                carLicensePlateNumber: "", 
                latitude: "", 
                longitude: "", 
                hasmanyrides: "", 
                hasdrivenmanyridersl: "",
        }
        this.handleDriversLicenseNumberChange = this.handleDriversLicenseNumberChange.bind(this)
        this.handleUserId = this.handleUserId.bind(this)
        this.handleCarLicensePlateNumberChange = this.handleCarLicensePlateNumberChange.bind(this)
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.handleHasManyRidesChange = this.handleHasManyRidesChange.bind(this)
        this.handleHasDrivenManyRidersChange = this.handleHasDrivenManyRidersChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getRiders()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getRiders()
    }

    getRiders() {
        fetch('http://localhost:3000/users')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((users) => {
            console.log("users", users)
            setTimeout(()=> {
                this.setState({
                    users, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  


        let 
      
    }
    handleDriversLicenseNumberChange(event) {
        this.setState({
            rider: Object.assign(
                {}, 
                this.state.rider,
                {
                    driversLicenseNumber: event.target.value   
                }
            )
        })
    }
    handlePasswordChange(event) {
        this.setState({
            user: Object.assign(
                {}, 
                this.state.user,
                {
                  password: event.target.value  
                }
            )
        })
    }    
    handleSubmit() {
        const user = {
            username: this.state.user.username, 
            password: this.state.user.password
        }
        console.log("user", user)
        const url = "http://localhost:3000/users"
        const userResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(user) 
        }) .then((response) => {
            const json = response.json()
            return json
        }).then((json) => {
            this.setState({
              newChange: true  
            })
        })
        return userResponse
    }
    render() {
        if (this.state.isLoaded) {
            return(
                <div>
                    <label> username
                        <input type="text" name="username" value={this.state.user.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label> password
                        <input type="text" name="password" value={this.state.user.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create user </button>
                    {this.state.users.map((user) => <div>{user.username}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}

export default Rider;