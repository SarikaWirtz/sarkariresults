import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
import data from '../data/data.json'


const newdata = data.map( data => {
     //console.log(data);
    return (
    <li>
        <Link to={'/latestresult/' + data.id }>
            {data.title} + {data.id}
        </Link>
    </li>
    )
})

class LatestResultCardSummary extends Component {
        render() {
        // console.log(this.state);
        return (
            <div className="card-wrapper">
                <div className="card-title bold white-text">Latest Results</div>
                <ul>
                    {newdata}
                </ul>
                <Button className="view-more right" href="#" node="a">
                    View More
                </Button>
            </div>
        )
    }
}

export default LatestResultCardSummary