import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

class RoomProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            sorted_rooms: [],
            featured_rooms: [],
            loading: false

        }
    }

    componentDidMount() {
        let rooms = this.formatData(items)
    }

    formatData(data) {
        let temp_items = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room
        })
        return temp_items
    }
    
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
