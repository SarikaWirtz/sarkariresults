import React from 'react'
import { Button } from 'react-materialize'

const AdmitCardCard = () => {
    return(
        <div className="card-wrapper">
            <div className="card-title bold white-text">Latest Results</div>
            <ul>
                <li><a href="#!" target="_blank">Link 1</a></li>
                <li><a href="#!" target="_blank">Link 2</a></li>
                <li><a href="#!" target="_blank">Link 3</a></li>
                <li><a href="#!" target="_blank">Link 4</a></li>
            </ul>
            <Button className="view-more right"
                href="#"
                node="a"
                waves="light"
                >
                View More
            </Button>
        </div>
    )
}

export default AdmitCardCard