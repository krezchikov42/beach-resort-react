import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <RoomContext.Provider value="hello" >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}
