import React, { Component } from 'react'
import data from '../../data/data.json'
import {Table, thread, th, tr, Row, Col} from 'react-materialize'

class LatestResultDetail extends Component {
    state = {
          
         latestresult: null,
         admitCardDetails: [],
         
    }
    componentDidMount() {
        //  console.log(this.props);
         let id = this.props.match.params.latest_result_id;
        //  const data = import('../../data/data.json');
            data.map( response => {
                if(response.id == id) {
                    this.setState({
                        latestresult: response,
                        admitCardDetails: response.admitCard.details || this.state.admitCardDetails,
                     })
                }  
             })
    }
    render() {
        
        //for admit card details
        const {admitCardDetails}  = this.state;
        const admitcardDetailList = admitCardDetails ? (
            
            admitCardDetails.map((list, index) => {
               return (
                   <li key={index} className="admitcard_detail_list">
                       {list.list}
                   </li>
               )
           })
        ) : (
            <div className="center">
               No post yet
           </div>
        )

       
        const Latestnews = this.state.latestresult ? (
        <div className="result container">
            <Table className="latestresult_header">
                <tbody>
                        <tr>
                            <td className="article_summary">
                                Name of Post:
                            </td>
                            <td className="article_summery_title left">
                                { this.state.latestresult.nameOfPost } 
                            </td>
                    
                        </tr>
                        <tr>
                            <td className="article_summary">
                                Post Update Date:
                            </td>
                            <td className="article_summery_date left bold">
                                { this.state.latestresult.postDate }
                            </td>
                    
                        </tr>
                        <tr>
                            <td className="article_summary">
                                Short Information
                            </td>
                            <td className="article_summary_information"> 
                                { this.state.latestresult.information }
                            </td>
                    
                        </tr>
                </tbody>
            </Table>

            <div className="latestresult_body">
                <Row>
                    <Col s={12}>
                        <div className="center heading-group">
                            <h2 className="tabletitle"> { this.state.latestresult.tabletitle } </h2>
                            <h3 className="tablesubTitle bold"> { this.state.latestresult.tableSubTitle } </h3>
                        </div>
                    </Col>
                </Row>  
            
                <Row>
                    <Col s={12} m={6}>
                        <h3 className="tablesubTitle bold"> { this.state.latestresult.admitCard.title } </h3>
                        <ul>
                            {admitcardDetailList}
                        </ul>
                    </Col>
                    <Col s={12} m={6} className="important_dates_wrapper">
                            <h3 className="tablesubTitle bold">  { this.state.latestresult.importantDates.title } </h3>
                        <ul>
                            { 
                                (this.state.latestresult.importantDates.details) ? ( 
                                    this.state.latestresult.importantDates.details.map((res, index) =>{ 
                                        return (
                                            
                                                <li key={index} className="important_dates_list">{ res.list}</li>
                                        )
                                    
                                    }) 
                                ) : (
                                    <div>
                                        no result
                                    </div>
                                )
                            }
                               
                            
                        </ul>
                    </Col>
                </Row>
            </div>
            {this.state.latestresult.nameOfPost}
            <p>{this.state.latestresult.id}</p>
         <p>{this.state.latestresult.tableSubTitle}</p>
         </div>
         ) : (
             <div>
            <p>Loading post</p>
            </div>
         )
        return (
            <div>
                <h4>route parameter -hjgjhg </h4>
                <Table className="responsive-table centered">

                </Table>
                
                <h3>{Latestnews}</h3>
            </div>
        )
        
    }
}

export default LatestResultDetail