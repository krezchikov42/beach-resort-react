import React, { Component } from 'react'
import defaultImg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
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

    static contextType = RoomContext

    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (room === null || room === undefined) {
            return <div className="error">
                <h3>no such room can be found...</h3>
                <Link to="/room" className="btn-primary">
                    Back to rooms
                </Link>

            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`} >
                        <Link to='/rooms' className="btn-primary">
                            Back to rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((image, index) => <img key={index} src={image} alt={name} />)}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : $ {price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast"}</h6>
                        </article>

                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => <li key={index}>- {item}</li>)}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom
