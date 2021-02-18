
import React from "react"

class ThingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            newChange: false
        }
        this.state[props.listKey] = []
        this.state[props.itemKey] = {}
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        if (this.state.newChange) this.getData()
    }

    getData() {
        console.log('getting data')
        console.log('apiUrl', this.props.data.apiUrl)
        fetch(this.props.data.apiUrl)
        .then((response) => {
            return response.json()
        })
        .then((list) => {
            console.log('list', list)
            const newState = {
                newChange: false,
                isLoaded: true
            }
            newState[this.props.data.listKey] = list
            this.setState(newState)  
        })
    }

    render() {
        const list = this.state[this.props.data.listKey]
        if (this.state.isLoaded) {
            return (
                <div className="Item">
                    <h1>{this.props.data.listKey}</h1>
                    <ul>
                        {list.map((item) => { 
                            const itemStyle = {
                                color: "white",
                                backgroundColor: "DodgerBlue",
                                padding: "10px",
                                fontFamily: "Arial",
                                margin: "20px"
                            }

                            const itemKeys = Object.keys(item)
                            return (
                                <div style={itemStyle}> 
                                    {itemKeys.map((itemKey) => {
                                        if (item[itemKey]) {
                                            return <div>{itemKey}: {item[itemKey]}</div>
                                        }
                                    })}
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



export default ThingList;