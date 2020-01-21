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
        let featured_rooms = rooms.filter(room => room.featured)
        this.setState({ rooms, sorted_rooms: rooms, featured_rooms, })
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

    getRoom = (slug) => {
        let temp_rooms = [...this.state.rooms]
        let room = temp_rooms.find(room => room.slug === slug)
        return room
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom
            }} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
