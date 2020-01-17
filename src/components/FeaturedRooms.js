import React, { Component } from 'react'
import {RoomContext} from "../context"
export default class FeaturedRooms extends Component {
    
    static contextType = RoomContext
    
    render() {
        const {featured_rooms: rooms} = this.context
        console.log(rooms)
        
        return (
            <div>
                
            </div>
        )
    }
}
