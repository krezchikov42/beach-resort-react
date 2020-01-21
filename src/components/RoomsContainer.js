import React from 'react'
import { RoomConsumer } from '../context'
import Loading from './Loading'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

export default function RoomsContainer() {
    return (
        <RoomConsumer>{value => {
            const {loading,sortedRooms,rooms} = value
            return <div>
                <RoomFilter rooms/>
                <RoomList rooms={sortedRooms}/>
            </div>
        }}</RoomConsumer>
    )
}
