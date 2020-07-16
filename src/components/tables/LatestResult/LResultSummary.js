import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import { Button } from 'react-materialize'
// import axios from 'axios'
// import data from '../../data/data.json'

class LResultSummay extends Component {

     state = {
         latestresultdata: [ ]
     }
     componentDidMount() {
         import('../../data/data.json')
         .then( res => {
            //  console.log(res)
             this.setState({
                latestresultdata: res.default.slice(0,5)
             })
         })
     }
    render() {
         const {latestresultdata} = this.state;
        //   console.log(latestresultdata);
         const newsList = latestresultdata.length ? (
             latestresultdata.map(news => {
                return (
                    <li key={news.id}>
                        <Link to={'/latestresult/' + news.id} >{news.nameOfPost} </Link>
                    </li>
                )
            })
         ) : (
             <div className="center">
                No post yet
            </div>
         )
        return (
            <div className="card-wrapper">
                <div className="card-title bold white-text">Latest Results</div>
                <ul>
                    {newsList}
                </ul>
                <Button className="view-more right" href="#" node="a">
                    View More
                </Button>
             </div>
        )
    }
}

export default LResultSummay