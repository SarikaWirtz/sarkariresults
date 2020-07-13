import React, { Component } from 'react'
import data from '../../data/data.json'

class LatestResultDetail extends Component {
    state = {
          
         news: null
        
    }
    componentDidMount() {
        //  console.log(this.props);
         let id = this.props.match.params.latest_result_id;
        //  const data = import('../../data/data.json');
            data.map( response => {
                //  console.log(response);
                if(response.id == id) {
                    this.setState({
                        news: response
                     })
                }  
             })
    }
    render() {
          console.log(this.state.news);
         const Latestnews = this.state.news ? (
         <div className="news">
             {this.state.news.title}
            <p>{this.state.news.id}</p>
         </div>
         ) : (
             <div>
            <p>Loading post</p>
            </div>
         )
        return (
            <div>
            <h4>route parameter - </h4>
            <h3>{Latestnews}</h3>
        </div>
        )
        
    }
}

export default LatestResultDetail