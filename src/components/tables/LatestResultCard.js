import React, { Component } from 'react'
import { Button } from 'react-materialize'

class LatestResultCard extends Component {
    state = {
        jobdetails: [
            {title: 'RSMSSB Livestock Assistant Final Selection List 2020', id: 1},
            {title: 'Haryana Board Class 10th Result 2020', id: 2},
            {title: 'RPSC RAS 2018 Mains Exam Result', id: 3},
            {title: 'SSC JHT 2019 Tier II Marks', id: 4},
            {title: 'SSC JHT 2019 Tier II Marks', id: 5},
            {title: 'SSC JHT 2019 Tier II Marks', id: 6},
        ]
    }
    
    render() {
        // console.log(this.state);
        return (
            <div className="card-wrapper">
                <div className="card-title bold white-text">Latest Results</div>
                <ul>
                {this.state.jobdetails && this.state.jobdetails.map(jobdetail => {
                        // console.log(jobdetail);
                        return (
                        <li><a className="" href="#!" target="_blank" alt=''>{jobdetail.title}</a></li>
                        )
                    })}
                </ul>
                <Button className="view-more right" href="#" node="a">
                    View More
                </Button>
            </div>
        )
    }
}

export default LatestResultCard