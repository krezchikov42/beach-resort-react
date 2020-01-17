import React from 'react'
import loading_gif from '../images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading</h4>
            <img src={loading_gif} />
        </div>
    )
}

export default Loading
