import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    static propTypes = {
        prop: PropTypes
    }
    
    constructor(props) {
        super(props)
        this.state = {
            services: [
               { icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet."
            },
            { icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet."
            },
            { icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet."
            },
            { icon: <FaBeer />,
                title: "Best Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet."
            },
            ]
        }
    }

    render() {
        return (
            <div className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((service,index) => 
                    <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>)}
                </div>
            </div>
        )
    }
}
