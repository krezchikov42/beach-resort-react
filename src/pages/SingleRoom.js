import React, { Component } from 'react'
import defaultImg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'


export class SingleRoom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }
    }
    
    static contextType= RoomContext

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if (room === null || room === undefined ){
            return <div className="error">
                <h3>no such room can be found...</h3>
                <Link to="/room" className="btn-primary">
                    Back to rooms
                </Link>

            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        return (
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`} >
                    <Link to='/rooms' className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
        )
    }
}

export default SingleRoom
